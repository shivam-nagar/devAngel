// material-ui
import { Typography } from '@mui/material';
import Utils from 'utils/utils';
// project import
import MainCard from 'components/MainCard';
import QuestionsTable from './QuestionsTable';

import { useState } from 'react';
import axios from 'axios';

// ==============================|| SAMPLE PAGE ||============================== //

const LatestQuestions = () => {
    const [latestQuestions, setLatestQuestions] = useState([]);
    const [fetchState, setFetchState] = useState(false);

    async function getUserQuestions() {
        try {
            const response = await axios.post(Utils.graphAPI, {
                query: `{
                    questionUpdateds(first: 50) {
                        id
                        creator
                        questionId
                        title
                        description
                        bounty
                    }
                }`
            });
            setLatestQuestions(response.data.data.questionUpdateds);
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
            <QuestionsTable items={latestQuestions} />
        </MainCard>
    );
};

export default LatestQuestions;
