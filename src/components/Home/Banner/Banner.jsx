import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="py-40 px-0 relative bg-gradient-to-r from-[#8e2de2] to-[#4a00e0] md:h-[calc(100vh - 80px)]">
            <div className="h-full flex justify-end items-center flex-col-reverse max-w-[calc(100%-20px)] my-0 mx-auto relative md:flex-row md:max-w-7xl ">
                <div className="text-white text-center flex flex-col item-center md:absolute md:left-12 md:top-1/2 md:-translate-y-2/4 xl:left-0">
                    <h1 className="text-7xl font-bold text-white mb-5 md:text-9xl">SALES</h1>
                    <p className="max-w-72 text-sm leading-5 mb-5 md:max-w-[500px] md:text-lg md:leading-6 md:mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam perspiciatis doloribus suscipit eius explicabo. Cumque reprehenderit odio necessitatibus! Recusandae blanditiis nihil placeat veritatis est asperiores ex nulla labore accusantium eveniet!</p>
                    <div className="flex justify-center gap-5">
                        <div className="uppercase text-sm font-medium w-fit border-2 border-solid border-white py-3 px-5 transition-all ease delay-100 cursor-pointer hover:opacity-60">Read More</div>
                        <div className="text-black uppercase text-sm font-medium w-fit border-2 border-solid border-white py-3 px-5 transition-all ease delay-100 cursor-pointer bg-white hover:opacity-60">Shop Now</div>
                    </div>
                </div>
                    <img className="relative z-10 w-52 mb-5 md:w-[500px] md:mr-14 md:mt-12 md:mb-0 xl:w-[600px] xl:mr-0 xl:mt-0" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
