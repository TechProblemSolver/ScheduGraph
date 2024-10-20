        function createAccount() {
            let accountForm = document.getElementById('accountForm');
            accountForm.innerHTML = `
                <div style="position: relative;">
                    <p>* Username:
                        <label for="username"></label>
                        <input type='text' id='username' placeholder='Enter Name:' size='40'>
                    </p>
                    <p>* Password:
                        <label for="password"></label>
                        <input type='password' id='password'>
                        <button aria-label="Toggle password visibility" onclick="showHide()">👁️</button>
                    </p>
                    <p>* Gender:
                        <input type='radio' name='gender' value='Male' id='male'> <label for='male'>Male</label>
                        <input type='radio' name='gender' value='Female' id='female'> <label for='female'>Female</label>
                    </p>
                    <p>
                        <button onclick="registerAccount()">Create Account</button>
                    </p>
                </div>
            `;
        }

        function showHide() {
            let password = document.getElementById('password');
            password.type = password.type === "password" ? "text" : "password";
        }

        function registerAccount() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value;

            if (!username || !password || !gender) {
                alert("Please fill all required fields.");
                return;
            }

            // Retrieve users from localStorage
            let users = JSON.parse(localStorage.getItem('users'));
            console.log(users)
            if (users.some(user => user.username === username)) {
                alert("Username already exists! Please choose another.");
                return;
            }

            users.push({ username, password, gender });
            localStorage.setItem('users', JSON.stringify(users));

            localStorage.setItem('currentUser', username); // Track the logged-in user
            window.location.replace('account.html');
        }
