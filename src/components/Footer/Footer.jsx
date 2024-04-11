import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <div className="w-full">
      <div className=" flex flex-wrap gap-5 my-0 mx-auto max-w-[1200px] py-10 px-20 md:py-12 md:px-0 md:justify-between">
        <div className="max-w-xs">
          <div className="title text-lg font-semibold mb-4">About</div>
          <div className="text text-sm text-gray-500">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className="max-w-xs [&:nth-child(3)]:w-[150px] md:[&:nth-child(3)]:w-auto">
          <div className="text-lg mb-5">Contact</div>
          <div className="flex mb-2">
            <FaLocationArrow className="mr-2 mt-1 text-sm shrink-0 text-[#00000088]" />
            <div className="text-[#00000088] text-sm">
              Kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Kerala,
              688006
            </div>
          </div>
          <div className="flex mb-2">
            <FaMobileAlt className="mr-2 mt-1 text-sm shrink-0 text-[#00000088]" />
            <div className="text-[#00000088] text-sm">Phone: 0471 272 0261</div>
          </div>
          <div className="flex mb-2">
            <FaEnvelope className="mr-2 mt-1 text-sm shrink-0 text-[#00000088]" />
            <div className="text-[#00000088] text-sm">Email: store@jsdev.com</div>
          </div>
        </div>
        <div>
          <div className="text-lg mb-5">Categories</div>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Headphones</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Smart Watches</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Bluetooth Speakers</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Wireless Earbuds</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Home Theatre</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Projectors</span>
        </div>
        <div>
          <div className="text-lg mb-5">Pages</div>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Home</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">About</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Privacy Policy</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Returns</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Terms & Conditions</span>
          <span className="block mb-2 cursor-pointer text-[#00000088] text-sm">Contact Us</span>
        </div>
      </div>
      <div className="border-t border-solid border-[#0000001a]">
        <div className="p-20 flex items-center text-center flex-col gap-2 md:p-0   md:h-16 max-w-[1200px] my-0 mx-auto md:flex-row md:justify-between md:text-left">
          <span className="text-xs text-[#00000080]">
            XXXXX 2024 CREATED BY XXXX XXXX. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} alt="Payment methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
