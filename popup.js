(function () {
    document.querySelector("#search").addEventListener('click', function(target) {
        let xhreq = new XMLHttpRequest()
        xhreq.onreadystatechange = function() {
            console.log(xhreq.responseText)
        }
        xhreq.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&q=kpop+music&key=AIzaSyB54qFAt2iDi8peCN_oex6UZAtsJ1XumoI", true)
        xhreq.send()
    });
})()