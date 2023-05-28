const EXTENSION_ID = "njglnfiegpenfclcbpgfcnmhklkfkdmd";
const allowedSites = [
  "https://forest.forkdaogov.xyz/",
  "https://testnets.opensea.io/collection/marcus-drop/drop",
  "https://app.uniswap.org/#/swap",
  "https://testnets.opensea.io/es/collection/dogos-world"
];
let ethereumConnected = false;
let ethereumInitialized = false;
let accountsRequested = false;




const checkEthereum = async () => {
  if (!accountsRequested && window.ethereum) {
    console.log("Requesting accounts...")
      accountsRequested = true;
      // window.ethereum
      //   .request({ method: "eth_requestAccounts" })
      //   .then((accounts) => {
      //     console.log("ACCOUNTS:", accounts);
      //     window.postMessage({
      //       message: "eth_requestAccounts",
      //       data: accounts // ES SEGURO ESTO?
      //     });
      //   });
    // window.addEventListener('message', (event) => {
    //   //console.log("window.addEventListener('message')", event.data?.data?.data?.method);
    //   if (event?.data?.data?.data?.method === "eth_sendTransaction") {
    //     window.postMessage({
    //       message: "eth_sendTransaction",
    //       data: event.data.data.data,
    //     });
    //     // const contractCallTo = event.data.data.data.params[0].to;
    //     // window.localStorage.setItem("lastContractCallTo", contractCallTo);

    //     //     // console.log("REQ",request);
    //     //     chrome.windows.create({
    //     //       active: true,
    //     //       url: 'index.html'
    //     //     });
    //   }
    // });
    console.log("Ethereum Initialized.")
  }

  // const contractCallTo = window.localStorage.getItem("lastContractCallTo");
  // if (contractCallTo) {
  //   chrome.runtime.sendMessage(EXTENSION_ID, {
  //     message: "listen",
  //     content: contractCallTo,
  //   }, (response) => {
  //     console.log("RESPOINSE FROM LISTEN", response)
  //   } );
  //   console.log("Contractcallto", contractCallTo);

  // }
};



setInterval(checkEthereum, 2000);
