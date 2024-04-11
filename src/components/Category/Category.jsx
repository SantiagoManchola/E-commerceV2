import cat1 from "../../../src/assets/category/cat-1.jpg"

const Category = () => {
    return(
        <div className="my-6 mx-0 md:my-12">
            <div className="flex flex-wrap gap-2">
                <div className="bg-black w-[calc(50%-5px)] cursor-pointer overflow-hidden md:w-[calc(25%-10px)] group">
                    <img className="group-hover:scale-110 w-full block transition ease delay-100" src={cat1} alt="" />
                </div> 
                <div className="bg-black w-[calc(50%-5px)] cursor-pointer overflow-hidden md:w-[calc(25%-10px)] group">
                    <img className="group-hover:scale-110 w-full block transition ease delay-100" src={cat1} alt="" />
                </div> 
                <div className="bg-black w-[calc(50%-5px)] cursor-pointer overflow-hidden md:w-[calc(25%-10px)] group">
                    <img className="group-hover:scale-110 w-full block transition ease delay-100" src={cat1} alt="" />
                </div> 
                <div className="bg-black w-[calc(50%-5px)] cursor-pointer overflow-hidden md:w-[calc(25%-10px)] group">
                    <img className="group-hover:scale-110 w-full block transition ease delay-100" src={cat1} alt="" />
                </div> 
            </div>
        </div>
    );
};

export default Category;
