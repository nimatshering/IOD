const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const users = new Map();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Helper to send current users list
function emitUserList() {
  const userList = Array.from(users.values()); // get all usernames
  io.emit("user list", userList);
}

io.on("connection", (socket) => {
  // When username is set
  socket.on("set username", (nickname) => {
    users.set(socket.id, nickname);
    socket.broadcast.emit("chat message", `${nickname} has connected`);
    emitUserList();
  });

  socket.on("chat message", (msg) => {
    const nickname = users.get(socket.id) || "Anonymous";
    socket.broadcast.emit("chat message", `${nickname}: ${msg}`);
  });

  socket.on("change nickname", (newNick) => {
    const oldNick = users.get(socket.id) || "Anonymous";
    users.set(socket.id, newNick);
    socket.emit("nickname changed", newNick);
    socket.broadcast.emit(
      "chat message",
      `${oldNick} is now known as ${newNick}`
    );
    emitUserList();
  });

  socket.on("typing", (isTyping) => {
    const nickname = users.get(socket.id);
    if (!nickname) return;

    if (isTyping) {
      socket.broadcast.emit("typing", nickname);
    } else {
      socket.broadcast.emit("stop typing");
    }
  });

  socket.on("disconnect", () => {
    const nickname = users.get(socket.id);
    users.delete(socket.id);
    if (nickname) {
      socket.broadcast.emit("chat message", `${nickname} has disconnected`);
    }
    emitUserList();
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
