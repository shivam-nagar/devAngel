// project import
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Utils from 'utils/utils';
import axios from 'axios';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { Avatar, FormControl, Container, Stack, Grid } from '../../../node_modules/@mui/material/index';

// ==============================|| SAMPLE PAGE ||============================== //

const tags = ['Polygon', 'Huddle01'];

const Experts = () => {
    const [expertsList, setExpertsList] = useState([]);
    const [fetchState, setFetchState] = useState(false);
    async function getExperts() {
        try {
            const response = await axios.post(Utils.graphAPI, {
                query: `{
                    userUpdateds(first: 5) {
                        id
                        userAddress
                        name
                        pictureCID
                        rating
                        reputation
                    }
                }`
            });
            setExpertsList(response.data.data.userUpdateds);
            setFetchState(true);
        } catch (error) {
            console.error(error);
        }
    }
    if (!fetchState) getExperts();

    const navigate = useNavigate();
    return (
        <Grid container spacing={2}>
            {expertsList.map((expert, index) => {
                return (
                    <Grid item key={expert.id}>
                        <Card sx={{ maxWidth: 300, minWidth: 300 }} style={{ flex: 1 }}>
                            <CardHeader
                                style={{ cursor: 'pointer' }}
                                avatar={
                                    <Avatar src={expert.pictureCID} aria-label="profile">
                                        {expert.name[0]}
                                    </Avatar>
                                }
                                title={
                                    <Typography gutterBottom variant="h5" component="div" mb="-3px">
                                        {expert.name}
                                    </Typography>
                                }
                                subheader={'Reputation: ' + expert.reputation}
                                onClick={() => navigate(`/profile/${expert.id}`)}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {expert.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Schedule</Button>
                                <Button size="small"></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default Experts;
