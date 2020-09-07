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
document.getElementById("getUsers").addEventListener("click",()=>{
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    // db.collection("users").add({
    //     username: users,
    //     password: pass
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    
    // });




    
    db.collection("users")
    .get()
    .then((querySnapshot) => {
        let users = querySnapshot.docs.map(val=>{
            return val.data()})

        // querySnapshot.forEach((doc) => {
        //     let user = doc.data()
        //     console.log(user)
        // });
        console.log(users)
        return users;
    })
    .then(users=>{
        for(let i = 0; i < users.length;i++){
            if(users[i].username == user){
                if(users[i].password == pass){
                    alert("login successful")
                    return users[i];
                }else{
                    alert("Your password is wrong!")
                    return null;
                }
            }
        }
        alert("Your password is not exist!")
    })
})