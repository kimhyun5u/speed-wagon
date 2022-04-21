(function () {
    document.querySelector("#search").addEventListener('click', function(target) {
        let q = "";
        
        q = q.concat(document.querySelector("#productName").value.replaceAll(" ", "+"));
        
        q = q.concat("+리뷰");
        
        let xhreq = new XMLHttpRequest()
        xhreq.onreadystatechange = function() {
            console.log(xhreq.responseText)
            let listEl = document.querySelector("#list")
            listEl.innerHTML = ``
            for(let item of xhreq.response.items) {
                 let divEl = `<div class="d-flex item p-2">
                 <div class="item-thumbsnail me-1" style="background-image: URL(${item.thumbnails.default.url});"></div>
                 <div class="d-flex flex-column item-details">
                     <div class="item-details-title">${item.snippet.title}</div>
                     <div class="item-details-content">${item.snippet.descirption}</div>
                 </div>
             </div>`
             listEl += innerHTML += divEl
             
            }
        }
        xhreq.open("GET", `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=AIzaSyB54qFAt2iDi8peCN_oex6UZAtsJ1XumoI`, true)
        xhreq.send()
    });
})()