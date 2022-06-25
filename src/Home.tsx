import { AppBar, Paper, SpeedDial, Toolbar } from "@mui/material";
import { PostsQuery, usePostsQuery } from "./generated/graphql";
import {
    Add as AddIcon,
} from '@mui/icons-material';
import { Virtuoso } from "react-virtuoso";
import PostItem from "./components/PostItem";
import { useNavigate } from "react-router-dom";
import SearchBar from "./components/SearchBar";

export default function Home() {
    const navigate = useNavigate();
    const { loading, error, data, fetchMore } = usePostsQuery();
    
    if (loading) return <div> Loading... </div>
    if(error) return <div>Something went wrong...</div>

    const pageInfo = data?.postsWithRelay.pageInfo

    const itemContent = (index: number, postsQuery: PostsQuery | undefined) => {
        const post = postsQuery?.postsWithRelay.edges[index].node
        return <PostItem post={post} />
    }

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <SearchBar />
            </Toolbar>
        </AppBar>
        <Paper sx={{backgroundColor: '#eee', flexGrow: 1, height: '100%' }}>
            <SpeedDial
                onClick={ () => {
                    navigate('/create-post')
                }}
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', bottom: 'calc(56px + 16px)', right: 16 }}
                icon={<AddIcon />} />
            <Virtuoso
                style={{ height: 'calc(100vh - 56px)', flexGrow: 1 }}
                totalCount={data?.postsWithRelay.edges.length ?? 0}
                itemContent={(index) => itemContent(index, data)}
                endReached={index => {
                    fetchMore({
                        variables: {
                            after: pageInfo?.endCursor,
                            first: 10,
                        }
                    })
                }}
            >
            </Virtuoso>
        </Paper>
        </>
    )
}