"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import PopupForm from "@/components/Popup";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const servicesTop = [
    {
      img: "/services/3.webp",
      title: "Kids Restroom Partitions",
      desc: "Our Kids Restroom Partitions are specially designed for children.",
    },
    {
      img: "/services/4.webp",
      title: "Urinal Partitions",
      desc: "Ensuring privacy and hygiene in public restrooms.",
    },
    {
      img: "/services/5.webp",
      title: "Premium Finish",
      desc: "Elegant, durable finishes for modern commercial restrooms.",
    },
  ];

  const servicesBottom = [
    {
      img: "/services/1.webp",
      title: "Public Restrooms Partitions",
      desc: "Upgrade your washroom spaces with Ryka Restroom Cubicles.",
    },
    {
      img: "/services/2.webp",
      title: "Luxe Partition Systems",
      desc: "Discover perfect blend of luxury & functionality with Luxe Partition.",
    },
  ];

  // All services for mobile slider
  const allServices = [...servicesBottom, ...servicesTop];

  return (
    <>
      {/* ================= INTRO SECTION ================= */}
      <section className="bg-[#FFFBEC] px-4">
        <h2 className="font-extrabold text-center pb-3 md:pb-0 pt-10 md:pt-14 text-2xl md:text-5xl text-gray-900">
          Explore Our Most Trusted Cubicle Solutions
        </h2>

        <p className="hidden md:block text-center py-6 text-lg text-gray-700 tracking-wide max-w-3xl mx-auto">
          Choose from high-quality, water-resistant toilet cubicle partitions
          designed for commercial spaces like malls, offices, schools, and
          institutions. Tailored to your space — delivered across India.
        </p>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="bg-[#FAF7F2] py-8 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          {/* ================= MOBILE SLIDER ================= */}
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
              pagination={{
                clickable: true,
              }}
              className="services-swiper !pb-10"
            >
              {allServices.map((service, idx) => (
                <SwiperSlide key={idx}>
                  <Card {...service} onClick={() => setIsFormOpen(true)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ================= DESKTOP LAYOUT ================= */}
          <div className="hidden md:block">
            {/* LARGE CARDS */}
            <div className="grid grid-cols-2 gap-8">
              {servicesBottom.map((service, idx) => (
                <Card
                  key={idx}
                  {...service}
                  large
                  onClick={() => setIsFormOpen(true)}
                />
              ))}
            </div>

            {/* TOP CARDS */}
            <div className="grid grid-cols-3 gap-8 mt-8">
              {servicesTop.map((service, idx) => (
                <Card
                  key={idx}
                  {...service}
                  onClick={() => setIsFormOpen(true)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPUP FORM ================= */}
      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* ================= SWIPER DOTS ================= */}
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

/* =========================================================
   CARD COMPONENT
========================================================= */

function Card({ img, title, desc, large, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`
        cursor-pointer
        border-2
        border-stone-600
        rounded-2xl
        shadow-md
        overflow-hidden
        transform
        transition-all
        duration-300
        hover:shadow-xl
        hover:-translate-y-2
        hover:bg-gradient-to-b
        hover:from-white
        hover:to-[#f9fafb]
        bg-white
        h-full
        ${large ? "sm:col-span-1" : ""}
      `}
    >
      {/* IMAGE */}
      <div className="relative w-full h-52 md:h-64 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>

        <p className="text-gray-600 text-base mb-4">{desc}</p>

        {/* ENQUIRY BUTTON */}
        <a
          href="tel:+919667233007"
          onClick={(e) => {
            // Prevent card click from opening popup
            e.stopPropagation();
          }}
          className="
            inline-block
            bg-[#1279AF]
            text-white
            px-6
            py-2
            rounded-lg
            font-medium
            hover:opacity-90
            transition
          "
        >
          Enquiry Now
        </a>
      </div>
    </div>
  );
}

export default Services;
