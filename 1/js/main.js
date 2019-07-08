var A=document.getElementById("text");

function bold()
{
    
    if(A.style.fontWeight=="normal"){
        A.style.fontWeight="bold";
    }
    else{
        A.style.fontWeight="normal";
    }
    event.preventDefault();
}
function italic()
{
    if(A.style.fontStyle=="normal"){
        A.style.fontStyle="italic";
    }
    else{
        A.style.fontStyle="normal";
    }
    event.preventDefault();
}
function underline()
{
    if(A.style.textDecoration=="none"){
        A.style.textDecoration="underline";
    }
    else{
        A.style.textDecoration="none";
    }
     event.preventDefault();    
}

function px(){
    A.style.fontSize=document.getElementById("size").value;
}
function pol(){
    A.style.fontFamily=document.getElementById("police").value;
}
$("#cl").click(function(){
    $("#text").toggle("5000");
});
$("#nb").mouseover(function(){
    $("#btn1").css("display","flex")
    $("#nb").css("opacity","0.7")
});
$("#nb").mouseleave(function(){
    $("#btn1").css("display","none")
    $("#nb").css("opacity","1")
});
$("#gt").mouseover(function(){
    $("#nn").css("display","flex")
    $("#gt").css("opacity","0.7")
});
$("#gt").mouseleave(function(){
    $("#nn").css("display","none")
    $("#gt").css("opacity","1")
});
$("#bh").mouseover(function(){
    $("#mo").css("display","flex")
    $("#bh").css("opacity","0.7")
});
$("#bh").mouseleave(function(){
    $("#mo").css("display","none")
    $("#bh").css("opacity","1")
});
$("#ou").mouseover(function(){
    $("#oi").css("display","flex")
    $("#ou").css("opacity","0.7")
});
$("#ou").mouseleave(function(){
    $("#oi").css("display","none")
    $("#ou").css("opacity","1")
});
$("#on").mouseover(function(){
    $("#no").css("display","flex")
    $("#on").css("opacity","0.7")
});
$("#on").mouseleave(function(){
    $("#no").css("display","none")
    $("#on").css("opacity","1")
});
$("#ot").mouseover(function(){
    $("#to").css("display","flex")
    $("#ot").css("opacity","0.7")
});
$("#ot").mouseleave(function(){
    $("#to").css("display","none")
    $("#ot").css("opacity","1")
});
$("#o2").mouseover(function(){
    $("#o1").css("display","flex")
    $("#o2").css("opacity","0.7")
});
$("#o2").mouseleave(function(){
    $("#o1").css("display","none")
    $("#o2").css("opacity","1")
});
$("#o3").mouseover(function(){
    $("#o4").css("display","flex")
    $("#o3").css("opacity","0.7")
});
$("#o3").mouseleave(function(){
    $("#o4").css("display","none")
    $("#o3").css("opacity","1")
});
$("#o5").mouseover(function(){
    $("#o6").css("display","flex")
    $("#o5").css("opacity","0.7")
});
$("#o5").mouseleave(function(){
    $("#o6").css("display","none")
    $("#o5").css("opacity","1")
});
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBlnqLzYFpCrr9AcCUMcJdOHkzjZZ4rZYY",
    authDomain: "go-my-code-88687.firebaseapp.com",
    databaseURL: "https://go-my-code-88687.firebaseio.com",
    projectId: "go-my-code-88687",
    storageBucket: "",
    messagingSenderId: "579077158599",
    appId: "1:579077158599:web:c47c251bfe0f86a3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messageRef=firebase.database().ref('go-my-code-88687');
  function submitForm(e){
      e.preventDefault();
      var name=document.getElementById('name').value;
      var email=document.getElementById('email').value;
      var track=document.getElementById('track').value;
      var tel=document.getElementById('tel').value;
      saveMessage(name,email,track,tel);
    
    }
    document.getElementById('contact1').addEventListener('submit', submitForm);
    function saveMessage(name,email,track,tel){
        var newMessageRef= messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        track: track,
        tel: tel
    });
    }