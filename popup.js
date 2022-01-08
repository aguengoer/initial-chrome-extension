
document.getElementById("reloadButton").addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Test text";

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: tabs[0].url});});
});