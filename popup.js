(function () {
    document.querySelector("#search").addEventListener('click', function(target) {
        let q = "";
        
        q = q.concat(document.querySelector("#productName").value.replaceAll(" ", "+"));
        
        q = q.concat("+리뷰");
        
        let xhreq = new XMLHttpRequest()
        xhreq.onreadystatechange = function() {
            console.log(xhreq.responseText)
        }
        xhreq.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyB54qFAt2iDi8peCN_oex6UZAtsJ1XumoI`, true)
        xhreq.send()
    });
})()