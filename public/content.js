
const s = document.createElement("script")
s.src = chrome.runtime.getURL("inject.js");

s.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(s);

// For simple requests:
chrome.runtime.onMessage.addListener(
	function (message, sender, sendResponse) {
		console.log("LLEGO COMO CAMPEION")
		console.log(message, sender, sendResponse);
	});