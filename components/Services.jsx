
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaShoppingCart } from "react-icons/fa";
import CheckoutPopup from "./CheckoutPopup";
import Link from "next/link";

const Services = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Edit product names, images and prices here
  const servicesTop = [
    {
      id: 3,
      slug: "kids-restroom-partitions",
      img: "/services/3.webp",
      title: "Kids Restroom Partitions",
      desc: "Our Kids Restroom Partitions are specially designed for children.",
      price: 17000,
    },
    {
      id: 4,
      slug: "urinal-partitions",
      img: "/services/4.webp",
      title: "Urinal Partitions",
      desc: "Ensuring privacy and hygiene in public restrooms.",
      price: 2850,
    },
    {
      id: 5,
      img: "/services/5.webp",
      slug: "premium-finish",
      title: "Premium Finish",
      desc: "Elegant, durable finishes for modern commercial restrooms.",
      price: 12500 ,
    },
  ];

  const servicesBottom = [
    {
      id: 1,
      img: "/services/1.webp",
      title: "Public Restrooms Partitions",
      slug: "public-restrooms-partitions",
      desc: "Upgrade your washroom spaces with Ryka Restroom Cubicles.",
      price: 12000,
    },
    {
      id: 2,
      img: "/services/2.webp",
      slug: "luxe-partition-systems",
      title: "Luxe Partition Systems",
      desc: "Discover the perfect blend of luxury and functionality.",
      price: 18000,
    },
  ];

  const allServices = [...servicesBottom, ...servicesTop];

  const handleBuyNow = (service) => {
    setSelectedProduct({
      id: service.id,
      name: service.title,
      title: service.title,
      image: service.img,
      price: service.price,
      quantity: 1,
    });
  };

  const closeCheckout = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {/* INTRO SECTION */}
      <section className="bg-[#FFFBEC] px-4">
        <h2 className="pt-10 pb-3 text-center text-2xl font-extrabold text-gray-900 md:pt-14 md:pb-0 md:text-5xl">
          Explore Our Most Trusted Cubicle Solutions
        </h2>

        <p className="mx-auto hidden max-w-3xl py-6 text-center text-lg tracking-wide text-gray-700 md:block">
          Choose from high-quality, water-resistant toilet cubicle
          partitions designed for commercial spaces like malls,
          offices, schools, and institutions. Tailored to your
          space — delivered across India.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#FAF7F2] py-8 md:py-14">
        <div className="mx-auto max-w-7xl px-4">
          {/* MOBILE SLIDER */}
          <div className="block md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              speed={400}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              className="services-swiper !pb-10"
            >
              {allServices.map((service) => (
                <SwiperSlide key={service.id}>
                  <Card
                    {...service}
                    onBuyNow={() => handleBuyNow(service)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-8">
              {servicesBottom.map((service) => (
                <Card
                  key={service.id}
                  {...service}
                  large
                  onBuyNow={() => handleBuyNow(service)}
                />
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-8">
              {servicesTop.map((service) => (
                <Card
                  key={service.id}
                  {...service}
                  onBuyNow={() => handleBuyNow(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHECKOUT POPUP */}
      <CheckoutPopup
        isOpen={Boolean(selectedProduct)}
        onClose={closeCheckout}
        cartItems={selectedProduct ? [selectedProduct] : []}
      />

      {/* SWIPER DOTS */}
      <style jsx global>{`
        .services-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .services-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          opacity: 0.5;
        }

        .services-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 10px;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

/* SERVICE CARD */
function Card({slug, img, title, desc, price, large, onBuyNow }) {
  return (
    <Link
      href={`/${slug}`}
      className={`h-full overflow-hidden rounded-2xl border-2 border-stone-600 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-b hover:from-white hover:to-[#f9fafb] hover:shadow-xl ${
        large ? "sm:col-span-1" : ""
      }`}
    >
      {/* IMAGE */}
      <div className="relative h-52 w-full overflow-hidden md:h-64">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mb-3 text-base text-gray-600">{desc}</p>

        {/* PRODUCT PRICE */}
        <p className="mb-4 text-lg font-bold text-[#10285f]">
          ₹{Number(price).toLocaleString("en-IN")}
        </p>

        {/* BUY NOW */}
        
<button
  type="button"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    onBuyNow();
  }}
  className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#1279AF] px-6 py-3 font-medium text-white transition hover:bg-[#10285f]"
>
  Buy Now <FaShoppingCart />
</button>

      </div>
    </Link>
  );
}

export default Services;
