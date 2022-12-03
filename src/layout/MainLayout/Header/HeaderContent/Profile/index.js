import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { ethers } from 'ethers';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Avatar,
    Box,
    ButtonBase,
    CardContent,
    ClickAwayListener,
    Grid,
    IconButton,
    Paper,
    Popper,
    Stack,
    Tab,
    Tabs,
    Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Transitions from 'components/@extended/Transitions';
import ProfileTab from './ProfileTab';
import SettingTab from './SettingTab';

// assets
import avatar1 from 'assets/images/users/avatar-1.png';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import Utils from 'utils/utils';
import { useNavigate } from 'react-router-dom';


const devAngelABI = require('smart-contract/ABI.json');

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
            {value === index && children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `profile-tab-${index}`,
        'aria-controls': `profile-tabpanel-${index}`
    };
}

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
    const navigate = useNavigate();
    
    const theme = useTheme();
    const handleLogout = async () => {
        if (window.ethereum) {
            if (address === null) {
                window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => accountChangeHandler(res[0]));
            } else {
                setAddress(null);
                Utils.setMyAddress(null);
                window.location.reload(); 
            }
        } else {
            alert('install metamask extension!!');
        }
    };

    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState(Utils.getMyAddress());
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const accountChangeHandler = async (account) => {
        setAddress(account);
        Utils.setMyAddress(account);

        navigate(window.location.pathname);

        // Connect to the network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const signer = provider.getSigner(accounts[0]);
        let DEV_ANGEL_CONTRACT_ADDRESS = '0xC7970e9C5AA18a7A9Bf21C322BFa8eceBE7B7A26';
        let devAngelContract = new ethers.Contract(DEV_ANGEL_CONTRACT_ADDRESS, devAngelABI, signer);

        console.log('Asking..');
        let txReceipt = await devAngelContract.askQuestion(address, 'Test Question 1', 'Test Description 1', ['web3'], 10);
        const link = 'https://goerli.etherscan.io/tx/' + txReceipt.hash;
        console.log(link);
        alert(link);
        let result = await txReceipt.wait(1);
        console.log(result);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const iconBackColorOpen = 'grey.300';
    return (
        <Box sx={{ flexShrink: 0, ml: 0.75 }}>
            <ButtonBase
                sx={{
                    p: 0.25,
                    bgcolor: open ? iconBackColorOpen : 'transparent',
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'secondary.lighter' }
                }}
                aria-label="open profile"
                ref={anchorRef}
                aria-controls={open ? 'profile-grow' : undefined}
                aria-haspopup="true"
                onClick={handleLogout}
            >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
                    {address === null ? (
                        <Typography variant="subtitle1">Connect Wallet</Typography>
                    ) : (
                        <Typography variant="subtitle1">Disconnect Wallet</Typography>
                    )}
                </Stack>
            </ButtonBase>
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                popperOptions={{
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, 9]
                            }
                        }
                    ]
                }}
            >
                {({ TransitionProps }) => (
                    <Transitions type="fade" in={open} {...TransitionProps}>
                        {open && (
                            <Paper
                                sx={{
                                    boxShadow: theme.customShadows.z1,
                                    width: 290,
                                    minWidth: 240,
                                    maxWidth: 290,
                                    [theme.breakpoints.down('md')]: {
                                        maxWidth: 250
                                    }
                                }}
                            >
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MainCard elevation={0} border={false} content={false}>
                                        <CardContent sx={{ px: 2.5, pt: 3 }}>
                                            <Grid container justifyContent="space-between" alignItems="center">
                                                <Grid item>
                                                    <Stack direction="row" spacing={1.25} alignItems="center">
                                                        <Typography variant="body2" color="textSecondary">
                                                            {address}
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        {open && (
                                            <>
                                                <TabPanel value={value} index={0} dir={theme.direction}>
                                                    <ProfileTab handleLogout={handleLogout} />
                                                </TabPanel>
                                                <TabPanel value={value} index={1} dir={theme.direction}>
                                                    <SettingTab />
                                                </TabPanel>
                                            </>
                                        )}
                                    </MainCard>
                                </ClickAwayListener>
                            </Paper>
                        )}
                    </Transitions>
                )}
            </Popper>
        </Box>
    );
};

export default Profile;
