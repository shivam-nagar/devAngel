// project import
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { Avatar, FormControl, Container, Stack, Grid } from '../../../node_modules/@mui/material/index';

// ==============================|| SAMPLE PAGE ||============================== //

function createExpert(image, name, description, expertise, points, badges) {
    return { image, name, description, expertise, points, badges };
}

const tags = ['Polygon', 'Huddle01'];
const experts = [
    createExpert(avatar1, 'Jane Doe', 'Some Descrption', ['Huddle01', 'polygon'], 220, ['expert']),
    createExpert(avatar2, 'Jane Doe', 'Some Descrption', ['Huddle01', 'polygon'], 220, ['expert']),
    createExpert(avatar3, 'Jane Doe', 'Some Descrption', ['Huddle01', 'polygon'], 220, ['expert']),
    createExpert(avatar4, 'Jane Doe', 'Some Descrption', ['Huddle01', 'polygon'], 220, ['expert']),
    createExpert(avatar1, 'Jane Doe', 'Some Descrption', ['Huddle01', 'polygon'], 220, ['expert']),
    createExpert(avatar3, 'Jane Doe', 'Some Descrption', ['Huddle01', 'polygon'], 220, ['expert']),
    createExpert(avatar2, 'John Doe', 'Some Descrption', ['polygon'], 20, ['amature', 'curious'])
];

const Experts = () => (
    <Grid container spacing={2}>
        {experts.map((expert, index) => {
            return (
                <Grid item>
                    <Card sx={{ maxWidth: 300, minWidth: 300 }} style={{ flex: 1 }}>
                        <CardHeader
                            avatar={
                                <Avatar src={expert.image} aria-label="profile">
                                    R
                                </Avatar>
                            }
                            title={
                                <Typography gutterBottom variant="h5" component="div" mb="-3px">
                                    {expert.name}
                                </Typography>
                            }
                            subheader={expert.points}
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

export default Experts;
