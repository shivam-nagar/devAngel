import React from 'react';
import { createStyles, makeStyles, Theme } from '@mui/styles';
import { Paper } from '@mui/material';
import { TextInput } from './TextInput.js';
import { MessageLeft, MessageRight } from './Message';

const useStyles = makeStyles((theme) =>
    createStyles({
        paper: {
            width: '380px',
            height: '100%',
            minHeight: '500px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '5px',
            position: 'relative'
        },
        paper2: {
            width: '100%',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'relative'
        },
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        messagesBody: {
            width: 'calc( 100% - 20px )',
            margin: 10,
            overflowY: 'scroll',
            height: 'calc( 100% - 80px )'
        }
    })
);

export default function Chat() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Paper className={classes.paper} zDepth={2}>
                <Paper id="style-1" className={classes.messagesBody}>
                    <MessageLeft message="test message 1" avatarDisp={false} />
                    <MessageRight message="test message 3" avatarDisp={false} />
                    <MessageLeft message="test message 2" avatarDisp={false} />
                    <MessageRight message="test message 4" avatarDisp={false} />
                </Paper>
                <TextInput />
            </Paper>
        </div>
    );
}
