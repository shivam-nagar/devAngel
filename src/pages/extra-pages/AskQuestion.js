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
    FormHelperText
} from '../../../node_modules/@mui/material/index';
import Multiselect from 'multiselect-react-dropdown';
import Utils from 'utils/utils';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { FormControl } from '../../../node_modules/@mui/material/index';
import { CardContent } from '../../../node_modules/@mui/material/index';
import { Alert } from '../../../node_modules/@mui/material/index';
import { useState } from 'react';

// ==============================|| SAMPLE PAGE ||============================== //


const AskQuestion = () => {
    const state = {
        tags: [
            { name: 'Polygon', id: 1 },
            { name: 'Huddle01', id: 2 }
        ]
    };
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [bounty, setBounty] = useState(0);
    const [tags, setTags] = useState([]);

    function submitQuestion(){
        Utils.AskQuestion(address, title, description, tags, bounty);
    }

    function onSelect(selectedList, selectedItem) {
        tags.add(selectedItem);
    }

    function onRemove(selectedList, removedItem) {
        tags.remove(removedItem);
    }

    if(!Utils.getMyAddress()) {
        return (
            <MainCard sx={{ mt: 0 }}>
                <CardContent>
                    <Alert severity="error">
                        <Typography variant="h5">Connect your wallet to access questions </Typography>
                    </Alert>
                </CardContent>
            </MainCard>
        )
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
                        <div>
                            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                <TextField label="Title" variant="outlined" focused />
                                <FormHelperText id="title-helper-text" value={title} onChange={(e) => setTitle(e.target.value)}>Title</FormHelperText>
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField label="Description" variant="outlined" multiline rows={4} maxRows={4} />
                                <FormHelperText id="desc-helper-text" value={desc} onChange={(e) => setDesc(e.target.value)}>Description</FormHelperText>
                            </FormControl>
                            <Grid container>
                                <Grid item>
                                    <FormControl fullWidth sx={{ m: 1 }}>
                                        <TextField label="Bounty" variant="outlined" number />
                                        <FormHelperText id="title-helper-text" value={bounty} onChange={(e) => setBounty(e.target.value)}>Bounty</FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <FormControl sx={{ m: 2 }}>
                                        <Multiselect
                                            options={state.tags} // Options to display in the dropdown
                                            selectedValues={state.selectedValue} // Preselected value to persist in dropdown
                                            onSelect={onSelect} // Function will trigger on select event
                                            onRemove={onRemove} // Function will trigger on remove event
                                            displayValue="name" // Property name to display in the dropdown options
                                        />
                                        <FormHelperText id="desc-helper-text">Tags</FormHelperText>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <FormControl sx={{ m: 2 }}>
                                <Button variant="contained">Ask</Button>
                            </FormControl>
                        </div>
                    </Box>
                </Stack>
            </MainCard>
            <MainCard sx={{ mt: 2 }}>
                <Stack spacing={3}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item>
                            <Stack>
                                <Typography variant="h5" noWrap>
                                    Help & Support Chat
                                </Typography>
                                <Typography variant="caption" color="secondary" noWrap>
                                    Typical replay within 5 min
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item>
                            <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                                <Avatar alt="Remy Sharp" src={avatar1} />
                                <Avatar alt="Travis Howard" src={avatar2} />
                                <Avatar alt="Cindy Baker" src={avatar3} />
                                <Avatar alt="Agnes Walker" src={avatar4} />
                            </AvatarGroup>
                        </Grid>
                    </Grid>
                    <Button size="small" onClick= {submitQuestion} variant="contained" sx={{ textTransform: 'capitalize' }}>
                        Need Help?
                    </Button>
                </Stack>
            </MainCard>
        </>
    );
};

export default AskQuestion;
