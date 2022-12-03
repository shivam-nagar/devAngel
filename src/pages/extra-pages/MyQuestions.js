// material-ui
import { Typography } from '@mui/material';
import Utils from 'utils/utils';
// project import
import MainCard from 'components/MainCard';
import QuestionsTable from './QuestionsTable';

// ==============================|| SAMPLE PAGE ||============================== //

const questions = [
    Utils.createQuestion(1234, 'Camera Lens', 'Question description', 40, 2),
    Utils.createQuestion(1235, 'Laptop', 'Question description', 300, 0),
    Utils.createQuestion(1236, 'Mobile', 'Question description', 355, 1)
];

const MyQuestions = () => (
    <MainCard>
        <QuestionsTable items={questions} />
    </MainCard>
);

export default MyQuestions;
