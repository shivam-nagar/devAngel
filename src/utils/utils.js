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

const Utils = {
    createQuestion,
    createExpert,
    createProposal,
    getMyAddress,
    setMyAddress,
    graphAPI: 'https://api.studio.thegraph.com/query/21552/devangel/0.2'
};

export default Utils;
