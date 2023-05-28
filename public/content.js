const EXTENSION_ID = "njglnfiegpenfclcbpgfcnmhklkfkdmd";

// procesamos los mensajes que sean de metamask
window.addEventListener("message", (event) => {
	if (event.data) {
		// Si el mensaje es eth_sendTransaction
		if (event?.data?.data?.data?.method === "eth_sendTransaction") {
			// enviamos el mensaje a la extension
			chrome.runtime.sendMessage(EXTENSION_ID, {message: "eth_sendTransaction", data: event.data.data.data});
		}
	}
});



const s = document.createElement("script")
s.src = chrome.runtime.getURL("inject.js");

s.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(s);