let secretPassword = "080403";

// Check the secret code to enter chatroom
function checkSecretCode() {
    const inputCode = document.getElementById('secretCode').value;
    if (inputCode === secretPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chatroom').style.display = 'block';
        loadChatHistory();
    } else {
        alert('Incorrect code!');
    }
}

// Send message and update chat window
function sendMessage() {
    const message = document.getElementById('message').value;
    const username = document.getElementById('username').value || 'Anonymous';

    if (message) {
        const chatWindow = document.getElementById('chatWindow');
        let newMessage = `<p><strong>${username}:</strong> ${message}</p>`;
        chatWindow.innerHTML += newMessage;
        saveMessageToLocalStorage(newMessage);
        document.getElementById('message').value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

// Store messages locally for persistence
function saveMessageToLocalStorage(message) {
    let chatHistory = localStorage.getItem('chatHistory') || '';
    chatHistory += message;
    localStorage.setItem('chatHistory', chatHistory);
}

// Load previous chat history
function loadChatHistory() {
    const chatHistory = localStorage.getItem('chatHistory');
    if (chatHistory) {
        document.getElementById('chatWindow').innerHTML = chatHistory;
    }
}

// Clear chat history
function clearChat() {
    if (confirm("Are you sure you want to clear the chat history?")) {
        localStorage.removeItem('chatHistory');
        document.getElementById('chatWindow').innerHTML = '';
    }
}

// Switch to game mode
function toggleGameMode() {
    document.getElementById('chatroom').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

// Return to chat after game mode
function returnToChat() {
    const inputCode = prompt('Please re-enter the secret code to return to the chat:');
    if (inputCode === secretPassword) {
        document.getElementById('game').style.display = 'none';
        document.getElementById('chatroom').style.display = 'block';
    } else {
        alert('Incorrect code!');
    }
}