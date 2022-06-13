import { Alert, AlertColor, Button, Snackbar, Stack, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useLoginByUserIdMutation } from "./generated/graphql";
import LoadingButton from '@mui/lab/LoadingButton';
import { useLoginStatus } from "./hooks";
import { useNavigate } from "react-router-dom";
import { client } from ".";

interface SnackbarState {
    type: AlertColor | undefined
    msg: string
}

export default () => {
    const navigate = useNavigate();
    const { loginState, setLoginState } = useLoginStatus();
    const [login, { data, loading, error }] = useLoginByUserIdMutation();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [snackbarState, setSnackbarState] = useState<SnackbarState>({
        type: 'error',
        msg: ''
    })

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        if(snackbarState.type === 'success') {
            navigate(-1);
        }
        setOpen(false);
    };


    useEffect(() => {
        if (error && !loading) {
            setOpen(true)
            setSnackbarState({
                type: 'error',
                msg: error.message
            })
        }
    }, [error, loading])

    useEffect(() => {
        if (data && !loading) {
            setLoginState(data.login.token)
            client.resetStore()
            setOpen(true)
            setSnackbarState({
                type: 'success',
                msg: '登录成功'
            })
        }
    }, [data, loading])

    const handleChangeUserId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(event.target.value);
    };

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    };

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                sx={{ bottom: { xs: 60, sm: 0 } }}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbarState.type}
                    sx={{ width: '100%' }}>
                    {snackbarState.msg}
                </Alert>
            </Snackbar>
            <Stack
                spacing={2}
                direction="column"
                justifyContent='center'
                alignItems='center'
                height='100vh'
            >

                <TextField
                    required
                    id="user-id"
                    label="UserId"
                    variant="filled"
                    value={userId}
                    onChange={handleChangeUserId} />
                <TextField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    variant="filled"
                    value={password}
                    onChange={handleChangePassword} />
                <LoadingButton
                    size="small"
                    onClick={() => {
                        login({
                            variables: {
                                userId,
                                sign: password
                            }
                        })
                    }}
                    loading={loading}
                    disabled={loading}
                    variant="contained"
                >登录</LoadingButton>
            </Stack>
        </>
    )
}