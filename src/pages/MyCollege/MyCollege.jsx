import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

const MyCollege = () => {
    const {user} = useContext(AuthContext);
    const [college, setCollege] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/my-college/${user?.email}`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [user])
    console.log(college);
    return (
        <div>
            
            <div key={college._id} className="card lg:card-side bg-base-100 shadow-xl my-5">
                <div className="w-[30%]">
                <figure><img className="w-64 h-60" src={college.image} alt="College" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{college.candidateName}</h2>
                    <p>Contact: {college.phoneNumber}</p>
                    <p>Email:{college.candidateEmail}</p>
                    <p>College:{college.collegeName}</p>
                    <Link className="btn bg-black hover:bg-slate-800 text-white w-48" to={`/college/${college.collegeId}`}> Details</Link>
                    <Link className="btn bg-slate-800 hover:bg-black text-white w-48" to={`/add-review/${college.collegeId}`}> Add Review</Link>

                </div>
                
            </div>
        </div>
    );
};

export default MyCollege;