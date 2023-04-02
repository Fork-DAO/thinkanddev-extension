/* eslint-disable no-undef */
import './App.css';
import image from "./background.png";
import auditImage from "./AUDIT.png";
import feedbackVerde from "./FEEDBACK_Verde.png";
import feedbackRojo from "./FEEDBACK_Rojo.png";
import { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import { CheckCircle, Image, OpenInNew } from '@mui/icons-material';

const shortenAddress = (address) => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
};

function App() {
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2000);
  const [hasResult, setHasResult] = useState(false);
  
  useEffect(() => {
    chrome.runtime.onMessageExternal.addListener(
      function (request, sender, sendResponse) {
          if (request?.message === 'account') {
            setAccount(request.user)
          } else if (request?.message === 'listen') {
            setContract(request.content)
          } 
      });
  }, [])

  const handleOnClick = (event) => {
    // setIsLoading(true);
    setHasResult(true);
  }

  // useEffect(() => {
  //   // exit early when we reach 0
  //   if (!timeLeft && !isLoading) {
  //     return;
  //   }
  //   console.log(`hola`)
    
  //   // save intervalId to clear the interval when the
  //   // component re-renders
  //   const intervalId = setInterval(() => {
  //     console.log(`hola`)
  //     setTimeLeft(timeLeft - 1);
  //   }, 1000);

  //   // clear interval on re-render to avoid memory leaks
  //   return () => {
  //     clearInterval(intervalId);
  //     setIsLoading(false)
  //   }
  //   // add timeLeft as a dependency to re-rerun the effect
  //   // when we update it
  // }, [isLoading, timeLeft]);

  return (
    <div className="App" style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}>
      <header className="App-header">
        <></>
      </header>
      <body>
        { !account || !contract ? <div>Loading...</div> : 
          <Stack className="flex justify-center content-baseline items-center" style={{paddingTop:"30px"}}>
            <Typography variant="h6" style={{fontSize: "0.90rem"}} color="white">User: {shortenAddress(account)}</Typography>
            <div>
              <Typography variant="h6" style={{fontSize: "0.90rem"}} color="white">
                Contract: {shortenAddress(contract)}
                <a href={`https://etherscan.io/address/${contract}`}>
                  <OpenInNew fontSize="inherit" style={{color:"white"}}/>
                </a>
              </Typography>
            </div>
            { hasResult ? 
              (
                <div style={{paddingTop:"40px", color: "#23e223"}}>
                  <CheckCircle />
                </div>
              ) :
              (<div style={{paddingTop:"40px"}}>
                <Button onClick={handleOnClick} variant={isLoading ? "text" : "contained"}
                  style={{
                    backgroundColor: "rgb(229 229 119)",
                    color: "black"
                  }}>
                  {isLoading ? <CircularProgress className="ml-2" /> : "AUDIT"}
                </Button>
              </div>)
            }
          </Stack>
        }
        
      </body>
    </div>
  );
}

export default App;
