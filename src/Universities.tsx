import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, Divider, IconButton, ListItem, ListItemAvatar, ListItemText, Paper, SpeedDial } from "@mui/material"
import { useNavigate } from "react-router-dom";
import { Virtuoso } from "react-virtuoso"
import { UniversitiesQuery, useDeleteUniversityMutation, useUniversitiesQuery } from "./generated/graphql"
import {
    Add as AddIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';
import { useEffect, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

function MDeleteIcon(props: { universityId: string | undefined }) {
    const [deleteUniversity, { data, error, loading }] = useDeleteUniversityMutation();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (data && !loading) {
            handleClose()
        }
    }, [data, error, loading])

    return (
        <>
            <Dialog
                onClick={e => e.stopPropagation()}
                open={open}
                onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        确认删除该大学吗？
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>再想想</Button>
                    <LoadingButton
                        size="small"
                        onClick={() => {
                            deleteUniversity({ variables: { id: props.universityId ?? ''} })
                        }}
                        loading={loading}
                        disabled={loading}
                        variant="contained">
                        删除
                    </LoadingButton>
                </DialogActions>
            </Dialog>
            <IconButton
                onClick={(e) => {
                    e.stopPropagation()
                    handleOpen()
                }}>
                <DeleteIcon />
            </IconButton>
        </>
    )
}

export default function Universities() {
    const navigate = useNavigate();
    const { loading, data, fetchMore } = useUniversitiesQuery({
        variables: {
            first: 20,
        }
    })

    if (loading) return <div> Loading... </div>

    const pageInfo = data?.universities.pageInfo

    const itemContent = (index: number, universitiesQuery: UniversitiesQuery | undefined) => {
        const university = universitiesQuery?.universities.edges[index].node
        const subcampusesCount = university?.subcampuses.totalCount ?? 0
        const institutesCount = university?.institutes.totalCount ?? 0

        return (
            <>
                <ListItem
                    button
                    secondaryAction={
                        <MDeleteIcon universityId={university?.id} />
                    }
                    onClick={() => {
                        navigate(`/university/${university?.id}`)
                    }}>
                    <ListItemAvatar>
                        <Avatar alt='avatar' src={university?.logoUrl ?? ''} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={university?.name}
                        secondary={`${institutesCount}个学院,${subcampusesCount}个校区`} />
                </ListItem>
                <Divider variant="inset" />
            </>
        )
    }

    return (
        <Paper sx={{ flexGrow: 1, height: '100%' }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', bottom: 'calc(56px + 16px)', right: 16 }}
                icon={<AddIcon />}
                onClick={() => navigate('/create-university')} />
            <Virtuoso
                style={{ height: 'calc(100vh - 56px)', flexGrow: 1 }}
                totalCount={data?.universities.edges.length ?? 0}
                itemContent={(index) => itemContent(index, data)}
                endReached={() => {
                    fetchMore({
                        variables: {
                            after: pageInfo?.endCursor,
                            first: 20
                        }
                    })
                }} />
        </Paper>
    )
}