import { useEffect } from "react";

import Category from "../Category/Category";
import Products from "../Products/Products";
import Banner from "./Banner/Banner"
/* import { fetchDataFromApi } from "../../utils/api.js"; */

const Home = () => {

 /*    useEffect(()=>{
        getCategories()
    }, [])

    const getCategories = () => {
        fetchDataFromApi("/api/categories").then(res => {
            console.log(res)
        })
    } */

    return(
        <div>
            <Banner/>
            <div className="max-w-[calc(100%-20px)] my-0 mx-auto md:max-w-[1200px]">
                <div>
                    <Category/>
                    <Products headingText="Popular Products"/>
                </div>
            </div>
        </div>
    );
};

export default Home;
