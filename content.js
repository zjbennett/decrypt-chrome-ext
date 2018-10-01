var decryptSelection = function (text) {
    console.log("decryptSelection is invoked");
    console.log(text);
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "decryptSelection") {
        decryptSelection(message.selection);
    }
});