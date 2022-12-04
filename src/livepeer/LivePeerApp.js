import { useState } from 'react';
import './LivePeerApp.css';
import ConnectWallet from './components/ConnectWallet';
import Nft from './components/Nft';
import Utils from './';

function LivePeerApp() {
  const [chainId, setChainId] = useState("5");
  const [address, setAddress] = useState(Utils.getMyAddress());
  const [appState, setAppState] = useState("Ready to mint");
  console.log({ chainId })
  return (
    <div className="App">
      <header className="App-header">
       {
         !address && (
           <ConnectWallet setChainId={setChainId} setAddress={setAddress} />
         )
       }
       {
         chainId && (
           <Nft 
            appState={appState}
            setAppState={setAppState}
            chainId={chainId}
           />
         )
       }
      </header>
    </div>
  );
}

export default LivePeerApp;
