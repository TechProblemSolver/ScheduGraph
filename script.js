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
            document.getElementById('loginForm').style.display = 'none'; // Hide login form
        }

        function showLoginForm() {
            let loginForm = document.getElementById('loginForm');
            loginForm.innerHTML = `
                <div style="position: relative;">
                    <p>* Username:
                        <label for="loginUsername"></label>
                        <input type='text' id='loginUsername' placeholder='Enter Name:' size='40'>
                    </p>
                    <p>* Password:
                        <label for="loginPassword"></label>
                        <input type='password' id='loginPassword'>
                        <button aria-label="Toggle password visibility" onclick="showHideLogin()">👁️</button>
                    </p>
                    <p>
                        <button onclick="login()">Login</button>
                    </p>
                </div>
            `;
            document.getElementById('accountForm').style.display = 'none'; // Hide account form
            loginForm.style.display = 'block'; // Show login form
        }

        function showHide() {
            let password = document.getElementById('password');
            password.type = password.type === "password" ? "text" : "password";
        }

        function showHideLogin() {
            let password = document.getElementById('loginPassword');
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
            let users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.some(user => user.username === username)) {
                alert("Username already exists. Please choose a different username.");
                return;
            }

            // Create a new user object
            const newUser = { username, password, gender };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert("Account created successfully! You can now log in.");
            document.getElementById('accountForm').innerHTML = ""; // Clear the form
        }

        function login() {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            // Retrieve users from localStorage
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                // Successfully logged in, store currentUser in localStorage
                localStorage.setItem('currentUser', username);
                alert("Login successful! Redirecting to your account.");
                window.location.replace('account.html'); // Redirect to account page
            } else {
                alert("Invalid username or password. Please try again.");
            }
        }
