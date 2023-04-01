/* eslint-disable no-undef */
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const blocklistedWebsite = "https://amazon.com";

function App() {
  useEffect(() => {
    // For simple requests:
    chrome.runtime.onMessageExternal.addListener(
      function (request, sender, sendResponse) {
        console.log("ESTE ES EN LA APP");
        if (sender.url === blocklistedWebsite)
          return;  // don't allow this web page access
        if (request.openUrlInEditor)
          openUrl(request.openUrlInEditor);
      });
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {window.ethereum ? "ethereum present" : "ethereum ausent"}
        </p>
        <input type="button" value="delete logo" onClick={() => {
          console.log('Hola Fork DAO')
        }} />
      </header>
    </div>
  );
}

export default App;
