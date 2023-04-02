/* eslint-disable no-undef */
import logo from './bdslogo.png';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

const shortenAddress = (address) => {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
};

function App() {
  const [account, setAccount] = useState();
  const [contract, setContract] = useState();
  
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        { !account || !contract ? <div>Loading...</div> : 
          <Stack className="flex justify-center content-baseline items-center" style={{paddingTop:"30px"}}>
            <Typography variant="h6" style={{fontSize: "0.90rem"}}>User: {shortenAddress(account)}</Typography>
            <div>
              <Typography variant="h6" style={{fontSize: "0.90rem"}}>
                Contract: {shortenAddress(contract)}
                <a href={`https://etherscan.io/address/${contract}`}>
                  <OpenInNew fontSize="inherit" />
                </a>
              </Typography>
            </div>
            <div style={{paddingTop:"40px"}}>
              <Button>
                Audit Transaction
              </Button>

            </div>
          </Stack>
        }
        
      </body>
    </div>
  );
}

export default App;
