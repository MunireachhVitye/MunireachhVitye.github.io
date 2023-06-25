/*
    ##############################################################
    # vityea.js                                                  #
    # Designed by Vityea.                                        #
    # Version v1.0 Published Date: Sunday 25, June 2023. 7:23 PM #
    ##############################################################
*/

(() => {
    console["log"]("%cvityea.js", "font-weight: bold;")
    console["log"]("Designed & Coded by Vityea.")
})

function updateInfo(){
    const x = new XMLHttpRequest();
    x.withCredentials = true;
    x.open("GET", "https://api.mrdiscord.repl.co/vityea_info")
    x.send(null)
    x.onload = () => {
        if (x.readyState === x.DONE){
            document.getElementById("newsUpdates").innerHTML=x.responseText;
        }
    }

    x.onerror = () => {
        document.getElementById("newsUpdates").innerHTML="Error! Failed to get the latest news!";
    }
}