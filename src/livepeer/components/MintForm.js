/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { mint } from "../utils/mint";

const MintForm = ({ setAppState, chainId, setMessage, setNftInfo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const handleSubmit = (e) => {
      e.preventDefault()
      mint(chainId, title, { nftMetadata: {description, traits: { "author": "Rahat"}}}, setAppState, setMessage, setNftInfo)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <h2>Mint Video NFT Of Your Call</h2>
      <div className="flex-column">
        <label>NFT Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          required
        />
      </div>
      <div className="flex-column">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="description"
          rows="4"
          cols="50"
          required
        />
      </div>
      <button type="submit">Choose Video and Mint</button>
    </form>
  );
};

export default MintForm;
