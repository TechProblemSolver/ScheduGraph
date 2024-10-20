            function createAccount() {
                let accountForm = document.getElementById('accountForm');
                accountForm.innerHTML=
`                        <div style="position: relative;">
            <p>* Username:
                <input type='text' name='nombre' placeholder='Enter Name:' size='40' id="username">
            </p>
            <p>* Password:
                <input type='password' name='password' id="password"><button onclick="showHide()">👁️</button>
            </p>
            <p>* Gender:
                <input type='radio' name='mf' value='h' id="male"> Male
                <input type='radio' name='mf' value='m' id="female"> Female
            </p>
            <p>
                <input type='submit' value='Send' onclick="account()">
            </p>
        </div>
                `;
            };
            function showHide() {
                let password  = document.getElementById('password');
                if (password.type=="password") {
                    password.type="text"
                } else if (password.type=="text") {
                    password.type="password"
                }
            };
            function account() {
                let USERNAME = document.getElementById('username').value;
                let PASSWORD = document.getElementById('password').value;
                localStorage.setItem('Username', USERNAME)
                users = []
                users += localStorage["Username"]
                localStorage["users"] += [`${localStorage["Username"]},`]
                console.log(`All Users: ${localStorage["users"]}`)
            }
