function reddenPage() {
    let style = "position:fixed; width:60px; height:60px; bottom:40px; right:40px; background-color:#0C9; color:#FFF; border-radius:50px; text-align:center;	box-shadow: 2px 2px 3px #999;";
    let toggleBtn = `<div id="speed-wagon" style="${style}">버튼</div>`;
    document.body.innerHTML += toggleBtn;
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
    });
});