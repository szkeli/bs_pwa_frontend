import {
    NetworkCell as NetworkIcon,
    NetworkLocked as NetworkItemIcon,
} from "@mui/icons-material"
import { Avatar, Dialog, DialogTitle, List, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material"
import { useEffect, useState } from "react"

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
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(() => {
        const v = localStorage.getItem('network');
        
        return v ?? networks[0].url
    });
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