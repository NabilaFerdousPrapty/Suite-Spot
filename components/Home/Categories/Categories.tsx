"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Correct import for modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoriesData";

const Categories = () => {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={5}
        //  navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 12 },
          768: { slidesPerView: 9 },
          480: { slidesPerView: 6 },
          0: { slidesPerView: 6 },
        }}
      >
        {categories?.map((item) => (
          <SwiperSlide className='py-8' key={item.label}>
            <CategoryBox label={item?.label} icon={item?.icon} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Categories;
