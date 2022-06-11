import {
    Avatar, IconButton, ListItem,
    ListItemAvatar, ListItemText,
    SpeedDial,
    Tab, Tabs,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { InstitutesConnection, University, UniversityQuery, useUniversityQuery } from "./generated/graphql";
import { Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
import { Virtuoso } from "react-virtuoso";

export default () => {
    let { id } = useParams();
    if (!id) return <div>Error</div>

    const { loading, error, data } = useUniversityQuery({
        variables: {
            id,
        }
    })

    if (loading) return <div>Loading...</div>

    return (
        <Box>
            <Header universityQuery={data} />
            <MTabs universityQuery={data} />
        </Box>
    )
}

function Header(props: { universityQuery?: UniversityQuery }) {
    const university = props.universityQuery?.university

    return (
        <ListItem secondaryAction={
            <IconButton>
                <EditIcon />
            </IconButton>
        }>
            <ListItemAvatar>
                <Avatar alt='avatar' src={university?.logoUrl ?? ''} />
            </ListItemAvatar>
            <ListItemText primary={university?.name ?? 'N/A'} />
        </ListItem>
    )
}

function MTabs(props: { universityQuery?: UniversityQuery }) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const university = props.universityQuery?.university

    const institutesLabel = `学院${university?.institutes.totalCount}`
    const subcampusesLabel = `校区${university?.subcampuses.totalCount}`

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <Tabs value={value} onChange={handleChange}>
                    <Tab label={institutesLabel} {...a11yProps(0)} />
                    <Tab label={subcampusesLabel} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <InstitutesList universityQuery={props.universityQuery} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SubCampusesList universityQuery={props.universityQuery} />
            </TabPanel>
        </Box>

    )
}

function InstitutesList(props: { universityQuery?: UniversityQuery }) {
    const university = props.universityQuery?.university
    const institutes = university?.institutes

    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', bottom: 'calc(56px + 16px)', right: 16 }}
                icon={<AddIcon />} />
            <Virtuoso
                style={{ height: "calc(100vh - 56px)", flexGrow: 1 }}
                totalCount={institutes?.edges.length ?? 0}
                itemContent={(index) => {
                    return (
                        <ListItem button>
                            <ListItemText primary={institutes?.edges[index].node?.name ?? ''} />
                        </ListItem>
                    )
                }}
                endReached={index => {
                    // fetchMore({
                    //     variables: {
                    //         after: pageInfo?.endCursor,
                    //         first: 10,
                    //     }
                    // })
                }}
            >
            </Virtuoso>
        </>
    )
}

function SubCampusesList(props: { universityQuery?: UniversityQuery }) {
    const university = props.universityQuery?.university
    const subCampuses = university?.subcampuses

    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', bottom: 'calc(56px + 16px)', right: 16 }}
                icon={<AddIcon />} />
            <Virtuoso
                style={{ height: "calc(100vh - 56px)", flexGrow: 1 }}
                totalCount={subCampuses?.edges.length ?? 0}
                itemContent={(index) => {
                    return (
                        <ListItem button>
                            <ListItemText primary={subCampuses?.edges[index].node?.name ?? ''} />
                        </ListItem>
                    )
                }}
                endReached={index => {
                    // fetchMore({
                    //     variables: {
                    //         after: pageInfo?.endCursor,
                    //         first: 10,
                    //     }
                    // })
                }}
            >
            </Virtuoso>
        </>

    )
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}