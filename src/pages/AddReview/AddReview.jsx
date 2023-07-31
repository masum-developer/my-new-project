
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddReview = () => {
    const college = useLoaderData();
    
    const navigate = useNavigate('/')
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        
        const updatedCollege = {rating}
        fetch(`https://my-project-server-masum-developer.vercel.app/colleges/${college._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCollege)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success',
                    text: 'Update done',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  navigate('/')
            }
        })
    }
        
    
    return (
        <div>
            <form onSubmit={handleUpdate}>
            
            <div className="flex">
                
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input type="name" placeholder="Rating"
                        name="rating"
                        className="input input-bordered w-full " />
                        
                </div>
                
            </div>
            
            
            <div className="text-center">
                <input type="submit" className="btn btn-block hover:bg-slate-800 bg-black text-white  my-4 " value="Submit" />
            </div>
        </form>
        </div>
    );
};

export default AddReview;