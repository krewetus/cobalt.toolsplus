chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
        activeTabs.map(function (tab) {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              func: () => {
                document.getElementById("url-input-area").value = "input your stupid link";
              },
            });
        });
    });
});