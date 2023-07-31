import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SingleReview from "./SingleReview";
const Review = () => {
    const [college, setCollege] = useState("");
    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    console.log(college);
    return (
        
        <section>
            <h2 className="text-center text-5xl my-5">
            Review
            </h2>
            <div>
                {
                college && college.map(singleCollege=><SingleReview key={singleCollege._id} singleCollege={singleCollege}></SingleReview>)
                }
            </div>
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            
            
            <div className="flex">
                
                <div className="form-control w-full">
                    
                    
                     <textarea className="input input-bordered w-full " name="" id="" cols="30" {...register("sportsDetails")} rows="10"></textarea> 
                     <input type="submit" className="btn btn-block hover:bg-slate-800 my-3 bg-black text-white" value="Feedback" />  
                </div>
                
                
            
            </div>
            
            
        </form>
            </div>
            
            
        </section>
    );
};

export default Review;