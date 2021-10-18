import './PostCard.css';
import { Link } from 'react-router-dom'

const PostCard = (props) => {
    return (
        <Link className="card" to={`/posts/${props._id}`}>
        <div className="post-card">
            
                <img className="post-card-image" src={props.imgURL} alt={props.title} />
    
        </div>
        </Link>
    )
}

export default PostCard