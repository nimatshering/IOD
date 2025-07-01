let socket = io();
socket.on("connection", (msg) => console.log(msg));
