import { useParams } from "react-router-dom";

export default () => {
    let { id } = useParams();
    console.error({id});
    return (<div>University</div>)   
}