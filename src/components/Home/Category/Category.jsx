import Products from "../Products/Products";

const Category = () => {
    return (
        <div className="my-8 mx-0 md:my-20">
            <div className="max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-[1200px]">
                <div className="text-2xl md:text-4xl">Category Title</div>
                <Products innerPage={true}/>
            </div>
        </div>
    );
};

export default Category;
