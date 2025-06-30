const socket = io();

const usersList = document.getElementById("users-list");

socket.on("user list", (usernames) => {
  usersList.innerHTML = ""; // clear current list
  usernames.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    usersList.appendChild(li);
  });
});

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

let username = "";
let typing = false;
let typingTimeout;

while (!username) {
  username = prompt("Enter your nickname:");
}

socket.emit("set username", username);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    const message = input.value;

    if (message.startsWith("/nick ")) {
      const newNick = message.slice(6).trim();
      if (newNick) {
        socket.emit("change nickname", newNick);
      }
    } else {
      const item = document.createElement("li");
      item.textContent = `${username}: ${message}`;
      item.classList.add("self");
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);

      socket.emit("chat message", message);
    }

    input.value = "";
  }
});

input.addEventListener("input", () => {
  if (!typing) {
    typing = true;
    socket.emit("typing", true);
  }
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    typing = false;
    socket.emit("typing", false);
  }, 1000); // stop typing after 1 second of no input
});

socket.on("chat message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on("user count", (count) => {
  const item = document.createElement("li");
  item.textContent = `Users online: ${count}`;
  item.classList.add("system");
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on("nickname changed", (newNick) => {
  username = newNick;
  const item = document.createElement("li");
  item.textContent = `You are now known as ${newNick}`;
  item.classList.add("system");
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

// Handle "is typing" notification
const typingNoticeId = "typing-notice";

socket.on("typing", (nick) => {
  let notice = document.getElementById(typingNoticeId);
  if (!notice) {
    notice = document.createElement("li");
    notice.id = typingNoticeId;
    notice.classList.add("system");
    messages.appendChild(notice);
  }
  notice.textContent = `${nick} is typing...`;
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on("stop typing", () => {
  const notice = document.getElementById(typingNoticeId);
  if (notice) {
    notice.remove();
  }
});
