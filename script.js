const terminalInput = document.getElementById("terminal-input");
const terminalContent = document.getElementById("terminal-content");
const terminalPrefix = document.getElementById("terminal-prefix");
const usernameSpan = document.getElementById("username");

function updatePrefix(username) {
    usernameSpan.textContent = username;
    terminalInput.focus();
}

terminalInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const command = terminalInput.value;
        const newLine = document.createElement("p");
        const prefixSpan = document.createElement("span");
        prefixSpan.classList.add("prefix");
        prefixSpan.innerHTML = `root@<span id="username">${usernameSpan.textContent}</span>`;
        const commandSpan = document.createElement("span");
        commandSpan.classList.add("command");
        commandSpan.textContent = command;
        newLine.appendChild(prefixSpan);
        newLine.appendChild(commandSpan);
        terminalContent.appendChild(newLine);

        terminalInput.value = "";
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }
});

const username = prompt("Enter your username:");
updatePrefix(username || "guest");
