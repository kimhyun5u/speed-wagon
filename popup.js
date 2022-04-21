(function () {
    document.querySelector("#search").addEventListener('click', function(target) {
        gapi.client.init({
            "apiKey": AIzaSyB54qFAt2iDi8peCN_oex6UZAtsJ1XumoI,
        }).then(function() {
            return gapi.client.language.translations.list({
                q: '잇섭',
                // part: 'snippet'
            })
        }).then(function(response) {
            console.log(response)
        });
    });
})()