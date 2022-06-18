import {
    NetworkCell as NetworkIcon,
    AdminPanelSettings as AdminPanelSettingsIcon,
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    Report as ReportIcon,
    AutoFixHighRounded as AuthenIcon,
    ArrowRight as MoreIcon,
} from "@mui/icons-material"
import { Avatar, Button, Chip, Collapse, Dialog, DialogTitle, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { client } from "."
import { useWhoAmIQuery } from "./generated/graphql"
import { useLoginStatus } from "./hooks"

const networks = [
    {
        url: 'https://api.szlikeyou.com/graphql',
        tip: '主网',
    },
    {
        url: 'https://dev.szlikeyou.com/graphql',
        tip: '测试网'
    }
]

function WhoAmIItem() {
    const { loginState, removeLoginState } = useLoginStatus();
    const { loading, error, data } = useWhoAmIQuery();

    console.error({error ,loginState, loading})
    const user = data?.whoAmI
    const chipLabel = data?.whoAmI.__typename === 'User' ? 'User' : 'Admin'

    useEffect(() => {
        if(!loading && error && loginState) {
            removeLoginState()
        }
    }, [loginState, error, loading, removeLoginState])

    if (error) return <></>
    if (loading) return <></>

    return (
        <>
            <ListItem>
                当前登录
            </ListItem>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar src={user?.avatarImageUrl ?? ''} />
                </ListItemAvatar>
                <ListItemText primary={user?.name ?? 'N/A'} />
                <Chip
                    label={chipLabel}
                    color={chipLabel === 'User' ? 'primary' : 'warning'}
                    size="small" />
            </ListItemButton>
        </>

    )
}

export default function Me() {
    const navigate = useNavigate();
    const { loginState, removeLoginState } = useLoginStatus();
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(() => {
        const v = localStorage.getItem('network');
        return v ?? networks[0].url
    });

    const [openAdminPanel, setOpenAdminPanel] = useState(false);

    const handleClickAdminPanel = () => {
        setOpenAdminPanel(!openAdminPanel);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    }

    useEffect(() => {
        window.localStorage.setItem("network", selectedValue)
    }, [selectedValue])

    const handleLogout = () => {
        removeLoginState();
    }

    return (
        <>
            <List>
                <ListItemButton onClick={handleClickOpen}>
                    <ListItemAvatar>
                        <Avatar>
                            <NetworkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="设置网络接入点" secondary={selectedValue} />
                </ListItemButton>
                <WhoAmIItem />
                <Divider variant="inset" />
                <ListItem
                    button
                    onClick={() => navigate('/universities', { replace: true })}
                    secondaryAction={
                        <IconButton>
                            <MoreIcon />
                        </IconButton>
                    }>
                    <ListItemText primary="所有大学" />
                </ListItem>
                <Divider variant="inset" />
                <ListItemButton onClick={handleClickAdminPanel}>
                    <ListItemIcon>
                        <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="管理员操作" />
                    {openAdminPanel ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={openAdminPanel} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItemButton onClick={() => {
                            navigate('/userautheninfos')
                        }}>
                            <ListItemIcon>
                                <AuthenIcon />
                            </ListItemIcon>
                            <ListItemText primary="所有待审核的认证" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ReportIcon />
                            </ListItemIcon>
                            <ListItemText primary="所有举报信息" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <SelectNetworkDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
            {!loginState ?
                <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate('/login')
                        }}
                    >登录</Button>
                </Stack>
                : <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                            handleLogout()
                            client.resetStore()
                        }}
                    >退出登录</Button>
                </Stack>}
        </>
    )
}

interface SelectNetworkDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SelectNetworkDialog(props: SelectNetworkDialogProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
        window.location.reload()
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>选择网络接入点</DialogTitle>
            <List>
                {
                    networks.map(({ url, tip }) => (
                        <ListItemButton
                            key={url}
                            onClick={() => handleListItemClick(url)}>
                            <ListItemText primary={url} secondary={tip} />
                        </ListItemButton>
                    ))
                }
            </List>
        </Dialog>
    )
}