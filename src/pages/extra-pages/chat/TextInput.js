import React from 'react';
import TextField from '@mui/material/TextField';
import { createStyles, makeStyles, Theme } from '@mui/styles';
import Button from '@mui/material/Button';
import { SendOutlined, VideoCameraOutlined } from '@ant-design/icons';

const useStyles = makeStyles((theme) =>
    createStyles({
        wrapForm: {
            display: 'flex',
            justifyContent: 'center',
            width: '95%',
            margin: `${theme.spacing(0)} auto`
        },
        wrapText: {
            width: '100%'
        },
        button: {
            //margin: theme.spacing(1),
        }
    })
);

export const TextInput = () => {
    const classes = useStyles();
    return (
        <>
            <form className={classes.wrapForm} noValidate autoComplete="off">
                <TextField
                    id="standard-text"
                    label="Start writing"
                    className={classes.wrapText}
                    //margin="normal"
                    style={{ marginRight: '5px' }}
                />
                <Button variant="contained" color="primary" className={classes.button} style={{ marginRight: '3px' }}>
                    <SendOutlined />
                </Button>
            </form>
        </>
    );
};
