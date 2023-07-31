import { useEffect, useState } from "react";
import SingleCollege from "../Home/Home/SingleCollege";


const College = () => {
    const [college, setCollege] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])
    return (
        <div>
            <h2>All College</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    college && college.map(singleCollege => <SingleCollege key={singleCollege.id} singleCollege={singleCollege}></SingleCollege>)
                }
            </div>
        </div>
    );
};

export default College;