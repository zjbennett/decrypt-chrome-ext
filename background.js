function genericOnClick(info, tab) {    
    console.log("info: " + JSON.stringify(info.selectionText));
    chrome.tabs.query({
        "active": true,
        "currentWindow": true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "functiontoInvoke": "decryptSelection",
            "selection" : info.selectionText
        });
    });
}

chrome.contextMenus.create({
    "title": "Decrypt",
    "contexts": ["selection"],
    "onclick": genericOnClick
})
