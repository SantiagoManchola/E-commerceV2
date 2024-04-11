import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";

const Cart = ( {setShowCart} ) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-end z-[99]">
            <div className="bg-[#00000080] absolute top-0 left-0 w-full h-full"></div>
            <div className="w-full h-full bg-white relative z-[1] flex flex-col translate-x-[100%] animate-slideCart md:w-[340px]">

                <div className="flex items-center justify-end py-5 px-4 border-b border-solid border-[#0000001a]">
                    <span className="flex-grow mb-0 text-xl font-bold uppercase">Shopping Cart</span>
                    <span className="flex items-center gap-1 cursor-pointer hover:opacity-50" onClick={()=> setShowCart(false)}>
                        <MdClose className="text-lg"/>
                        <span className="uppercase text-sm">close</span>
                    </span>
                </div>

                {/*{<div className="flex flex-col items-center gap-5 mt-24">
                    <BsCartX className="text-[120px] opacity-10"/>
                    <span>No products in the cart</span>
                    <button className="outline-none border-0 h-12 w-44 flex items-center justify-center cursor-pointer text-base text-white bg-[#8e2de2] border-b border-3 border-solid border-[#6515aa] flex-grow">RETURN TO SHOP</button>
                </div>*/}

                <>
                    <CartItem/>
                    <div className="border-t border-solid border-[#0000001a]">
                        <div className="py-5 px-4 border-b border-solid border-[#0000001a] flex justify-between">
                            <span className="mb-0 font-bold text-xl uppercase">Subtotal:</span>
                            <span className="mb-0 font-bold text-xl uppercase text-[8e2de2]">$1222</span>
                        </div>
                        <div className="py-5 px-4">
                            <button className="outline-none border-0 h-12 w-full flex items-center justify-center cursor-pointer text-lg text-white bg-[#8e2de2] border-b border-3 border-solid border-[#6515aa] flex-grow">Checkout</button>
                        </div>
                    </div>
                </>
            </div>

        </div>
    );
};

export default Cart;
