import { useParams } from 'react-router-dom';
import { useState } from 'react';

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
    const question = Utils.createQuestion(123, 'the title issfor the quesiotin', 'seome descriptions is valid', [123, 125], 0, ['Polygon']);
    const proposals = [Utils.createProposal(234, 123, 123), Utils.createProposal(234, 123, 123), Utils.createProposal(234, 123, 123)];

    const [questionStatus, setQuestionStatus] = useState(question.status);
    const [showHuddle, setShowHuddle] = useState(false);

    function startChat(question, proposal) {
        console.log(question, proposal);
        question.status = 1;
        setQuestionStatus(1);
    }

    function startHuddle() {
        setShowHuddle(true);
    }

    function getProposalCard(proposal) {
        return (
            <Grid item m={3}>
                <Card style={{ minWidth: 300 }} key={proposal.id}>
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={0}>
                                <Avatar alt="Remy Sharp" src={avatar1} />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h3">{proposal.id}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5">{proposal.id}$</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="outlined" onClick={() => startChat(question, proposal)}>
                            Accept
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
                                {question.proposals.length == 0 ? (
                                    <Typography variant="caption" color="secondary" noWrap>
                                        No proposals recieved so far.
                                    </Typography>
                                ) : (
                                    <Grid container>{proposals.map(getProposalCard)}</Grid>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </MainCard>
        );
    }

    function showVideoCall() {
        return (
            <Card sx={{ mt: 2 }}>
                <CardHeader
                    avatar={<Avatar aria-label="recipe" src={avatar1}></Avatar>}
                    action={
                        <Button variant="contained" aria-label="settings" onClick={startHuddle}>
                            Start Huddle
                        </Button>
                    }
                    title="Connected to Jane Doe"
                    subheader="Active 2 minutes ago."
                />
                <CardContent>
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
                </CardContent>
            </Card>
        );
    }

    return (
        <>
            <MainCard sx={{ mt: 0 }}>
                <Stack spacing={3}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '90%' }
                        }}
                    >
                        <Typography variant="h2" mb={2}>
                            {question.title}
                        </Typography>
                        <Grid container>
                            {question.tags.map((tag) => {
                                return <Chip avatar={<Avatar>{tag[0]}</Avatar>} label={tag} />;
                            })}
                        </Grid>
                        <Typography variant="h5" mt={1}>
                            {question.description}
                        </Typography>
                    </Box>
                </Stack>
            </MainCard>
            {questionStatus != 1 ? showProposals() : showVideoCall()}
        </>
    );
};

export default Question;
