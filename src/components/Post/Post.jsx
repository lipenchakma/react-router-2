import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} =post

    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="bg-green-400 rounded-lg py-4 px-10">
            <h4>Post Od Id:{id} </h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button className='bg-yellow-300 rounded-lg px-4 py-2'>Click</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
  };
export default Post;