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
  const [fromAccount, setFromAccount] = useState();
  const [toAccount, setToAccount] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasResult, setHasResult] = useState(false);

  // Cargar la UI de manera async usando local storage
  const initUI = async () => {
    setIsLoading(true);
    // El estado actual (TODO: Definir arquitectura de estado)
    const { eth_sendTransaction: data } = await chrome.storage.local.get('eth_sendTransaction');

    // Si no hay estado, no hay nada que hacer
    if (data.params && data.params.length > 0) {
      // Cuenta de origen
      if (data.params[0].from) {
        setFromAccount(data.params[0].from);
      }
      // Cuenta de destino
      if (data.params[0].to) {
        setToAccount(data.params[0].to);
      }

    }

    setIsLoading(false);
  };

  useEffect(() => {
    initUI();
  }, [])

  const handleOnClick = (event) => {
    // setIsLoading(true);
    setHasResult(true);
  }

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
        {(!fromAccount || !toAccount) ? <div>Loading...</div> :
          <Stack className="flex justify-center content-baseline items-center" style={{ paddingTop: "30px" }}>
            <Typography variant="h6" style={{ fontSize: "0.90rem" }} color="white">User: {shortenAddress(fromAccount)}</Typography>
            <div>
              <Typography variant="h6" style={{ fontSize: "0.90rem" }} color="white">
                Contract: {shortenAddress(toAccount)}
                <a href={`https://etherscan.io/address/${toAccount}`}>
                  <OpenInNew fontSize="inherit" style={{ color: "white" }} />
                </a>
              </Typography>
            </div>
            {hasResult ?
              (
                <div style={{ paddingTop: "40px", color: "#23e223" }}>
                  <CheckCircle />
                </div>
              ) :
              (<div style={{ paddingTop: "40px" }}>
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
