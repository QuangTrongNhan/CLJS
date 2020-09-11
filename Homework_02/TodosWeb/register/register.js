const firebaseConfig = {
    apiKey: "AIzaSyAG256dho7GAyFRO_AHom2rhmb0L9KEx-Q",
    authDomain: "cljs-d303.firebaseapp.com",
    databaseURL: "https://cljs-d303.firebaseio.com",
    projectId: "cljs-d303",
    storageBucket: "cljs-d303.appspot.com",
    messagingSenderId: "940010432177",
    appId: "1:940010432177:web:0a0640561f461e7fe92490",
    measurementId: "G-D5ZP0TC458"
};
firebase.initializeApp(
    firebaseConfig
);
var db = firebase.firestore();

document.getElementById("btnSubmit").addEventListener("click", () => {
    let users = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    if (users === "" || password === "" || repassword === "") {
        alert("Username is not null!")
    }
    else if (password != repassword) {
        alert("Please check confirm password")
    }else {
        //add data to firebase
        db.collection("register").add({
            username: users,
            password: password,
            confirmPassword: repassword
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        window.location.href = "https://logintodos-fb1ac.web.app";
    }  
})