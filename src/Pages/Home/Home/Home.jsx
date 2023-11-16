import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Ctegory/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>TH | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <div className="h-[150px] bg-black text-white flex justify-center items-center font-bold shadow-2xl">
                <h2>Call Us: +88 01516311877</h2>
            </div>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;