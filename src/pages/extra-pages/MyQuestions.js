// material-ui
import { Typography } from '@mui/material';
import Utils from 'utils/utils';
// project import
import MainCard from 'components/MainCard';
import QuestionsTable from './QuestionsTable';

import { useState } from 'react';
import axios from 'axios';
import { Alert, CardContent } from '../../../node_modules/@mui/material/index';

// ==============================|| SAMPLE PAGE ||============================== //

const MyQuestions = () => {
    const [myQuestions, setMyQuestions] = useState([]);
    const [fetchState, setFetchState] = useState(false);
    const userId = Utils.getMyAddress();

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

    async function getUserQuestions() {
        try {
            const response = await axios.post(Utils.graphAPI, {
                query: `{
                    questionUpdateds(where: { creator:"${userId}"}, first: 50) {
                        id
                        creator
                        questionId
                        title
                        description
                        bounty
                    }
                }`
            });
            setMyQuestions(response.data.data.questionUpdateds);
            setFetchState(true);
        } catch (error) {
            console.error(error);
        }
    }
    if (!fetchState) {
        getUserQuestions();
    }

    return (
        <MainCard>
            <QuestionsTable items={myQuestions} />
        </MainCard>
    );
};

export default MyQuestions;
