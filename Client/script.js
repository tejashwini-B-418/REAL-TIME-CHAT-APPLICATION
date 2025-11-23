const socket = io("http://localhost:3000");

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.onclick = () => {
    if (input.value.trim() !== "") {
        socket.emit("chat-message", input.value);
        input.value = "";
    }
};

socket.on("chat-message", (msg) => {
    let p = document.createElement("p");
    p.textContent = msg;
    messagesDiv.appendChild(p);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
