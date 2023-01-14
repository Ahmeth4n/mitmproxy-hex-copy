chrome.tabs.onUpdated.addListener(function(){
    chrome.tabs.getSelected(null,function(tab) {//get current tab without any selectors
        if(/^http:\/\/127.0.0.1:8081/.test(tab.url)){
            chrome.tabs.executeScript(null, {file:'./copy_front.js'})
            chrome.tabs.insertCSS(null, {file:'./copy.css'})
        }
    });
});