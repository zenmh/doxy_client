import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { doctors_images } from "@/assets/images/doctors";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="min-h-screen dark:text-white text-black"
      >
        {doctors_images.map((img, i) => (
          <SwiperSlide key={i} className="min-h-screen text-black">
            <Image
              src={img}
              alt="doctors"
              height={1000}
              width={1000}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
