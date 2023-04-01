const EXTENSION_ID = "njglnfiegpenfclcbpgfcnmhklkfkdmd";
const checkEthereum = async () => {

	if (window.ethereum) {
		// do something with response here, not outside the function
		const response = await chrome.runtime.sendMessage(EXTENSION_ID, { ethereum: "ETHEREUM ENCONTRADO CHAMIGO" });
		console.log(response);
	} else {
		console.log("Ethereum not found");
	}
}
setInterval(checkEthereum, 1000);