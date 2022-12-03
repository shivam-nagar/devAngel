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

import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import { FormControl } from '../../../node_modules/@mui/material/index';

// ==============================|| SAMPLE PAGE ||============================== //

const AskQuestion = () => {
    const state = {
        tags: [
            { name: 'Polygon', id: 1 },
            { name: 'Huddle01', id: 2 }
        ]
    };

    function onSelect(selectedList, selectedItem) {}

    function onRemove(selectedList, removedItem) {}

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
                                <FormHelperText id="title-helper-text">Title</FormHelperText>
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField label="Description" variant="outlined" multiline rows={4} maxRows={4} />
                                <FormHelperText id="desc-helper-text">Description</FormHelperText>
                            </FormControl>
                            <Grid container>
                                <Grid item>
                                    <FormControl fullWidth sx={{ m: 1 }}>
                                        <TextField label="Bounty" variant="outlined" number />
                                        <FormHelperText id="title-helper-text">Bounty</FormHelperText>
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
                    <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                        Need Help?
                    </Button>
                </Stack>
            </MainCard>
        </>
    );
};

export default AskQuestion;
