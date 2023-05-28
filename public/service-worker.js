import "./metamask-interceptor.js";

// Administrar el estado de la extension.
chrome.runtime.onInstalled.addListener(() => {
	chrome.action.setBadgeText({
		text: "OFF",
	});
});