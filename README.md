# devAngel

Many developer issues are lost in discord and Stack Overflow doesnt enable live debugging. Dev Angel enables live debugging with mentors (or angels, as we call them). Choose how much you pay the mentor by posting a bounty amount. Chat with the mentor using Push; debug live over Huddle01 and mint a video NFT using LivePeer over IPFS to let your debug session be available to others for watching and learning.

Demo Video :
https://www.youtube.com/watch?v=2ta19ok41uQ

Smart Contract on Goerli:
https://goerli.etherscan.io/address/0xc7970e9c5aa18a7a9bf21c322bfa8ecebe7b7a26


Integrations:
1. Graph:
Subgraph created on goerli:
Deployed to https://thegraph.com/studio/subgraph/devangel

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/21552/devangel/0.2

DevAngel Graph Playground: 
https://thegraph.com/studio/subgraph/devangel/playground


2. Huddle01:
Integrated iFrame 
<img width="1214" alt="Screenshot 2022-12-04 at 9 24 53 AM" src="https://user-images.githubusercontent.com/7895856/205473508-ed32028d-673a-4097-bdf8-8d12d034a79f.png">

3. Push Chat 
For providing support we are integrated Push Chat uiweb and restapi npm packages
<img width="1359" alt="Screenshot 2022-12-04 at 9 26 09 AM" src="https://user-images.githubusercontent.com/7895856/205473567-cf30f6ae-fd58-408f-9d84-892e418d5cbf.png">

4. LivePeer Video Mint:
Code adapted from Rahat's Livepeer workshop. We download the recording of the Huddle01 call and mint a video NFT from it.
<img width="1311" alt="Screenshot 2022-12-04 at 9 28 41 AM" src="https://user-images.githubusercontent.com/7895856/205473637-ed896cb7-f6d0-40c8-8106-2f2d95f7631f.png">

5. UX
We used UI template from https://mui.com/store/items/mantis-react-admin-dashboard-template/

