import React from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const Newsletter = () => {
    return(
        <div className="bg-[url('../../../src/assets/newsletter-bg.jpeg')] w-full h-[400px] flex items-center bg-center bg-no-repeat bg-cover">
            <div className="w-fit flex flex-col items-center my-0 mx-auto text-center">
                <span className="mb-4 uppercase text-[#00000080]">Newsletter</span>
                <span className="mb-5 text-xl leading-7 font-medium uppercase py-0 px-8 md:text-3xl">
                    Sign up for latest update ond offers
                </span>
                <div className="flex gap-1 mb-2">
                    <input className="w-52 h-10 roundend-none border border-solid border-[#00000033] py-0 px-3 text-base outline-none md:w-80" type="text" placeholder="Email Address" />
                    <button className="outline-0 border-0 h-10 w-24 flex items-center content-center justify-center cursor-pointer text-base text-white bg-[#8e2de2] border-b-[3px] border-solid border-[#6516aa] md:w-32">Suscribe</button>
                </div>
                <div className="mb-5 text-sm text-[#00000080]">Will be used in accordance with our Privacy Policy</div>
                <span className="flex gap-2">
                    <div className="w-7 h-7 bg-[#000000cc] rounded-[50%] flex items-center justify-center text-white">
                        <FaFacebookF/>
                    </div>
                    <div className="w-7 h-7 bg-[#000000cc] rounded-[50%] flex items-center justify-center text-white">
                        <FaTwitter/>
                    </div>
                    <div className="w-7 h-7 bg-[#000000cc] rounded-[50%] flex items-center justify-center text-white">
                        <FaInstagram/>
                    </div>
                    <div className="w-7 h-7 bg-[#000000cc] rounded-[50%] flex items-center justify-center text-white">
                        <FaLinkedinIn/>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
