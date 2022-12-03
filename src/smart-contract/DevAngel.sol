// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

/** 
 * @title DevAngel
 * @dev Implements web3 video mentoring platform
 */
contract DevAngel {

    struct User {
        string name; 
        string pictureCID;  
        uint reputation;
        uint rating;
    }

    struct Question {
        string title;
        string description;
        uint bounty;
        address creator;
        uint acceptedIndex;
    }

    // Event declarations
    event QuestionUpdated(uint indexed questionId, string title, string description, uint bounty, address creator, uint acceptedIndex);
    event UserUpdated(address indexed userAddress, string name, string pictureCID, uint reputation, uint rating);

    mapping(address => User) public users;
    mapping(address => string[]) public userTags;

    mapping(uint => Question) public questions;
    mapping(uint => string[]) public questionTags;
    mapping(uint => address[]) public proposers;

    uint questionCount;

    /** 
     * @dev Creates the contract with 0 questions
     */
    constructor() {
        questionCount = 0;
    }

    /** 
     * @dev creates user profile
     */
    function createUser(address userAddress, string memory name, string memory pictureCID, string[] memory tags, uint reputation, uint rating) public {
        users[userAddress].name = name;
        users[userAddress].pictureCID = pictureCID;
        users[userAddress].reputation = reputation;
        users[userAddress].rating = rating;

        userTags[userAddress] = tags;

        emit UserUpdated(userAddress, name, pictureCID, reputation, rating);
    }

    /** 
     * @dev creates the question
     */
    function askQuestion(address creator, string memory title, string memory description, string[] memory tags, uint bounty) public {
        questionCount = questionCount + 1;
        questions[questionCount].title = title;
        questions[questionCount].description = description;
        questions[questionCount].bounty = bounty;
        questions[questionCount].creator = creator;
        questions[questionCount].acceptedIndex = 0;

        questionTags[questionCount] = tags;

        emit QuestionUpdated(questionCount, title, description, bounty, creator, 0);
    }

    /** 
     * @dev captures a new proposer for a question
     */
    function updateProposers(uint questionId, address proposer) public {
        proposers[questionId].push(proposer);
    }

    /** 
     * @dev accepts a proposer
     */
    function acceptProposer(uint questionId, address proposer) public {
        for (uint p = 0; p < proposers[questionId].length; p++) {
            if (proposers[questionId][p] == proposer) {
                questions[questionId].acceptedIndex = p;
                break;
            }
        }

        emit QuestionUpdated(questionId, questions[questionId].title, questions[questionId].description, questions[questionId].bounty, questions[questionId].creator, questions[questionId].acceptedIndex);
    }
}