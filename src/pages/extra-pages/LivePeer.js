// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import LivePeerApp from 'livepeer/LivePeerApp';

// ==============================|| SAMPLE PAGE ||============================== //

const LivePeer = () => (
    <MainCard title="Sample Card">
        <LivePeerApp />
    </MainCard>
);

export default LivePeer;
