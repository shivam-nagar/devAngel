/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
import { Typography } from '@mui/material';
import { mint } from "../utils/mint";
import { FormControl, FormHelperText, TextField } from "../../../node_modules/@mui/material/index";

const MintForm = ({ setAppState, chainId, setMessage, setNftInfo }) => {
  
  const handleSubmit = (e) => {
      e.preventDefault()
      mint(chainId, title, { nftMetadata: {desc, traits: { "author": "Rahat"}}}, setAppState, setMessage, setNftInfo)
  }

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Typography variant="h3" sx={{ mb: 3 }}>Mint Call Recording as NFT with LivePeer</Typography> 

      <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
          <TextField label="Title" variant="outlined" focused onChange={(e) => setTitle(e.target.value)} />
          <FormHelperText id="title-helper-text" value={title}>Title</FormHelperText>
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
          <TextField label="Description" variant="outlined" multiline rows={4} maxRows={4} onChange={(e) => setDesc(e.target.value)}/>
          <FormHelperText id="desc-helper-text" value={desc}>Description</FormHelperText>
      </FormControl>
      <button type="submit" onClick={handleSubmit}>Choose Video and Mint</button>
    </form>
  );
};

export default MintForm;
