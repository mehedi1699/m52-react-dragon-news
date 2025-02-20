import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const Register = () => {

    const {createUser}= useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        // create user
        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="min-h-screen">
            <Navbar></Navbar>

            <div className="  bg-base-200 p-10 min-h-screen">
                <div className="w-4xl mx-auto flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl my-8 text-center font-bold ">Register Your Account!</h1>

                    </div>
                    <div className=" mx-auto w-xl flex flex-col space-y-2">
                        <form onSubmit={handleRegister} className="space-y-4">
                            <label className="">Name</label>
                            <input type="text" name="name" className="input w-full" required placeholder="Your Name" />
                            <label className="">Photo URL</label>
                            <input type="text" name="photoURL" className="input w-full" placeholder="Your Photo URL" />
                            <label className="">Email</label>
                            <input type="email" name="email" className="input w-full" required placeholder="Email" />
                            <label className=" w-full">Password</label>
                            <input type="password" name="password" className="input w-full" required placeholder="Password" />
                            <input type="checkbox" required></input>
                            <a href="" className="ml-3">Accept <span className=" font-bold">Term & Conditions</span></a>
                            <button className="btn btn-neutral w-full">Register</button>

                        </form>
                        <p>Already Have An Account ?  <Link to="/login" className="text-blue-600 font-bold link link-hover">Login</Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;