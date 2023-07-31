import { useLoaderData } from "react-router-dom";
const CollgeDetails = () => {
    const college = useLoaderData();
    const {name, image, admissionDate, events, sportsName}  = college;
    return (
        <div>
            <h2>College details</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl my-5">
                <div className="w-[30%]">
                <figure><img className="w-64 h-60" src={image} alt="College" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Admission Date: {admissionDate}</p>
                    <p>Events:{events}</p>
                    <p>Sports:{sportsName}</p>
                    
                </div>
                
            </div>
        </div>
    );
};

export default CollgeDetails;