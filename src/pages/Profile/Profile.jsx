import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";



const Profile = () => {
    const {user} = useContext(AuthContext);
    const [college, setCollege] = useState("");
    useEffect(() => {
        fetch(`https://my-project-server-masum-developer.vercel.app/my-college/${user?.email}`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [user])
    console.log(college);
    
    return (
        <div>
            <h2 className="text-2xl my-3">My Profile</h2>

            <h4>Name: {college.candidateName}</h4>
            <h4>Email: {college.candidateEmail}</h4>
            <h4>University: {college.collegeName} </h4>
            <h4>Address:{college.addressDetails}</h4>
            <Link to={`/profile-edit/${college._id}`} className="btn btn-success my-3">Edit</Link>    
        </div>
    );
};

export default Profile;