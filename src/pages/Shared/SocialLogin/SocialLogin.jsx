
const SocialLogin = () => {
    // const {googleSignIn} = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || "/";
    // const handleGoogleSignIn = () =>{
    //     googleSignIn()
    //     .then(result=>{
    //         const loggedInUser = result.user;
    //         console.log('mmm',loggedInUser);
    //         const saveUser = {name:loggedInUser.displayName,email:loggedInUser.email, image:loggedInUser.photoURL, role:'student'}
    //         fetch('https://my-project-server-masum-developer.vercel.app/users', {
    //             method: 'POST',
    //             headers:{
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(saveUser)
    //            })
    //             .then(res => res.json())
    //             .then(() => {
    //                 navigate(from, {replace: true});
    //             })
       // })
   // }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline w-24">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;