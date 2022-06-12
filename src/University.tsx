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
import { UniversityQueryHookResult, useUniversityQuery } from "./generated/graphql";
import { Edit as EditIcon, Add as AddIcon } from '@mui/icons-material';
import { Virtuoso } from "react-virtuoso";
import UserItem from "./components/UserItem";

export default () => {
    let { id } = useParams();
    if (!id) return <div>Error</div>

    const res = useUniversityQuery({
        variables: {
            id,
        }
    })

    console.error(res)

    const { loading, error, data } = res

    if(error) return <div>Something gone error...</div>
    if (loading) return <div>Loading...</div>

    return (
        <Box>
            <Header universityQueryHookResult={res} />
            <MTabs universityQueryHookResult={res} />
        </Box>
    )
}

function Header(props: { universityQueryHookResult?: UniversityQueryHookResult }) {
    const university = props.universityQueryHookResult?.data?.university

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

function MTabs(props: { universityQueryHookResult?: UniversityQueryHookResult}) {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const universityQuery = props.universityQueryHookResult?.data
    const university = universityQuery?.university

    const institutesLabel = `学院${university?.institutes.totalCount}`
    const subcampusesLabel = `校区${university?.subcampuses.totalCount}`
    const subjectsLabel = `主题${university?.subjects.totalCount}`
    const usersLabel = `用户${university?.users.totalCount}`

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                <Tabs value={value} onChange={handleChange}>
                    <Tab label={institutesLabel} {...a11yProps(0)} />
                    <Tab label={subcampusesLabel} {...a11yProps(1)} />
                    <Tab label={subjectsLabel} {...a11yProps(2)} />
                    <Tab label={usersLabel} {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <InstitutesList universityQueryHookResult={props.universityQueryHookResult} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SubCampusesList universityQueryHookResult={props.universityQueryHookResult} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SubjectsList universityQueryHookResult={props.universityQueryHookResult} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <UsersList universityQueryHookResult={props.universityQueryHookResult} />
            </TabPanel>
        </Box>

    )
}

function UsersList(props: {universityQueryHookResult?: UniversityQueryHookResult}) {
    const university = props.universityQueryHookResult?.data?.university
    const users = university?.users
    const pageInfo = university?.users.pageInfo
    const fetchMore = props.universityQueryHookResult?.fetchMore

    return (
        <>
            <Virtuoso
                style={{ height: "calc(100vh - 56px)", flexGrow: 1 }}
                totalCount={users?.edges.length ?? 0}
                itemContent={(index) => {
                    return <UserItem user={users?.edges[index].node} />
                }}
                endReached={index => {
                    console.error({index, fetchMore})
                    fetchMore && fetchMore({
                        variables: {
                            usersAfter: pageInfo?.endCursor,
                            usersFirst: 10,
                        }
                    })
                }}
            >
            </Virtuoso>
        </>
    )
}

function SubjectsList(props: {universityQueryHookResult?: UniversityQueryHookResult}) {
    const university = props.universityQueryHookResult?.data?.university
    const subjects = university?.subjects

    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', bottom: 'calc(56px + 16px)', right: 16 }}
                icon={<AddIcon />} />
            <Virtuoso
                style={{ height: "calc(100vh - 56px)", flexGrow: 1 }}
                totalCount={subjects?.edges.length ?? 0}
                itemContent={(index) => {
                    return (
                        <ListItem button>
                            <ListItemText primary={subjects?.edges[index].node?.title ?? 'N/A'} />
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
function InstitutesList(props: { universityQueryHookResult?: UniversityQueryHookResult }) {
    const university = props.universityQueryHookResult?.data?.university
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

function SubCampusesList(props: { universityQueryHookResult?: UniversityQueryHookResult }) {
    const university = props.universityQueryHookResult?.data?.university
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