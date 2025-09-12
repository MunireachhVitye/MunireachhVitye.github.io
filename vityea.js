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
        const nameList = ["nan munireachh vityea", "munireachh vityea", "nan vityea", "vityea", "nmv", "admin", "administrator", "owner", "ណន មុនីរាជវិទ្យា", "មុនីរាជវិទ្យា", "ណន វិទ្យា", "វិទ្យា"];
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

function showAlert(){
    document.getElementById('customAlert').style.display = 'flex';
}

function closeCustomAlert() {
  document.getElementById('customAlert').style.display = 'none';

}
