import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useBlogsCarousel } from "../hooks/blog.hook";
import { Link } from "react-router-dom";

export default function Carousel() {
  const { data: blogs } = useBlogsCarousel();
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[400px] max-w-screen-xl mx-auto"
      >
        {blogs?.data?.map((item: any) => (
          <SwiperSlide key={item._id}>
            <Link
              to={`/blog/${item._id}`}
              className="w-full  h-full flex flex-col justify-between outline-1 cursor-pointer"
            >
              <div className="">
                <img src={item.images[0].url} alt={item.title} />
              </div>
              <div className="h-full flex items-start text-2xl  mb-8 hover:underline line-clamp-2 px-2 py-4">
                {item.title}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
