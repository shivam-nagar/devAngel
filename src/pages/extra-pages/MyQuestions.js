// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import QuestionsTable from './QuestionsTable';

// ==============================|| SAMPLE PAGE ||============================== //

const MyQuestions = () => (
    <MainCard title="My Questions">
        <QuestionsTable />
    </MainCard>
);

export default MyQuestions;
