import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


// https://i.ibb.co/7bWBRp1/01.jpg
// https://i.ibb.co/pdPtkFd/02.jpg
// https://i.ibb.co/R3Z3M8J/03.png
// https://i.ibb.co/ByT6fpH/04.jpg
// https://i.ibb.co/6NK55vw/05.png
// https://i.ibb.co/jHLdcVP/06.png

const Banner = () => {
    return (
        <Carousel className="flex flex-col justify-center w-full mx-auto">
                <div>
                    <img src='https://i.ibb.co/7bWBRp1/01.jpg' />
                </div>
                <div>
                    <img src="https://i.ibb.co/pdPtkFd/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/R3Z3M8J/03.png" />
                </div>
                <div>
                    <img src='https://i.ibb.co/ByT6fpH/04.jpg' />
                </div>
                <div>
                    <img src="https://i.ibb.co/6NK55vw/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/jHLdcVP/06.png" />
                </div>
            </Carousel>
    );
};

export default Banner;