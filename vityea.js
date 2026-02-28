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

document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
    systemNews();
    //BacII is coming, we need a timer for that.
    const systemNewsDiv = document.getElementById('systemNews');
    if (!systemNewsDiv) return;
    systemNewsDiv.innerHTML = '<h3>System News: BacII is coming.</h3><div id="timer"></div>';
    injectTimer();
    //End of War
    if (localStorage.getItem("bgMode") === "dark" || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem("bgMode")) {
            document.body.classList.add('dark-mode');
    }
    if (localStorage.getItem("bgMode") === "light" || window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches && !localStorage.getItem("bgMode")) {
            document.body.classList.add('light-mode');
    }
})

function shiftMode(){
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    showCustomAlert("Mode changed to "+(document.body.classList.contains('dark-mode') ? "Dark Mode" : "Light Mode")+".");
    localStorage.setItem("bgMode", document.body.classList.contains('dark-mode') ? "dark" : "light");
    triggerSettingChange();
}

function resetMode(){
    localStorage.removeItem("bgMode");
    document.body.classList.remove('dark-mode');
    document.body.classList.remove('light-mode');
    showCustomAlert("Mode reset to Automatic. The website will now follow your system preference.");
    triggerSettingChange();
}

function fetchNews(bypass) {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/Users/mac/Documents/GitHub/MunireachhVitye.github.io/index.html' || bypass === true) {
        //For some reason each browsers are high on crack so we added Math.random() and Date.now() to decache and to roast your internet connection.
    fetch('./news.json?'+Math.random()+'&timestamp='+Date.now())
    .then(response => response.json())
    .then(data => {
        const newsUpdatesDiv = document.getElementById('newsUpdates');
        newsUpdatesDiv.innerHTML = ''; // Clear existing content

        /*data.forEach(item => {
            const newsItem = document.createElement('p');
            newsItem.innerHTML = `${item.date} - ${item.content}`;
            newsUpdatesDiv.appendChild(newsItem);
        });*/
        const newsItem = document.createElement('p');
        const item = data[data.length - 1];
        const nameList = ["nan munireachh vityea", "munireachh vityea", "nan vityea", "vityea", "nmv", "admin", "administrator", "owner", "ណន មុនីរាជវិទ្យា", "មុនីរាជវិទ្យា", "ណន វិទ្យា", "វិទ្យា", "nigga", "nig", "nigger"];
        function nameProtocol(){
            if (nameList.includes(item.name.toLowerCase())) return "Author: <b>Owner</b>";
            else return "Author: <b>"+item.name+"</b>";
        }
        function editedContent(){
            if (item.edited) return "<br><div class=\"tooltip\"><i class=\"far fa-pen-to-square\"></i><span class=\"tooltiptext\">This content was modified by the original owner.</span></div>";
            else return "";
        }
        function checkedit(){
            if (item.editContent) return item.editContent;
            else return "";
        }
        newsItem.innerHTML = `Date: ${new Date(item.date)}<br>${nameProtocol()}${editedContent()}<br>Type: ${typeContent(item.type)}<br>${item.content}<br>${checkedit()}`;
        newsUpdatesDiv.appendChild(newsItem);
    })
    .catch(error => {
        console.error('Error fetching news:', error);
        const newsUpdatesDiv = document.getElementById('newsUpdates');
        newsUpdatesDiv.innerHTML = '<p>Bro your internet connection is laggy asf. Please wait until you have more FPS then click <button onclick="fetchNews()" class="btn black border">Refresh</button> to try again. '+new Date()+'</p>';
    });
}
else return console.log("Not on index page nor bypass is true.");
}
function typeContent(type){
    //Just news
    if (type === "news") return "News Update";
    //Normal Announcements
    if (type === "anno") return "Announcement";
    //Alerts to take action
    if (type === "alert") return "Alert";
    //Upcoming changes
    if (type === "info") return "Information";
    //Events to partake
    if (type === "event") return "Event";
    //Game
    if (type === "game") return "Game";
    //General stuff
    return "General";
}

function showCustomAlert(message) {
if (document.getElementById('customAlert')) {
    document.getElementById('alertMessage').innerText = message;
    showAlert();
    return;
}
  var alertHTML = `<div id="customAlert" class="alert" style="display: flex;">
        <div class="alert-content">
            <p id="alertMessage">${message}</p>
            <button onclick="closeCustomAlert()" class="border black btn">OK</button>
        </div>
    </div>`;
    var alertDiv = document.createElement('div');
    alertDiv.innerHTML = alertHTML;
    document.body.appendChild(alertDiv);
}

function systemNews(){
    const today = new Date();
//Will trigger on 09 Feb. every year, the birthday of Vityea. We will post news about Vityea and maybe some giveaways if we are feeling generous.
if (today.getMonth() === 1 && today.getDate() === 9) {
    if (sessionStorage.getItem("readSystemNews") === new Date().toDateString()) return console.log("System news already read for today.");
    console.log("09 Feb. Triggering Vityea birthday news.");
    sessionStorage.setItem("readSystemNews", new Date().toDateString());
    showCustomAlert("Today is Vityea's Birthday.\nPlease say Happy Birthday.")
}
/*else if (today.getMonth() === 1 && today.getDate() === 16 || 17 || 18 || 19) {
//chatgpt recommend fix: today.getMonth() === 1 && [16,17,18,19].includes(today.getDate())
    if (sessionStorage.getItem("readSystemNews") === new Date().toDateString()) return console.log("System news already read for today.");
    console.log("16-19 Feb of 2025. Triggering Chinese New Year news.");
    sessionStorage.setItem("readSystemNews", new Date().toDateString());
    showCustomAlert("Happy Chinese New Year 2025!\nWishing you a prosperous year ahead filled with joy and success.");
}*/
else if (today.getMonth() === 7 && today.getDate() === 10 || today.getMonth() === 7 && today.getDate() === 11){
    if (sessionStorage.getItem("readSystemNews") === new Date().toDateString()) return console.log("System news already read for today.");
    console.log("28-29 Aug. Triggering Oh shit it's Bacii exams")
    sessionStorage.setItem("readSystemNews", new Date().toDateString());
    showCustomAlert("Men. Get ready for war. BacII is here.")
} else {
    console.log("Cya next year!");
}
}

function showAlert(){
    document.getElementById('customAlert').style.display = 'flex';
}

function closeCustomAlert() {
  document.getElementById('customAlert').style.display = 'none';

}

function usernameFind(){
    var username = document.getElementById('usernameInput').value.trim().toLowerCase();
    var userSplit = username.split('.');
    var contextDiv = document.getElementById('context');
    if(username === ""){
        showCustomAlert("Please enter a username to lookup.");
        return;
    }
    else {
            fetch('email/'+username+'.json?'+Math.random()+'&timestamp='+Date.now())
    .then(response => response.json())
    .then(data => {
        if (userSplit[0] === "relay"){
            contextDiv.innerHTML = '<h3>Username Lookup Result:</h3><p>The username <b>'+username+'</b> is a <span style="color: orange; font-weight: bold;">special relay</span> on <i>vityea.us.kg</i> domain.<br>Your email address is: <b>'+data.email+'</b><br>Created on: <b>'+data.created+'</b><br>Forwarded to: <b>'+data.forwarder+'</b></p>';
            return;
        }
        contextDiv.innerHTML = '<h3>Username Lookup Result:</h3><p>The username <b>'+username+'</b> is <span style="color: green; font-weight: bold;">valid</span> on <i>vityea.us.kg</i> domain.<br>Your email address is: <b>'+data.email+'</b><br>Created on: <b>'+data.created+'</b><br>Forwarded to: <b>'+data.forwarder+'</b></p>';
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
        if (userSplit[0] === "relay"){
            contextDiv.innerHTML = '<p>The username <b>'+username+'</b> does not exist as a <span style="color: orange; font-weight: bold;">special relay</span> on <i>vityea.us.kg</i> domain.<br>If you want to create a special relay email, please contact admin@vityea.us.kg or root@vityea.us.kg</p>';
        }
        contextDiv.innerHTML = '<p>The username <b>'+username+'</b> does not exist on <i>vityea.us.kg</i> domain.<br>If you want to snatch a free email, now is the chance!<br>Sign up here: <a href="https://forms.vityea.us.kg/" class="black" target="_blank" rel="noopener">https://forms.vityea.us.kg</a><br>If you believe this is an error, please contact admin@vityea.us.kg or root@vityea.us.kg</p>';
    });
    }
}

function injectTimer(){
    const timerDiv = document.getElementById('timer');
    if (!timerDiv) return;
    const targetDate = new Date('2026-08-10T07:00:00');
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
        timerDiv.innerHTML = '<center><h1>Men. Get Ready for War.</h2></center>';
        return;
    
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    timerDiv.innerHTML = `<center><h2 style="color: red">Countdown to BacII: ${days}d ${hours}h ${minutes}m ${seconds}s</h2></center>`;
    setTimeout(injectTimer, 1000);
}