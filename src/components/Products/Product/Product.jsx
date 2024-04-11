import prod from "../../../assets/products/earbuds-prod-1.webp"

const Product = () => {
    return(
        <div className="w-[calc(50%-5px)] mb-5 md:w-[calc(25%-15px)] group">
            <div className="w-full h-44 bg-[#0000000d] mb-2 p-6 flex items-center md:h-80">
                <img className="transition-all ease delay-75 block w-full transform group-hover:scale-125" src={prod} alt="" />
            </div>
            <div>
                <span className="text-sm block text-ellipsis whitespace-nowrap overflow-hidden md:text-base md:mb-2">Product Name</span>
                <span className="text-lg md:text-2xl">$499</span>
            </div>
        </div>
    );
};

export default Product;
