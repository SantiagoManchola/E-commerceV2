import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"

const CartItem = () => {
    return (
        <div className="flex-grow">
            <div className="py-5 px-4 flex items-center gap-3 hover:bg-[#0000000d]">
                <div className="bg-[#0000000d] w-20 h-20 flex-shrink-0">
                    <img className="w-full h-full" src={prod} alt="" />
                </div>
                <div className="overflow-hidden relative">
                    <span className="overflow-ellipsis whitespace-nowrap overflow-hidden text-base mb-2 font-semibold block pr-6">product name</span>
                    <MdClose className="absolute top-[5px] right-0 cursor-pointer"/>
                    <div className="w-fit flex border-solid border-2 border-[#00000033] mr-2 h-10 mb-2">
                        <span className="text-base w-8 flex items-center justify-center cursor-pointer text-[#6b6b6b] border-solid border-r border-1 border-[#00000033] ">-</span>
                        <span className=" text-sm w-10 flex items-center justify-center cursor-pointer text-[#6b6b6b]">5</span>
                        <span className="text-base w-8 flex items-center justify-center cursor-pointer text-[#6b6b6b] border-solid border-l border-[#00000033]">+</span>
                    </div>
                    <div className="flex itmes-center gap-1 text-xs font-semibold">
                        <span>3</span>
                        <span>x</span>
                        <span className="text-[#8e2de2]">$2222</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
