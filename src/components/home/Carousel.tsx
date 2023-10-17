import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { doctors_images } from "@/assets/images/doctors";

const Carousel = () => {
  return (
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
        <SwiperSlide key={i} className="text-black dark:text-white">
          <Image
            src={img}
            alt="doctor"
            height={800}
            width={1000}
            className="min-h-screen min-w-full max-h-[700px] md:max-h-[500px]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
