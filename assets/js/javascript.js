var query = "https://rest.bandsintown.com/artists/the%20wiggles/events?app_id=coding"
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
                var dataD = data[0].datetime;

                $("#title" + i).html(datatitle);
                $("#snippet" + i).html(datadescr);
                $("#location" + i).html("Location: " + datalocation);
                $("#link" + i).html("<a href=" + ticketlink + ">" + "get ticket");
                $("#card-img" + i).html("<img id=" + text + " " + " src=" + dataimg + ">");
                $("#date" + i).html(dataD);
            }

            console.log(data);
            console.log(data[0].artist.url);

        })
        .catch(function(error) {
            console.log(error)
        })
}


// btnClicks.addEventListener('click', getAPI);
getAPI();