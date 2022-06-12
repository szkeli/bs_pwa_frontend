import {
    NetworkCell as NetworkIcon,
    NetworkLocked as NetworkItemIcon,
    AdminPanelSettings as AdminPanelSettingsIcon,
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    StarBorder as StarBorderIcon,
    Report as ReportIcon,
    AutoFixHighRounded as AuthenIcon
} from "@mui/icons-material"
import { Avatar, Collapse, Dialog, DialogTitle, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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

export default () => {
    const navigate = useNavigate();
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
                <ListItemButton onClick={ () => navigate('/universities', {replace: true})}>
                    <ListItemText primary="所有大学" />
                </ListItemButton>
                <ListItemButton onClick={handleClickAdminPanel}>
                    <ListItemIcon>
                        <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="管理员操作" />
                    {openAdminPanel ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={openAdminPanel} timeout='auto' unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItemButton onClick={ () => {
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
                    networks.map(({url, tip}) => (
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