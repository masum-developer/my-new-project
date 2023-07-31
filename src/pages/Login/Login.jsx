import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../../firebase/firebase.config";


const auth = getAuth(app);
const Login = () => {
    
    const [error,setError] = useState('');
    const emailRef = useRef();
    const {loginUser,googleLogin,githubLogin}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email,password);

        loginUser(email,password)
        .then(result=>{
            setError('')
            const user= result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error=>{
            setError(error.message)
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
    const handleResetPassword = event =>{
        const email = emailRef.current.value;
        if(!email){
            alert('Please Provide your email addres');
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Check your email')
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                
                <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                
                    <div className="card-body">
                    <h2 className="text-center text-3xl">Login</h2>
                        <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            
                            <input type="submit" className="btn bg-black border-0 text-white" value="Login" />
                        </div>
                        </form>
                        <p>New to My Avenger <Link className="text-info font-bold" to='/register'>Register</Link> </p>
                        <p>Forgot Password <button className="text-info font-bold btn btn-link" onClick={handleResetPassword}>Reset Password</button></p>
                        <p className='text-error'>{error}</p>
                        <button onClick={handleGoogleLogin} className='btn btn-info mt-3'> <FaGoogle></FaGoogle> - Login with Google</button>
                        <button onClick={handleGithubLogin} className='btn btn-info mt-3' ><FaGithub></FaGithub> Login with Github</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;