import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
    console.log(props);
    return (
        <>
            <Link className="post" to={`/posts/${props._id}`}>
                <img className="post-image" src={props.imgURL} alt={props.title} />
                <div className="post-name">{props.title}</div>
                <div className="price">{props.servicer}</div>
            </Link>
        </>
    )
}
export default Post