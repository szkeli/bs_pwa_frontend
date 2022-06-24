import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, Snackbar,AlertColor,  Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react"
import { useCreateUniversityMutation } from "./generated/graphql"

interface SnackbarState {
    type: AlertColor | undefined
    msg: string
}

export default function CreateUniversity() {
    const [createUniversity, { data, loading, error }] = useCreateUniversityMutation()
    const [name, setName] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [open, setOpen] = useState(false);
    const [snackbarState, setSnackbarState] = useState<SnackbarState>({
        type: 'error',
        msg: ''
    })

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleChangeLogoUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogoUrl(event.target.value);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if(error && !loading) {
            setOpen(true);
            setSnackbarState({
                type: 'error',
                msg: error.message
            })
        }
    }, [error, loading])

    useEffect(() => {
        if(data && !loading) {
            setOpen(true)
            setSnackbarState({
                type: 'success',
                msg: '创建成功'
            })
        }
    }, [data, loading])

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                sx={{ bottom: { xs: 60, sm: 0 } }}>
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
                    id="name"
                    label="学校名字"
                    variant="filled"
                    value={name}
                    onChange={handleChangeName} />
                <TextField
                    id="name"
                    label="学校logo"
                    variant="filled"
                    value={logoUrl}
                    onChange={handleChangeLogoUrl} />
                <LoadingButton
                    size="small"
                    onClick={() => {
                        createUniversity({
                            variables: {
                                name, logoUrl
                            }
                        })
                    }}
                    loading={loading}
                    disabled={loading}
                    variant="contained"
                >创建新学校</LoadingButton>
            </Stack>
        </>
    )
}