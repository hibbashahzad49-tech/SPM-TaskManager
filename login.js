// Login Feature

function login(username, password) {
    if (username === "" || password === "") {
        alert("Please fill all fields");
        return;
    }
    console.log("Login successful for: " + username);
}

function logout() {
    console.log("User logged out");
}
