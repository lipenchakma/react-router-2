import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const {id, name, email, phone } = user;
    return (
        <div className="bg-green-400 rounded-lg py-4 px-10">
            <div>
                <h2>{name}</h2>
                <p className='text-lg'>Email:{email} </p>
                <p className='text-lg'>Phone: {phone} </p>
                <Link to={`/user/${id}`}>Show Details</Link>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
  };
export default User;