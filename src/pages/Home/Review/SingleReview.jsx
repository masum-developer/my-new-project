

const SingleReview = ({singleCollege}) => {
    return (
        <div>
            <h4>College Name: {singleCollege.name}</h4>
            <p>Rating: {singleCollege.rating}</p>
        </div>
    );
};

export default SingleReview;