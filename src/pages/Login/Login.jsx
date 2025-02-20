import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const {logIn} = useContext(AuthContext);
    const location = useLocation()
    console.log("location in the login page",location);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        logIn(email,password)
        .then(result =>{
            console.log(result.user);
            //navigate after login
            navigate(location?.state? location.state : '/')
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <div className="min-h-screen">
            <Navbar></Navbar>

            <div className="  bg-base-200 p-10 min-h-screen">
                <div className="w-4xl mx-auto flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl my-8 text-center font-bold ">Login Your Account!</h1>

                    </div>
                    <div  className=" mx-auto w-xl flex flex-col space-y-2">
                        <form onSubmit={handleLogin} className="space-y-4">
                            <label className="">Email</label>
                            <input type="email" name="email" className="input w-full" required placeholder="Email" />
                            <label className=" w-full">Password</label>
                            <input type="password" name="password" className="input w-full" required placeholder="Password" />
                            <div ><a className="link link-hover text-sm ">Forgot password?</a></div>
                            <button className="btn btn-neutral w-full">Login</button>

                        </form>
                        <p>Dont’t Have An Account ?  <Link to="/register" className="text-blue-600 font-bold link link-hover">Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;