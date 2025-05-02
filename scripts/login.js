function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "main.html")
        .catch(err => alert("Lỗi đăng nhập: " + err.message));
}

function register() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const userId = userCredential.user.uid;
            return firebase.firestore().collection("users").doc(userId).set({
                name: username
            });
        })
        .then(() => location.href = "main.html")
        .catch(err => alert("Lỗi tạo tài khoản: " + err.message));
}


