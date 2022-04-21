let requestUrl = "https://www.googleapis.com/youtube/v3/search"
let apiKey = "AIzaSyB54qFAt2iDi8peCN_oex6UZAtsJ1XumoI"

function search() {
    
    gapi.client.init({
        'apiKey': apiKey,
    }).then(function() {
        return gapi.client.language.translations.list({
            q: '잇섭',
            // part: 'snippet'
        })
    }).then(function(response) {
        console.log(response)
    });
}

(function () {
    document.querySelector("#")
})()