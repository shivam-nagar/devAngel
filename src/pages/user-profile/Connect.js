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
    Grid,
    Stack,
    Button,
    Card,
    CardContent,
    CardHeader} from '../../../node_modules/@mui/material/index';

import Chat from '../extra-pages/chat/chat';
import LivePeerApp from 'livepeer/LivePeerApp';

// ==============================|| SAMPLE PAGE ||============================== //

const tags = ['Polygon', 'Huddle01'];

const Connect = () => {
    let { id } = useParams();
    const userId = id;

    const [userDetails, setUserDetails] = useState();
    const [fetchState, setFetchState] = useState(false);
    async function getUserDetails() {
        try {
            const response = await axios.post(Utils.graphAPI, {
                query: `{
                    userUpdateds(where: { userAddress: "${userId}"}, first: 50) {
                        id
                        userAddress
                        name
                        pictureCID
                        rating
                        reputation
                    }
                }`
            });
            setUserDetails(response.data.data.userUpdateds[0]);
            return response.data.data.userUpdateds[0];
        } catch (error) {
            console.error(error);
        }
    }

    if (!fetchState) {
        getUserDetails();
        setFetchState(true);
    }

    // const question = Utils.createQuestion(123, 'the title issfor the quesiotin', 'seome descriptions is valid', [123, 125], 0, ['Polygon']);
    const [showHuddle, setShowHuddle] = useState(false);
    const [livePeer, setLivePeer] = useState(false);

    function startHuddle() {
        setShowHuddle(true);
    }

    function startLivePeer() {
        setShowHuddle(false);
        setLivePeer(true);
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
        return (
            <Grid container style={{ width: '100%' }}>
                <Grid item>
                    <LivePeerApp />
                </Grid>
            </Grid>
        );
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
                    title={"Connected to "+userDetails.name}
                    subheader="Active 2 minutes ago."
                />
                <CardContent>{livePeer ? getLivePeer() : getHuddle()}</CardContent>
            </Card>
        );
    }

    return (
        <>
            <MainCard sx={{ mt: 0 }}>
                <Stack spacing={3}>
                    {userDetails ? (
                        <Stack>
                            <Grid container spacing={1}>
                                <Grid item>
                                    <Avatar src={userDetails.pictureCID} alt={userDetails.name} style={{ width: '32px', height: '32px' }}></Avatar>
                                </Grid>
                                <Grid item mt={1}>
                                    <Typography variant="h5" mt={0}>
                                        {userDetails.name}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item mt={1}>
                                <Typography variant="body1">
                                    {' '}
                                    Rating: {userDetails.rating}/10 &nbsp; | &nbsp; Reputation: {userDetails.reputation} points
                                </Typography>
                            </Grid>
                        </Stack>
                    ) : (
                        <></>
                    )}
                </Stack>
            </MainCard>
            { userDetails ? showVideoCall() : <></> }
        </>
    );
};

export default Connect;
