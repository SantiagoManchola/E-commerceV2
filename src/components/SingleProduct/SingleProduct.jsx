import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterest, FaCartPlus} from "react-icons/fa";
import prod from "../../assets/products/earbuds-prod-1.webp"

const SingleProduct = () => {
    return (
        <div className="my-5 mx-0 md:my-20">
            <div className="max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-[1200px]">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full bg-[#0000000d] shrink-0 md:w-[600px] h-[600px]">
                        <img className="block w-full" src={prod} alt="" />
                    </div>
                    <div className="flex flex-col pt-5 md:py-0 md:px-9">
                        <span className="text-xl mb-5 md:text-2xl">Product name</span>
                        <span className="text-2xl mb-5">Price</span>
                        <span className="text-sm mb-5 text-[#6b6b6b] md:text-base">Product Description</span>

                        <div className="flex md:mt-7">
                            <div className="w-fit flex border-solid border-2 border-[#00000033] mr-2 h-12">
                                <span className="text-lg w-10 flex items-center justify-center cursor-pointer text-[#6b6b6b] border-solid border-r border-1 border-[#00000033] ">-</span>
                                <span className="w-14 text-lg flex items-center justify-center cursor-pointer text-[#6b6b6b]">5</span>
                                <span className="text-lg w-10 flex items-center justify-center cursor-pointer text-[#6b6b6b] border-solid border-l border-1 border-[#00000033]">+</span>
                            </div>
                            <button className="outline-none border-0 h-12 w-44 flex items-center justify-center cursor-pointer text-base text-white bg-[#8e2de2] border-b border-3 border-solid border-[#6515aa] flex-grow md:flex-grow-0">
                                <FaCartPlus className="mr-2" size={20}/>
                                ADD TO CART
                            </button>
                        </div>

                        <span className="my-5 mx-0 w-full h-[1px] bg-[#0000001a]"/>

                        <div>
                            <span className="text-lg font-medium block mb-5">
                                Category
                                <span className="text-base font-medium cursor-pointer text-[#6b6b6b]"> Headphones</span>
                            </span>
                            <span className="text-lg font-medium flex flex-row align-center items-center">
                                Share:
                                <span className="text-base font-medium cursor-pointer text-[#6b6b6b] flex-row flex">
                                    <FaFacebookF className="my-0 mx-2" size={16}/>
                                    <FaTwitter className="my-0 mx-2" size={16}/>
                                    <FaInstagram className="my-0 mx-2" size={16}/>
                                    <FaLinkedinIn className="my-0 mx-2" size={16}/>
                                    <FaPinterest className="my-0 mx-2" size={16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts/>
            </div>
        </div>
    );
};

export default SingleProduct;
