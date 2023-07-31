import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdmissionCollege = () => {
    const [college, setCollege] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])
    return (
        <div>
            <h2>All Admission College Name</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    college && college.map(singleCollege => <Link to={`/admission-process/${singleCollege._id}`} key={singleCollege.id}>{singleCollege.name}</Link>)
                }
            </div>
        </div>
    );
};

export default AdmissionCollege;