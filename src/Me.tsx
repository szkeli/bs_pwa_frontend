import {
    NetworkCell as NetworkIcon,
    NetworkLocked as NetworkItemIcon,
} from "@mui/icons-material"
import { Avatar, Dialog, DialogTitle, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { useState } from "react"

const networks = [
    {
        url: 'api.szlikeyou.com',
        tip: '主网',
    },
    {
        url: 'dev.szlikeyou.com',
        tip: '测试网'
    }
]

export default () => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(networks[0].url);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
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
                    <ListItemText primary="设置网络接入点" secondary="api.szlikeyou.com" />
                </ListItemButton>
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