import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token
const AdmissionForm = () => {
    const college = useLoaderData();
    const {_id,name}  = college;
    
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
                    const saveClass = {collegeId:_id, collegeName:name, image: photoURL,candidateName:data.candidateName, birthDate:data.birthDate, phoneNumber:data.phoneNumber, addressDetails:data.addressDetails, subjects:data.subjects,
                    candidateEmail:data.candidateEmail
                }
                    fetch('http://localhost:5000/admissions', {
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
            <h2 className="text-3xl text-center">Admission Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            
                <div className="flex">
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
                        </label>
                        <input type="name" placeholder="Candidate Name"
                            {...register("candidateName",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Candidate Email</span>
                        </label>
                        <input type="name" placeholder="Candidate Email"
                            {...register("candidateEmail",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                </div>
                <div className="flex">
                
                    <div className="form-control w-full">
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
                            <span className="label-text">Date of Birth</span>
                        </label>
                        <input type="date" placeholder="Date of Birth"
                            {...register("birthDate")}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Phone No.</span>
                        </label>
                        <input type="name" placeholder="phone number"
                            {...register("phoneNumber",{required: true})}
                            className="input input-bordered w-full " />
                            
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Address Deatils</span>
                        </label>
                        
                         <textarea className="input input-bordered w-full " name="" id="" cols="30" {...register("addressDetails")} rows="10"></textarea>   
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="name" placeholder="physics, chemistry"
                            {...register("subjects",{required: true})}
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

export default AdmissionForm;