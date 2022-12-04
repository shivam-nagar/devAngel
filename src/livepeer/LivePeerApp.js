import { useState } from 'react';
import './LivePeerApp.css';
import ConnectWallet from './components/ConnectWallet';
import Nft from './components/Nft';
import Utils from 'utils/utils';

function LivePeerApp() {
  const [chainId, setChainId] = useState();
  const [address, setAddress] = useState();
  const [appState, setAppState] = useState("Ready to mint");
  console.log({ chainId })
  return (
    <div className="">
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
