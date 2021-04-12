var query = "https://rest.bandsintown.com/artists/the%20wiggles/events?app_id=coding"
var queryY = "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UC5vVe2R4ucoMzJP53o38Yaw&key=AIzaSyA-enB949bkk4hCtJmrwpy_dHle7YjH1wQ"
var links = document.querySelectorAll(".card a");
var text = "rsimg";
// links[0].attributes.href

function getAPI() {
    fetch(query, {
            method: "GET"
        })
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(data) {
            for (var i = 0; i < 5; i++) {
                var datatitle = data[i].title;
                var datadescr = data[i].description;
                var datalocation = data[i].venue.location;
                var ticketlink = data[i].url;
                var dataimg = data[0].artist.image_url;

                $("#title" + i).html(datatitle);
                $("#snippet" + i).html(datadescr);
                $("#location" + i).html("Location: " + datalocation);
                $("#link" + i).html("<a href=" + ticketlink + ">" + "get ticket");
                $("#card-img" + i).html("<img id=" + text + " " + " src=" + dataimg + ">");
            }
            console.log(data);

        })
        .catch(function(error) {
            console.log(error)
        })
}


// btnClicks.addEventListener('click', getAPI);
getAPI();