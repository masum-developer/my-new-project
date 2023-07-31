import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const ProfileEdit = () => {
    const profile = useLoaderData();
    console.log(profile);
    const navigate = useNavigate('/')
    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;
        const candidateName = form.candidateName.value;
        const candidateEmail = form.candidateEmail.value;
        
        console.log(candidateName,candidateEmail);
        const updatedProfile = {candidateName,candidateEmail}
        fetch(`https://my-project-server-masum-developer.vercel.app/profile-update/${profile._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProfile)
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
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                
                    <div className="card-body">
                    <h2 className="text-center text-3xl">Edit</h2>
                        <form onSubmit={handleUpdate}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="candidateName" placeholder="candidateName" defaultValue={profile?.candidateName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="candidateEmail" placeholder="candidateEmail" defaultValue={profile?.candidateEmail} className="input input-bordered" />
                        </div>
                        
                        
                        <div className="form-control mt-6">
                            
                            <input type="submit" className="btn btn-info border-0" value="Save" />
                        </div>
                        </form>
                        

                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProfileEdit;