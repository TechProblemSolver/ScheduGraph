function loadNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    let noteListElement = document.getElementById('noteList');
    if (noteListElement) {
        noteListElement.innerHTML = '';
        notes.forEach((note, index) => {
            noteListElement.innerHTML += `<h1 style="text-align: center; display: grid;">By: ${note.user}</h1><p><label>Note: </label>${note.content}<button onclick="removenote(${index})">Delete</button></p><hr><br>`;
        });
    } else {
        console.error("noteList element not found");
    }

    let noteCountElement = document.getElementById('noteCount');
    if (noteCountElement) {
        noteCountElement.textContent = `Total Notes: ${notes.length}`;
    }
}

function changeTheme() {
    let theme = document.getElementById('body');
    let themeIcon = document.getElementById('theme');
    let currentTheme = themeIcon.textContent;

    if (currentTheme === '🌙') {
        theme.style.backgroundColor = 'rgb(50, 50, 50)';
        theme.style.color = 'white';
        themeIcon.textContent = '☀️';
        document.getElementById('signLog').style.borderRight = '1px solid white';
        localStorage.setItem('theme', '☀️');
    } else {
        theme.style.backgroundColor = 'white';
        theme.style.color = 'black';
        themeIcon.textContent = '🌙';
        document.getElementById('signLog').style.borderRight = '1px solid black';
        localStorage.setItem('theme', '🌙');
    }
}

function showMeaning1() {
    let ans = document.getElementById('label');
    ans.innerHTML = '<hr><p>Create Account</p>';
}

function hideMeaning1() {
    let ans = document.getElementById('label');
    ans.innerHTML = '';
}

function showANS1() {
    let ans = document.getElementById('ans1');
    ans.innerHTML = '<hr><img src="./1.jpg" width="200" height="200" style="border-radius: 50%;"><p>ScheduGraph is a place where you can keep track of your notes, schedules and things you want to do. You can see all finished work and other things on a bar graph.</p>';
}

function hideANS1() {
    let ans = document.getElementById('ans1');
    ans.innerHTML = '';
}

function showANS2() {
    let ans = document.getElementById('ans2');
    ans.innerHTML = '<hr><img src="./Screenshot 2024-10-26 135443.png"><p>To make an account, you go up to the header and click the + button and fill in the blank.</p>';
}

function hideANS2() {
    let ans = document.getElementById('ans2');
    ans.innerHTML = '';
}

function showANS3() {
    let ans = document.getElementById('ans3');
    ans.innerHTML = '<hr><img src="./Screenshot 2024-10-26 135725.png"><p>To change themes, look beside the button to add an account. You will see a crescent moon or a sun. Click the button to change themes</p>';
}

function hideANS3() {
    let ans = document.getElementById('ans3');
    ans.innerHTML = '';
}

function showANS4() {
    let ans = document.getElementById('ans4');
    ans.innerHTML = '<hr><p>Comments have not been added yet. Keep checking to see!</p>';
}

function hideANS4() {
    let ans = document.getElementById('ans4');
    ans.innerHTML = '';
}

function showANS5() {
    let ans = document.getElementById('ans5');
    ans.innerHTML = '<hr><img src="./Screenshot 2024-10-26 181656.png"><p>To contribute to ScheduGraph, you will click on the book button which is right beside the plus button.</p>';
}

function hideANS5() {
    let ans = document.getElementById('ans5');
    ans.innerHTML = '';
}

function createAccount() {
    let form = document.getElementById('form');
    form.innerHTML = `
        <center>
            <label for="username">Username: </label><input type="text" id="username" name="username" oninput="wordCheck()"/><br><br>
            <label for="password">Password: </label><input type="password" id="password" name="password" oninput="wordCheck()"/><button id="togglePassword" onclick="showHide()">Show/Hide</button><br><br>
            <label for="gender">Gender: </label><label>Male: </label><input type="radio" id="male" name="gender" style="border-radius: 50%; border: 1px solid black; width: 10px;"/>&nbsp;<label>Female: </label><input type="radio" id="female" name="gender" style="border-radius: 50%; border: 1px solid black; width: 10px;"/><br><br>
            <button id="submitAccount" style="border-top-left-radius: 8px; border-bottom-left-radius: 8px;" onclick="makeAccount()">Send</button>
        </center>`;
}

// Toggle password visibility
function showHide() {
    let password = document.getElementById('password');
    password.type = password.type === 'password' ? 'text' : 'password';
}

// Check word length for username and password
function wordCheck() {
    let passwordField = document.getElementById('password');
    let usernameField = document.getElementById('username');

    if (usernameField.value.length >= 20) {
        alert('Username must be less than 20 characters');
        usernameField.value = '';
    }
    if (passwordField.value.length >= 20) {
        alert('Password must be less than 20 characters');
        passwordField.value = '';
    }
}

// Create account and save username to localStorage
function makeAccount() {
    let username = document.getElementById('username').value;
    localStorage.setItem('user', username);
    document.getElementById('account').innerHTML = `<b>${username}</b>`;
}

// Load the user information on dashboard
function getUser() {
    let account = document.getElementById('account');
    account.innerHTML = localStorage.getItem('user') ? `<b>${localStorage.getItem('user')}</b>` : '';
}

// Display welcome message on user dashboard
function loadUserDashboard() {
    let user = document.getElementById('welcomeUser');
    user.textContent = localStorage["user"];
}

// Log out and clear user data
function logOut() {
    localStorage.removeItem('user');
    window.location.replace('file:///C:/Users/tosba/OneDrive/Documents/Projects/ScheduGraph/app.html');
}

// Saving notes
function sendNote() {
    let notes = [];
    let notesFromLocalStorage = localStorage.getItem('notes');

    if (notesFromLocalStorage) {
        try {
            notes = JSON.parse(notesFromLocalStorage);
        } catch (error) {
            console.error('Error parsing notes from localStorage:', error);
        }
    }
    let newNote = {
        user: localStorage.getItem('user'),
        content: localStorage.getItem('note')
    };
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));

    // Increment the note count and save to localStorage
    let noteCount = notes.length;
    localStorage.setItem('noteCount', noteCount);

    // Format and set the note list for display
    let noteList = notes.map(note => `<h1 style="text-align: center; display: grid;">By: ${note.user}</h1><p><label>Note: </label>${note.content}<button onclick="removenote()">Delete</button></p><hr><br>`).join('');
    localStorage.setItem('noteList', noteList);
}

function removenote(index) {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    notes.splice(index, 1);

    localStorage.setItem('notes', JSON.stringify(notes));

    localStorage.setItem('noteCount', notes.length);

    loadNotes();
}

function addNote() {
    let note = document.getElementById('note').value;
    localStorage.setItem('note', note);

    let currentNoteAmount = parseInt(localStorage.getItem('noteAmount')) || 0; 

    currentNoteAmount += 1 * 1000
    localStorage.setItem('noteAmount', currentNoteAmount);

    sendNote();
    loadNotes();
}
