import { useCreatePostMutation } from "./generated/graphql"

export default () => {
    const [createPost, {data, error, loading}] = useCreatePostMutation();

    return <>创建帖子界面</>
}