var queryY = "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC5vVe2R4ucoMzJP53o38Yaw&key=AIzaSyA-enB949bkk4hCtJmrwpy_dHle7YjH1wQ"

function youtubeAPI() {
    fetch(queryY, {
            method: "GET"
        })
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(ydata) {
            console.log(ydata);
            console.log(ydata.items[0].snippet.thumbnails.medium.url);
            var imgurl = ydata.items[0].snippet.thumbnails.medium.url;
            var spliturl = imgurl.split('/');
            console.log(spliturl)
            var newlink = "https://www.youtube.com/watch?v=" + spliturl[4] + "&ab_channel=TheWiggles"
            console.log(newlink);

        })
        .catch(function(error) {
            console.log(error)
        })
}
// btnClicks.addEventListener('click', getAPI);
youtubeAPI();