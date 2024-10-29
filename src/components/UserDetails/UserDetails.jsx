import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData()
    const {name, email, phone} = user;
    return (
        <div className="bg-lime-400 py-20">
            <h2>Details About User</h2>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserDetails;