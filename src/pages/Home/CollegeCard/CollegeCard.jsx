import { useEffect, useState } from "react";
import SingleCollege from "../Home/SingleCollege";


const CollegeCard = () => {
    const [college, setCollege] = useState("");
    useEffect(() => {
        fetch('https://my-project-server-masum-developer.vercel.app/three-colleges')
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    college && college.map(singleCollege => <SingleCollege key={singleCollege._id} singleCollege={singleCollege}></SingleCollege>)
                }
            </div>
        </div>
    );
};

export default CollegeCard;