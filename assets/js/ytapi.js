var queryY = "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC5vVe2R4ucoMzJP53o38Yaw&key=AIzaSyA-enB949bkk4hCtJmrwpy_dHle7YjH1wQ"
var text = "rsimg";

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
            console.log(ydata.items[0].snippet.thumbnails.maxres.url);
            for (var i = 0; i < 5; i++) {
                var imgurl = ydata.items[i].snippet.thumbnails.medium.url;
                var spliturl = imgurl.split('/');
                console.log(spliturl)
                var newlink = "https://www.youtube.com/watch?v=" + spliturl[4] + "&ab_channel=TheWiggles"
                var ytitle = ydata.items[i].snippet.title;
                var ydescribe = ydata.items[i].snippet.description;

                $("#link" + i).html("<a href=" + newlink + ">" + "watch video");
                $("#title" + i).html(ytitle);
                $("#card-img" + i).html("<img id=" + text + " " + " src=" + imgurl + ">");
                $("#snippet" + i).html(ydescribe);
            }
            console.log(ydata.items[0].snippet.description)
        })
        .catch(function(error) {
            console.log(error)
        })
}
// btnClicks.addEventListener('click', getAPI);
youtubeAPI();