import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

// material-ui
import { Typography } from '@mui/material';
import Utils from 'utils/utils';

import HuddleApp from '../../huddle/huddleApp';

// project import
import MainCard from 'components/MainCard';
import {
    Avatar,
    AvatarGroup,
    Grid,
    Stack,
    Button,
    Autocomplete,
    TextField,
    Box,
    InputLabel,
    Input,
    FormHelperText,
    Table,
    TableRow,
    TableBody,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    CardHeader,
    Paper
} from '../../../node_modules/@mui/material/index';
import Chip from '@mui/material/Chip';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { FormControl } from '../../../node_modules/@mui/material/index';
import TableCell from 'themes/overrides/TableCell';
import Chat from './chat/chat';

// ==============================|| SAMPLE PAGE ||============================== //

const tags = ['Polygon', 'Huddle01'];

const Question = () => {
    let { id } = useParams();
    const questionID = id;

    const [question, setQuestion] = useState({});
    const [creator, setCreator] = useState();
    const [proposals, setProposals] = useState([]);
    const [fetchState, setFetchState] = useState(false);

    async function getQuestion() {
        try {
            const response = await axios.post(Utils.graphAPI, {
                query: `{
                    questionUpdateds(where: { questionId: "${questionID}"}, first: 50) {
                        id
                        creator
                        questionId
                        title
                        description
                        bounty
                    }
                }`
            });
            setQuestion(response.data.data.questionUpdateds[0]);
            return response.data.data.questionUpdateds[0];
        } catch (error) {
            console.error(error);
        }
    }
    async function getCreator(creatorId) {
        try {
            const response = await axios.post(Utils.graphAPI, {
                query: `{
                    userUpdateds(where: { userAddress: "${creatorId}"}, first: 50) {
                        id
                        userAddress
                        name
                        pictureCID
                        rating
                        reputation
                    }
                }`
            });
            setCreator(response.data.data.userUpdateds[0]);
            return response.data.data.userUpdateds[0];
        } catch (error) {
            console.error(error);
        }
    }
    async function getProposals(questionId) {
        try {
            // TODO: get proposals
            setProposals(dummy_proposals);
        } catch (error) {
            console.error(error);
        }
    }
    if (!fetchState) {
        getQuestion().then((question) => {
            console.log(question);
            getCreator(question.creator);
            getProposals(question.id);
        });

        if (proposals.length > 0) {
            setQuestionStatus(1);
        }
        setFetchState(true);
    }

    // const question = Utils.createQuestion(123, 'the title issfor the quesiotin', 'seome descriptions is valid', [123, 125], 0, ['Polygon']);
    const dummy_proposals = [
        Utils.createProposal('Krati', 'Reputation: 100 | Rating 8/10', avatar2),
        Utils.createProposal('Carboncubie', 'Reputation: 132 | Rating 9/10', avatar1)
    ];

    const [questionStatus, setQuestionStatus] = useState(0);
    const [showHuddle, setShowHuddle] = useState(false);
    const [livePeer, setLivePeer] = useState(false);

    function startChat(question, proposal) {
        console.log(question, proposal);
        question.status = 1;
        setQuestionStatus(1);
    }

    function startHuddle() {
        setShowHuddle(true);
    }

    function startLivePeer() {
        setShowHuddle(false);
        setLivePeer(true);
    }

    function getProposalCard(proposal, index) {
        return (
            <Grid item m={1} key={proposal.id + index}>
                <Card style={{ minWidth: 300 }} key={proposal.id}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={0}>
                                <Avatar alt={proposal.id} src={null} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h3">{proposal.id}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="caption">{proposal.qid}</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" onClick={() => startChat(question, proposal)}>
                            Chat
                        </Button>
                        <Button size="small"></Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }

    function showProposals() {
        return (
            <MainCard sx={{ mt: 2 }} title="Proposals">
                <Stack spacing={3}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Stack>
                                {proposals.length == 0 ? (
                                    <Typography variant="subtitle1" color="secondary" noWrap>
                                        No proposals recieved so far.
                                    </Typography>
                                ) : (
                                    <Grid container>
                                        {proposals.map(getProposalCard)}
                                        <Grid item m={1} key={'dummy'}>
                                            <Card style={{ minWidth: 300 }} key={'testcard'}>
                                                <CardHeader title="Submit Proposal"></CardHeader>
                                                <CardActions>
                                                    <Button size="small" variant="outlined">
                                                        Propose
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </MainCard>
        );
    }

    function getHuddle() {
        return (
            <Stack direction="row" spacing={0}>
                <Grid container style={{ width: '380px' }}>
                    <Grid item>
                        <Chat></Chat>
                    </Grid>
                </Grid>
                <Grid container style={{ width: 'calc( 100% - 380px )' }}>
                    <Grid item>{showHuddle ? <HuddleApp></HuddleApp> : <></>}</Grid>
                </Grid>
            </Stack>
        );
    }

    function getLivePeer() {

    }

    function showVideoCall() {
        return (
            <Card sx={{ mt: 2 }}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe" src={null} alt="Krati"></Avatar>}
                    action={
                        showHuddle ? (
                            <Button variant="contained" aria-label="settings" onClick={startLivePeer}>
                                Mint Recording as NFT
                            </Button>
                        ) : (
                            <Button variant="contained" aria-label="settings" onClick={startHuddle}>
                                Start Huddle
                            </Button>
                        )
                    }
                    title="Connected to Krati"
                    subheader="Active 2 minutes ago."
                />
                <CardContent>
                    {livePeer? getLivePeer(): getHuddle()}
                </CardContent>
            </Card>
        );
    }

    return (
        <>
            <MainCard sx={{ mt: 0 }}>
                <Stack spacing={3}>
                    <Typography variant="h3" mb={0}>
                        {question.title}
                    </Typography>
                    {question.tags ? (
                        <Grid container>
                            {question.tags.map((tag) => {
                                return <Chip avatar={<Avatar>{tag[0]}</Avatar>} label={tag} />;
                            })}
                        </Grid>
                    ) : (
                        <></>
                    )}
                    <Typography variant="subtitle1" mt={0}>
                        {question.description}
                    </Typography>
                    <Typography variant="body1" mt={0}>
                        Bounty: {question.bounty} USDT
                    </Typography>
                    {creator ? (
                        <Stack>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Avatar src={creator.pictureCID} alt={creator.name} style={{ width: '32px', height: '32px' }}></Avatar>
                                </Grid>
                                <Grid item mt={1}>
                                    <Typography variant="h5" mt={0}>
                                        {creator.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item mt={1}>
                                <Typography variant="body1">
                                    {' '}
                                    Rating: {creator.rating}/10 &nbsp; | &nbsp; Reputation: {creator.reputation} points
                                </Typography>
                            </Grid>
                        </Stack>
                    ) : (
                        <></>
                    )}
                </Stack>
            </MainCard>
            {questionStatus == 1 ? showVideoCall() : showProposals()}
        </>
    );
};

export default Question;
