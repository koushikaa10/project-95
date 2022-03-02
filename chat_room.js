var firebaseConfig = {
    apiKey: "AIzaSyD6MLQ20wVyAR1RvSGZJNfZJBEky85fp20",
    authDomain: "chatapp-80f2a.firebaseapp.com",
    databaseURL: "https://chatapp-80f2a-default-rtdb.firebaseio.com",
    projectId: "chatapp-80f2a",
    storageBucket: "chatapp-80f2a.appspot.com",
    messagingSenderId: "782231027169",
    appId: "1:782231027169:web:c27c31cfecc0295ea1a6a0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function AddRoom()
{
     Room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(Room_name).update({purpose: "adding a room name"});
     localStorage.setItem("room_name" , Room_name);
     window.location="chat_page.html";
     }
     
     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! " ;

     function getData() 
     {firebase.database().ref("/").on('value',

     function(snapshot) 
     {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) 
     {childKey = childSnapshot.key;
Room_names = childKey;

console.log("Room_name" + Room_names);
row="<div class='Room_name' id=" + Room_names + " onclick='redirectToroomname(this.id)' > #" + room_names + "</div>";

function redirectToroomname(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "chat_page.html";
}

function Logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
//End code
});});}