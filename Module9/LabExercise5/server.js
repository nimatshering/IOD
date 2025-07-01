const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = new Map(); // socket.id -> nickname

// Serve static HTML
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Helper: broadcast current user list
function emitUserList() {
  io.emit("user list", Array.from(users.values()));
}

io.on("connection", (socket) => {
  socket.on("set username", (nickname) => {
    users.set(socket.id, nickname);
    socket.broadcast.emit("chat message", `${nickname} joined`);
    emitUserList();
  });

  //  incoming chat messages
  socket.on("chat message", (msg) => {
    const nickname = users.get(socket.id) || "Anonymous";
    socket.broadcast.emit("chat message", `${nickname}: ${msg}`);
  });

  //  typing events
  socket.on("typing", (isTyping) => {
    const nickname = users.get(socket.id);
    if (!nickname) return;
    if (isTyping) {
      socket.broadcast.emit("typing", nickname);
    } else {
      socket.broadcast.emit("stop typing");
    }
  });

  // chat disconnect
  socket.on("disconnect", () => {
    const nickname = users.get(socket.id);
    users.delete(socket.id);
    if (nickname) {
      socket.broadcast.emit("chat message", `${nickname} Left`);
    }
    emitUserList();
  });
});

// Start server
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
