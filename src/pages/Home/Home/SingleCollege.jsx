import { Link } from "react-router-dom";

const SingleCollege = ({singleCollege}) => {
    const {_id, name, image, researchNumber, admissionDate, events, rating, sportsName} =singleCollege;
    return (
        <div className="card w-86 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt="It Company" className="rounded-xl w-40 h-40 img-fluid" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <h4>Rating: {rating}</h4>
            <h4>Admission Date: {admissionDate}</h4>
            <h4>No Of Research: {researchNumber}</h4>
            <h4>Events: {events}</h4>
            <h4>Sports: {sportsName}</h4>

            <div className="card-actions">

                <Link to={`/college/${_id}`}><button className="btn bg-black hover:bg-slate-800 text-white">Details</button></Link>
            </div>
        </div>
    </div>
    );
};

export default SingleCollege;