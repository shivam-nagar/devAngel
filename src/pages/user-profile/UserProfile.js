// material-ui
import { Typography } from '@mui/material';

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

function createData(title, description, proposals, status) {
    return { title, description, proposals, status };
}

let rows = [
    createData('Camera Lens', 'Question description', 40, 2),
    createData('Laptop', 'Question description', 300, 0),
    createData('Mobile', 'Question description', 355, 1)
];

// ==============================|| SAMPLE PAGE ||============================== //

const tags = ['Polygon', 'Huddle01'];
const user = {
    image: avatar1,
    name: 'username surname',
    location: 'Bangalore, IN'
};

const UserProfile = () => (
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
            <QuestionsTable></QuestionsTable>
        </MainCard>
        <MainCard sx={{ mt: 3 }} title="My Answers">
            <QuestionsTable userData={rows}></QuestionsTable>
        </MainCard>
    </>
);

export default UserProfile;
