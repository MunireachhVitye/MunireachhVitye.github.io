(function(){
  function GETcookie(name) {
      var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) {
        return match[2];
      }
    }
  if (document.cookie.indexOf("token") >= 0) {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (xhr.readyState === xhr.DONE) {
        var t = JSON.parse(xhr.responseText)
        if (t.status === 200){
          console.log("Logged In! As: "+t.username)
          document.getElementById("loggedIN").innerHTML="Welcome Back! "+t.username+"<br>End of Popup Demo.";
        }
        else if (t.status === 401){
          console.log("Something Went Wrong! Check Network.")
        }
      }
    });
    
    xhr.open("GET", "https://vas-comms.glitch.me/tokenVerify");
    
    xhr.send(data);
    }
    
}())