import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub} from "react-icons/fa";

import Swal from 'sweetalert2'

const Register = () => {
    
    
    const {createUser,userProfile,logOut,googleLogin,githubLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = '';
        console.log(name,email,password);

        createUser(email,password)
        .then(result=>{
              userProfile(name,photo)
              .then(()=>{
                const saveUser = {name:name,email:email,image:photo,role:'student', university:'',address:''}
                fetch('https://my-project-server-masum-developer.vercel.app/users', {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                   })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Student created successfully',
                                showConfirmButton: false,
                                timer: 2500
                            });
                            logOut()
                                .then(() => {
                                    navigate('/login');
                                })
                                .catch(error => console.log(error))
                        }
                    })
               
            })
            .catch(error=>console.log(error))
              
        
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate('/')
        })
        .catch(error=>console.log(error))
    }
    const handleGithubLogin = ()=>{
        githubLogin()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                
                    <div className="card-body">
                    <h2 className="text-center text-3xl">Register</h2>
                        <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        
                        <div className="form-control mt-6">
                            
                            <input type="submit" className="btn bg-black border-0 text-white" value="Register" />
                        </div>
                        </form>
                        <p>Already have an account <Link className="text-info font-bold" to='/login'>Login</Link> </p>
                        
            <button onClick={handleGoogleLogin} className='btn btn-info mt-3'> <FaGoogle></FaGoogle> - Login with Google</button>
            <button onClick={handleGithubLogin} className='btn btn-info mt-3' ><FaGithub></FaGithub> Login with Github</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;