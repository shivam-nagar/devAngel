# devAngel

Many developer issues are lost in discord and Stack Overflow doesnt enable live debugging. Dev Angel enables live debugging with mentors (or angels, as we call them). Choose how much you pay the mentor by posting a bounty amount. Chat with the mentor using Push; debug live over Huddle01 and mint a video NFT using LivePeer over IPFS to let your debug session be available to others for watching and learning.

### Get Started :
```
npm install
npm start
```
And the application would run locally at http://localhost:3000/free

### Demo Video :
https://www.youtube.com/watch?v=2ta19ok41uQ

### Verified Smart Contract on Goerli:
https://goerli.etherscan.io/address/0xc7970e9c5aa18a7a9bf21c322bfa8ecebe7b7a26


### Protocol Integrations:
1. Graph:

  - Subgraph deployed on goerli:
    https://thegraph.com/studio/subgraph/devangel
  - DevAngel Graph Playground: 
    https://thegraph.com/studio/subgraph/devangel/playground
  - Subgraph Queries (HTTP) endpoint:
    https://api.studio.thegraph.com/query/21552/devangel/0.2
<img width="1289" alt="Screenshot 2022-12-04 at 6 56 05 PM" src="https://user-images.githubusercontent.com/7895856/205493094-65d3d4d5-abbe-4d78-88fa-f12f7a8b9045.png">


2. Huddle01:
    Integrated Video Calling using Huddle01 iFrame 
<img width="1214" alt="Screenshot 2022-12-04 at 9 24 53 AM" src="https://user-images.githubusercontent.com/7895856/205473508-ed32028d-673a-4097-bdf8-8d12d034a79f.png">

3. Push Chat 
For providing support, we integrated Push Chat uiweb and restapi npm packages
<img width="1359" alt="Screenshot 2022-12-04 at 9 26 09 AM" src="https://user-images.githubusercontent.com/7895856/205473567-cf30f6ae-fd58-408f-9d84-892e418d5cbf.png">

4. LivePeer Video Mint:
We download the recording of the Huddle01 call and mint a video NFT from it using Livepeer NFT-Studio api. Code adapted from [Rahat's Workshop](https://www.youtube.com/watch?v=RdypNBNRZQE).

<img width="1239" alt="Screenshot 2022-12-04 at 9 30 49 AM" src="https://user-images.githubusercontent.com/7895856/205473680-4af6edea-efcf-4e00-b9bd-0f8e30f4e483.png">
<img width="1424" alt="Screenshot 2022-12-04 at 9 28 13 AM" src="https://user-images.githubusercontent.com/7895856/205473701-bdc76faa-9fc1-492a-909f-76d71a699014.png">

### UX
We created UX by editing UI template from https://mui.com/store/items/mantis-react-admin-dashboard-template/

