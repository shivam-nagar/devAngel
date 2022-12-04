import { ethers } from "ethers";

export default function ConnectWallet({ setChainId, setAddress }) {
  const handleWalletConnect = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
      const { chainId } = await provider.getNetwork();
      setChainId(chainId);
    } else {
      alert("No Wallet Detected");
    }
  };
  return (
        <button onClick={() => handleWalletConnect()}>Connect Wallet</button>
  );
}
