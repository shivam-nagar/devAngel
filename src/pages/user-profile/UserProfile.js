// material-ui
import { Typography } from '@mui/material';
import Utils from 'utils/utils';

import { useParams } from 'react-router-dom';

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
    Badge
} from '../../../node_modules/@mui/material/index';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { FormControl } from '../../../node_modules/@mui/material/index';

import QuestionsTable from '../extra-pages/QuestionsTable';

// ==============================|| SAMPLE PAGE ||============================== //

const tags = ['Polygon', 'Huddle01'];
const UserProfile = (userId) => {
    let { id } = useParams();

    console.log(id);
    if (!id) {
        userId = 123; // TODO: Current user id
    }

    const user = {
        image: avatar1,
        name: 'username surname',
        location: 'Bangalore, IN',
        questions: [
            Utils.createQuestion(1234, 'Camera Lens', 'Question description', 40, 2),
            Utils.createQuestion(1234, 'Laptop', 'Question description', 300, 0),
            Utils.createQuestion(1234, 'Mobile', 'Question description', 355, 1)
        ],
        answers: [
            Utils.createQuestion(1234, 'yahoo', 'Question description', 355, 1),
            Utils.createQuestion(1234, 'apple', 'Question description', 355, 1),
            Utils.createQuestion(1234, 'google', 'Question description', 355, 1)
        ]
    };

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
                        <Grid container spacing={2}>
                            <Grid item xs={0}>
                                <Avatar alt="Remy Sharp" src={user.image} sx={{ width: 56, height: 56 }} />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant="h1">{user.name}</Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant="h5">{user.location}</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </MainCard>
            <MainCard sx={{ mt: 3 }} title="My Questions">
                <QuestionsTable items={user.questions}></QuestionsTable>
            </MainCard>
            <MainCard sx={{ mt: 3 }} title="My Answers">
                <QuestionsTable items={user.answers}></QuestionsTable>
            </MainCard>
        </>
    );
};

export default UserProfile;
