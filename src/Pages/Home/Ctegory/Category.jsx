import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

// https://i.ibb.co/QXfXFx5/slide1.jpg
// https://i.ibb.co/ZVkSv9M/slide2.jpg
// https://i.ibb.co/5GHbRqB/slide3.jpg
// https://i.ibb.co/s1PWDL4/slide4.jpg
// https://i.ibb.co/QXfXFx5/slide1.jpg

const Category = () => {
  return (
    <section>
      <SectionTitle
      subHeading={"From 11.00am to 1.00pm"}
      heading={"order Online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src="https://i.ibb.co/QXfXFx5/slide1.jpg" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
        </SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/ZVkSv9M/slide2.jpg" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
        </SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/5GHbRqB/slide3.jpg" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
        </SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/s1PWDL4/slide4.jpg" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
        </SwiperSlide>

        <SwiperSlide><img src="https://i.ibb.co/QXfXFx5/slide1.jpg" alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
        </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default Category;