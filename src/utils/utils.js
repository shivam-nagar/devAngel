
const ethers = require('ethers');

function createQuestion(id, title, description, proposals, status, tags) {
    return { id, title, description, proposals, status, tags };
}

function createExpert(id, image, name, description, expertise, points, badges) {
    return { id, image, name, description, expertise, points, badges };
}

function createProposal(id, qid, eid) {
    return { id, qid, eid };
}

let myAddress = null;
function getMyAddress() {
    return myAddress;
}

function setMyAddress(_address) {
    myAddress = _address;
}

const devAngelABI = require('smart-contract/devABI.json');
const provider = new ethers.providers.Web3Provider(window.ethereum, "any"); 
const signer = provider.getSigner();
const devAngelContract = new ethers.Contract("0xC7970e9C5AA18a7A9Bf21C322BFa8eceBE7B7A26", devAngelABI, signer);

async function askQuestion(creator, title, description, tags, bounty) {
    // ask question call
    let txReceipt = await devAngelContract.askQuestion(creator, title, description, tags, bounty);

    const link = "https://goerli.etherscan.io/tx/"+txReceipt.hash;
    console.log(link);
    setLog(link);
    let result = await txReceipt.wait(1)
    console.log(result);
}

async function createUser() {
    // create user call
    let txReceipt = await devAngelContract.createUser(myAddress, 'User_'+Date.now(), 'QmQVUMcKzZ9pbpMK1Pv7kFFc3H6ppYauXV5YP6P5KngayP', ['web3'], 40, 5);

    const link = "https://goerli.etherscan.io/tx/"+txReceipt.hash;
    console.log(link);
    setLog(link);
    let result = await txReceipt.wait(1)
    console.log(result);
}

async function updateProposer(questionId, address) {
    // add mentor proposer
    let txReceipt = await devAngelContract.updateProposers(questionId, address);

    const link = "https://goerli.etherscan.io/tx/"+txReceipt.hash;
    console.log(link);
    setLog(link);
    let result = await txReceipt.wait(1)
    console.log(result);
}

const Utils = {
    createQuestion,
    createExpert,
    createProposal,
    getMyAddress,
    setMyAddress,
    createUser,
    updateProposer,
    askQuestion,
    graphAPI: 'https://api.studio.thegraph.com/query/21552/devangel/0.2'
};

export default Utils;
