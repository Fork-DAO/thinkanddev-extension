// Listener para el cambio de URL
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {

    // Verifico si el cambio es en la url. El valor de la url solo es agregado cuando cambia
    if (changeInfo.url) {
        const urlRequest = `http://www.example.com?${changeInfo.url}`;
        console.log('URL UPDATED. REQUEST', urlRequest);
        // calls the inject function
        try {
            const response = await fetch(changeInfo.url);
            if (response.status === 200) {
                // Result now contains the response text, do what you want...
                chrome.action.setBadgeText({ text: "OK", tabId: tabId  });
                chrome.action.setBadgeBackgroundColor({ color: [0, 255, 0, 128], tabId: tabId });
            } else {
                chrome.action.setBadgeText({ text: response.status.toString(), tabId: tabId });
                chrome.action.setBadgeBackgroundColor({ color: [255, 255, 0, 128], tabId: tabId });
            }
        } catch (e) {
            chrome.action.setBadgeText({ text: "ERROR", tabId: tabId });
            chrome.action.setBadgeBackgroundColor({ color: [255, 0, 0, 128], tabId: tabId });
            console.error(e);
        }
    }
});