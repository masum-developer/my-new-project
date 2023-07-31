import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token
const AddCollege = () => {
    const {user} = useContext(AuthContext);
    console.log(user?.email);
    const { register, handleSubmit, reset} = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {

        console.log(data);
        
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const photoURL = imgResponse.data.display_url;
                    const saveClass = { name: data.name, image: photoURL,admissionDate:data.admissionDate, events:data.events, eventDetails:data.eventDetails, eventHistory:data.eventHistory, researchHistory:data.researchHistory, researchWork:data.researchWork, researchNumber:data.researchNumber,
                    rating:0,
                    sportsName:data.sportsName, sportsDetails:data.sportsDetails, adminEmail:user.email}
                    fetch('http://localhost:5000/colleges', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                });

                            }
                        })
                }
            })

    }

    return (
        <div className="my-5">
            <h2 className="text-3xl text-center">Add College</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div className="flex">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">College Name</span>
                        </label>
                        <input type="name" placeholder="Class Name"
                            {...register("name",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Image*</span>
                        </label>
                        <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full" />
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Admission Date</span>
                        </label>
                        <input type="date" placeholder="admissionDate"
                            {...register("admissionDate")}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Events</span>
                        </label>
                        <input type="name" placeholder="event1,event2"
                            {...register("events",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Event Deatils</span>
                        </label>
                        
                         <textarea className="input input-bordered w-full " name="" id="" cols="30" {...register("eventDetails")} rows="10"></textarea>   
                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text">Event History</span>
                        </label>
                        
                         <textarea className="input input-bordered w-full " name="" id="" cols="30" {...register("eventHistory")} rows="10"></textarea>   
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Research History</span>
                        </label>
                        
                         <textarea className="input input-bordered w-full " name="" id="" cols="30" {...register("researchHistory")} rows="10"></textarea>   
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Research Work</span>
                        </label>
                        <input type="name" placeholder="Research1,Research2"
                            {...register("researchWork",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                    
                </div>
                <div className="flex">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">No of Research</span>
                        </label>
                        <input type="number" placeholder="Research No"
                            {...register("researchNumber",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                    
                    
                </div>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Sport</span>
                        </label>
                        
                        <input type="name" placeholder="Sport Name1, Sport Name2"
                            {...register("sportsName",{required: true})}
                            className="input input-bordered w-full " />   
                    </div>
                    <div className="form-control w-full ml-4 ">
                        <label className="label">
                            <span className="label-text">Sport Details</span>
                        </label>
                        
                         <textarea className="input input-bordered w-full " name="" id="" cols="30" {...register("sportsDetails")} rows="10"></textarea>   
                    </div>
                </div>
                
                <div className="text-center">
                    <input type="submit" className="btn btn-block hover:bg-slate-800 bg-black text-white  my-4 " value="Add Class" />
                </div>
            </form>
            
        
        </div>
    );
};

export default AddCollege;