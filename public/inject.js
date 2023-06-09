const EXTENSION_ID = "negbhlbkojnlcicnmofbncfgokaaaakn";
const allowedSites = [
  "https://forest.forkdaogov.xyz/",
  "https://testnets.opensea.io/collection/marcus-drop/drop",
  "https://app.uniswap.org/#/swap",
];
let ethereumConnected = false;

const checkEthereum = async () => {
  if (window.ethereum && window.location) {
    const something =
      allowedSites.filter((site) => window.location.href.includes(site))
        .length > 0;
    console.log(`its an allowed site? ${something}`);
    if (
      allowedSites.filter((site) => window.location.href.includes(site))
        .length > 0
    ) {
      console.log(`its an allowed site!`);
      // do something with response here, not outside the function
      if (!ethereumConnected) {
        await window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) =>
            chrome.runtime.sendMessage(EXTENSION_ID, {
              message: "account",
              user: accounts[0],
            })
          );
      }
      window.addEventListener("message", (event) => {
        if (event?.data?.data?.data?.method === "eth_sendTransaction") {
          const contractCallTo = event.data.data.data.params[0].to;
          window.localStorage.setItem("lastContractCallTo", contractCallTo);
        }
      });
      const contractCallTo = window.localStorage.getItem("lastContractCallTo");
      if (contractCallTo) {
        chrome.runtime.sendMessage(EXTENSION_ID, {
          message: "listen",
          content: contractCallTo,
        });
      }
    }
  } else {
    console.log("Ethereum not found");
  }
};

setInterval(checkEthereum, 2000);
