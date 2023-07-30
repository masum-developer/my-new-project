import { useForm } from "react-hook-form";
const Review = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        
        <section>
            <h2 className="text-center text-5xl my-5">
            Review
            </h2>
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi totam consequatur cumque delectus nulla distinctio facere ad possimus, hic fugiat?
                </p>
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