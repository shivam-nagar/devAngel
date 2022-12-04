// material-ui
import { Typography } from '@mui/material';
import Utils from 'utils/utils';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import { VideoCameraOutlined, MessageOutlined } from '@ant-design/icons';
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
    Badge,
    CardActions,
    CardContent,
    Alert
} from '../../../node_modules/@mui/material/index';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { FormControl } from '../../../node_modules/@mui/material/index';

import QuestionsTable from '../extra-pages/QuestionsTable';
import { useNavigate } from 'react-router-dom';

// ==============================|| SAMPLE PAGE ||============================== //

const tags = ['Polygon', 'Huddle01'];
const UserProfile = (userAddress) => {
    let { id } = useParams();
    userAddress = id ? id : Utils.getMyAddress();

    const [userDetails, setUserDetails] = useState({});
    const [userQuestions, setUserQuestions] = useState([]);
    const [fetchState, setFetchState] = useState(false);

    const navigate = useNavigate();

    if (!Utils.getMyAddress()) {
        return (
            <MainCard sx={{ mt: 0 }}>
                <CardContent>
                    <Alert severity="error">
                        <Typography variant="h5">Connect wallet to access your profile</Typography>
                    </Alert>
                </CardContent>
            </MainCard>
        );
    }

    async function getUserDetails() {
        try {
            const response = await axios.post(Utils.graphAPI, {
                query: `{
                    userUpdateds(where: { userAddress: "${userAddress}"}, first: 5) {
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
        } catch (error) {
            console.error(error);
        }
    }

    async function getUserQuestions() {
        try {
            const response = await axios.post(Utils.graphAPI, {
                query: `{
                    questionUpdateds(where: {creator: "${userAddress}"}, first: 5) {
                        id
                        creator
                        questionId
                        title
                        description
                        bounty
                    }
                }`
            });
            setUserQuestions(response.data.data.questionUpdateds);
        } catch (error) {
            console.error(error);
        }
    }
    if (!fetchState) {
        getUserDetails();
        getUserQuestions();
        setFetchState(true);
    }

    return (
        <>
            <MainCard sx={{ mt: 0 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={0}>
                            <Avatar alt={userDetails.name} src={userDetails.pictureCID} sx={{ width: 56, height: 56 }} />
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="h1">{userDetails.name}</Typography>
                        </Grid>
                        <Grid item xs={11}>
                            <Typography variant="h5">
                                Reputation : {userDetails.reputation} &nbsp; | &nbsp; Rating : {userDetails.rating}/10
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                {Utils.getMyAddress() !== userAddress ? (
                    <CardActions>
                        <Button size="small" variant="outlined" onClick={() => navigate(`/connect/${userDetails.userAddress}`)} startIcon={<MessageOutlined />} style={{ cursor: 'pointer' }}>
                            Chat
                        </Button>
                    </CardActions>
                ) : (
                    <></>
                )}
            </MainCard>
            <MainCard sx={{ mt: 3 }} title={userDetails.name + "'s Questions"}>
                <QuestionsTable items={userQuestions}></QuestionsTable>
            </MainCard>
        </>
    );
};

export default UserProfile;
