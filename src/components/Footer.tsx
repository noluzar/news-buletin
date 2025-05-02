import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Footer: React.FC = () => {
    return (
        <div className="bg-black text-white ">
        <div className="flex flex-col md:flex-row p-6 justify-between space-y-4">
            <div className="space-y-3">
                <p className="font-bold text-3xl">Buletin<span className="text-red-600">.</span></p>
                <h1 className="md:text-[40px] text-[30px] md:w-[25vw] font-semibold">Latest Headlines: Breaking News and Updates</h1>
            </div>
            <div className="space-y-2">
                <p className="text-[30px]">SUBSCRIBE</p>
                <div className="space-y-2">
                    <p className="text-gray-300 text-[20px]">Email address</p>
                    <div className="flex items-center justify-between bg-white rounded-lg">
                        <div className="flex items-center  gap-2 p-2">
                            <MdOutlineEmail className="text-black size-7" />
                            <input placeholder="Enter your email" className="bg-transparent md:w-[25vh] md:h-[5vh]"></input>
                        </div>
                        <button className="bg-red-600 md:h-[8vh] rounded-r-lg p-2 text-xl">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <hr className="h-[1px] bg-gray-800 mx-6"></hr>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-6 text-xl">
            <div className="flex flex-col gap-2 text-gray-400">
                <h3 className="font-semibold text-white">HOME</h3>
                <p>U.S.</p>
                <p>Politics</p>
                <p>World</p>
                <p>Health</p>
                <p>Business</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-400">
                <h3 className="font-semibold text-white">ENTERTAINMENT</h3>
                <p>Ideas</p>
                <p>Science</p>
                <p>History</p>
                <p>Sports</p>
                <p>Magazine</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-400">
                <h3 className="font-semibold text-white">TIME EDGE</h3>
                <p>Video</p>
                <p>Masthead</p>
                <p>Subscribe</p>
                <p>Digital Magazine</p>
                <p>Business</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-400">
                <h3 className="font-semibold text-white">PRESS ROOM</h3>
                <p>TIME Studios</p>
                <p>Site Map</p>
                <p>Media Kit</p>
                <p>Careers</p>
            </div>
            <div className="flex flex-col gap-2 text-gray-400">
                <h3 className="font-semibold text-white">GET HELP</h3>
                <p>Support</p>
                <p>Pricing</p>
                <p>About Us</p>
            </div>
        </div>

    </div>
    );
  };
  
  export default Footer;