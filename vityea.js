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
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.body.classList.add('light-mode');
    }
})

function fetchNews() {
    fetch('./news.json')
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
        newsItem.innerHTML = `Date: ${new Date(item.date)}<br>${nameProtocol()}<br>Type: ${typeContent(item.type)}<br>${item.content}`;
        newsUpdatesDiv.appendChild(newsItem);
    })
    .catch(error => {
        console.error('Error fetching news:', error);
        const newsUpdatesDiv = document.getElementById('newsUpdates');
        newsUpdatesDiv.innerHTML = '<p>Failed to load news updates. Please try again later.</p>';
    });
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