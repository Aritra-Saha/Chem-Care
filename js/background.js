chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("background.js got a message")
        console.log(request);
        console.log(sender);
        var url;

        chrome.tabs.query({ 'active': true, 'currentWindow': true }, function(tabs) {
            url = tabs[0].url;
        });

        sendResponse(url);
    }
);

console.log("HELLO");

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
});

