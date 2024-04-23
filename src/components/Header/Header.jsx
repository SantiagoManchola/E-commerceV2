
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart} from "react-icons/cg";
import { AiOutlineHeart} from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context.jsx";

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 100){
            setScrolled(true);
        } else{
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return(
        <>
            <header className={`${scrolled ? 'sticky -translate-y-[60px] animate-stickyHeader' : ''} 
            
            top-0 w-full px-20 py-0 bg-[#212121] text-white border-b border-[#0000001a] border-solid z-50 md:py-0 md:px-10`}>
                <div className="flex place-content-between items-center h-12 max-w-7xl my-0 mx-auto md:h-20">
                    <ul className="list-none hidden gap-6 md:flex">
                        <li className="text-sm font-semibold uppercase cursor-pointer">Home</li>
                        <li className="text-sm font-semibold uppercase cursor-pointer">About</li>
                        <li className="text-sm font-semibold uppercase cursor-pointer">Categories</li>
                    </ul>
                    <div className="text-2xl font-bold cursor-pointer uppercase md:text-4xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">Comercio</div>
                    <div className="flex item-center gap-5 md:gap-6">
                        <TbSearch  className="text-xl cursor-pointer md:text-2xl" onClick={()=> setShowSearch(true)}/>
                        <AiOutlineHeart  className="text-xl cursor-pointer md:text-2xl"/>
                        <span className="relative" onClick={()=> setShowCart(true)}>
                            <CgShoppingCart  className="text-xl cursor-pointer md:text-2xl"/>
                            <span className="min-w-5 text-center bg-[#8e2de2] p-[2.5px] absolute -top-1 -right-3 text-xs rounded-xl">5</span>
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart}/>}
            {showSearch && <Search setShowSearch={setShowSearch}/>}
        </>
    );
};

export default Header;
