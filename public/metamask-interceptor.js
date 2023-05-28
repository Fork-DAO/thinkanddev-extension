chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "eth_sendTransaction") {
		chrome.storage.local.set({eth_sendTransaction: request.data});
		chrome.windows.create({
			type: 'popup',
			url: 'index.html',
			height: 613,
			width: 300,
		});
	}
});