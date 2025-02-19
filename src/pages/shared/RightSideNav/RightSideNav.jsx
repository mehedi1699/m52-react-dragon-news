import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/swimming.png"
import qZone2 from "../../../assets/class.png"
import qZone3 from "../../../assets/playground.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <SiGithub></SiGithub>
                    Login With GitHub
                </button>
            </div>
            <div className="p-4  mb-6">
                <h2 className="text-3xl mb-3">Find Us On</h2>
                <a className="p-4 flex items-center text-lg border rounded-t-lg" href="">
                    <FaFacebook className="mr-2"></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 flex items-center text-lg border border-t-0" href="">
                    <FaTwitter className="mr-2"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 flex items-center text-lg border rounded-b-lg border-t-0" href="">
                    <FaInstagram className="mr-2"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q Zone</h2>
                <img src={qZone1}></img>
                <img src={qZone2}></img>
                <img src={qZone3}></img>
                
            </div>
        </div>
    );
};

export default RightSideNav;