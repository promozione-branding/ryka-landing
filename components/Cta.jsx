"use client";
import { useState } from "react";
import PopupForm from "./Popup";

const Cta = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
      <section className="bg-[#1678AE]">
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-8 gap-4 md:gap-0">
          <p className="text-white font-bold text-center md:text-left text-lg md:text-3xl max-w-2xl leading-snug">
            Want to know more about our cubicles? Fill out the form for complete
            product details.
          </p>

          <button onClick={() => setIsFormOpen(true)}

            className="bg-[#E7000B] cursor-pointer text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition duration-300  text-lg"
          >
            Connect With Us
          </button>
        </div>
      </section>

      
<section className="bg-black">
  <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-6 gap-4 md:gap-6">
    <p className="text-white text-sm text-center md:text-left max-w-2xl leading-snug">
      Copyright © 2025 Ryka Restroom Cubicles. All Rights Reserved.
    </p>

    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
      <a
        href="/privacy-policy"
        className="text-white underline underline-offset-4 hover:text-sky-300 transition"
      >
        Privacy Policy
      </a>

      <span className="text-gray-500">|</span>

      <a
        href="/shipping-policy"
        className="text-white underline underline-offset-4 hover:text-sky-300 transition"
      >
        Shipping Policy
      </a>

      <span className="text-gray-500">|</span>

      <a
        href="/refund-return-policy"
        className="text-white underline underline-offset-4 hover:text-sky-300 transition"
      >
        Refund &amp; Return Policy
      </a>
    </div>

    <a
      href="https://inquirybazaar.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-sm text-center hover:text-sky-300 transition"
    >
      Developed &amp; Managed by{" "}
      <span className="underline underline-offset-4">
        Inquiry Bazaar Pvt Ltd.
      </span>
    </a>
  </div>
</section>

      <PopupForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

    </>
  );
};

export default Cta;
