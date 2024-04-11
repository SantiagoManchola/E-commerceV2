import Product from "./Product/Product"

const Products = ({ innerPage, headingText }) => {
    return(
        <div className="my-12 mx-0 md:my-20">
            {!innerPage && <div className="mb-5 text-lg font-medium uppercase md:mb-9 md:text-base after:content-[''] after:block after:mt-1 after:w-12 after:h-1 after:bg-[#8e2de2] after:md:mt-2">{headingText}</div>}
            <div className="flex flex-wrap gap-2 md:gap-5">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    );
};

export default Products;
