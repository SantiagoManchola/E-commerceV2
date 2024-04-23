import { MdClose } from "react-icons/md"
import prod from "../../../assets/products/earbuds-prod-1.webp"

const Search = ({ setShowSearch }) => {
    return (
        <div className="fixed w-full h-full z-[999] top-0 left-0 bg-white translate-y-full animate-slideSearch">
            <div className="w-full flex justify-center py-2 px-12 border-b border-solid border-[#0000001a] relative md:py-5 md:px-0">
                <input className="w-full max-w-[1200px] h-12 text-center text-xl font-semibold text-[#212121] outline-none border-none uppercase md:text-5xl md:h-20" type="text" autoFocus placeholder="Search For Products"/>
                <MdClose className="absolute text-2xl right-6 top-1/2 -translate-y-1/2 cursor-pointer md:right-9 md:text-5xl" onClick={()=>setShowSearch(false)}/>
            </div>
            <div className="max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-[800px]">
                <div className="h-[calc(100vh-110px)] overflow-auto my-5 mx-0 md:h-[calc(100vh-160px)]">
                    <div className="flex items-center gap-2 py-2 px-0 border-b border-solid border-[#0000001a]">
                        <div className="bg-[#0000001a] w-14 h-14 flex-shrink-0">
                            <img className="w-full h-full" src={prod} alt="" />
                        </div>
                        <div className="overflow-hidden">
                            <span className="overflow-ellipsis whitespace-nowrap overflow-hidden text-base mb-2 font-semibold block ">product name</span>
                            <span className="overflow-ellipsis whitespace-nowrap overflow-hidden text-sm mb-2 font-semibold block text-[#00000080]">product description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
