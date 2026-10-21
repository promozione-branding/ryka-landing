
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Leaf,
  Droplets,
  Ruler,
  ArrowRight,
  Minus,
  Plus,
  Truck,
  Settings2,
  ChevronRight,
} from "lucide-react";
import CheckoutPopup from "@/components/CheckoutPopup";
import { FaPhone } from "react-icons/fa";

const product = {
  id: 3,
  img: "/services/3.webp",
  title: "Kids Restroom Partitions",
  desc: "Our Kids Restroom Partitions are specially designed for children.",
  price: 17000,
};

const specifications = [
  ["Partition Material", "HPL Compact Board"],
  ["Material", "HPL Compact Board"],
  ["Board Thickness", "12 mm"],
  ["Application Area", "School"],
  ["Built Type", "Modular"],
  ["Hardware Material", "Stainless Steel"],
  ["Mounting Type", "Floor Mounted"],
  ["Surface Finish", "Matt"],
  ["Thickness", "12MM"],
  ["Color", "Multi Color"],
  ["Feature", "Eco Friendly"],
  ["Door Type", "Swing Door"],
];

const features = [
  {
    icon: ShieldCheck,
    title: "Durable HPL Board",
    description:
      "Made using HPL compact board for a durable, practical restroom partition solution.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Feature",
    description:
      "Designed with an eco-friendly product feature for school and child-focused environments.",
  },
  {
    icon: Droplets,
    title: "Water-Resistant Material",
    description:
      "HPL and compact laminate materials offer water resistance and are suitable for restroom applications.",
  },
  {
    icon: Settings2,
    title: "Modular Construction",
    description:
      "A modular partition system with stainless steel hardware and floor-mounted installation.",
  },
];

export default function KidsRestroomPartitionsPage() {
  const [quantity, setQuantity] = useState(1);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const openCheckout = () => {
    setCheckoutOpen(true);
  };

  const cartItem = {
    id: product.id,
    name: product.title,
    title: product.title,
    image: product.img,
    price: product.price,
    quantity,
  };

  return (

    <>
    <header
            className={`fixed top-0 left-0 z-50 w-full flex items-center justify-between px-3 py-2 sm:px-5 sm:py-3 transition-all duration-300  bg-[#FFFAE7] shadow-md
            }`}
          >
            <Image
              src={
                
                  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975029/logo-ryka_irxwux.webp"
                  // : "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975030/logo-ryka2_h5hqog.webp"
              }
              alt="Ryka Restroom Cubicles"
              width={180}
              height={100}
              priority
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
              className="h-auto w-[120px] sm:w-[150px] md:w-[180px]"
            />
    
            <a
              href="tel:+919667233007"
              aria-label="Call Ryka at +91 9667233007"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1472B0] to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:px-6 sm:py-3 sm:text-lg"
            >
              <FaPhone aria-hidden="true" />
              <span>+91-9667233007</span>
            </a>
          </header>
    <main className="min-h-screen bg-[#faf9f5] mt-20 text-slate-800">
      {/* Hero */}
      <section className="bg-[#10285f] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          

          <div className="mt-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200">
              Ryka Restroom Cubicles
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Kids Restroom Partitions
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
              Colorful, modular restroom partition solutions designed for
              child-focused spaces, including schools. Made with HPL compact
              board and stainless steel hardware.
            </p>
          </div>
        </div>
      </section>

      {/* Product details */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product image */}
          <div className="min-w-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image
                src={product.img}
                alt="Kids restroom partitions made from HPL compact board"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#10285f] shadow-sm">
                School Restroom Solution
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                <ShieldCheck className="mx-auto h-5 w-5 text-[#1683c7]" />
                <p className="mt-2 text-xs font-semibold text-[#10285f]">
                  HPL Board
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                <Ruler className="mx-auto h-5 w-5 text-[#1683c7]" />
                <p className="mt-2 text-xs font-semibold text-[#10285f]">
                  12 mm Thickness
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center">
                <Settings2 className="mx-auto h-5 w-5 text-[#1683c7]" />
                <p className="mt-2 text-xs font-semibold text-[#10285f]">
                  Modular Type
                </p>
              </div>
            </div>
          </div>

          {/* Product information */}
          <div className="flex flex-col">
            <p className="text-sm font-bold uppercase tracking-wider text-[#1683c7]">
              Our Product
            </p>

            <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#10285f] sm:text-3xl">
              Kids Restroom Partitions
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {product.desc} Ryka Restroom provides partition solutions
              designed around practical requirements, durable materials, and
              attractive finishes for modern restroom spaces.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-sm text-slate-500">Product price</p>
              <div className="mt-1 flex flex-wrap items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#10285f]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-slate-500">
                  Price per unit as listed
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Confirm final dimensions, quantity, installation requirements,
                transportation, and applicable charges with our team.
              </p>

              <div className="mt-6">
                <label
                  htmlFor="product-quantity"
                  className="mb-3 block text-sm font-bold text-[#10285f]"
                >
                  Select Quantity
                </label>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex h-11 items-center overflow-hidden rounded-lg border border-slate-300 bg-white">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      disabled={quantity <= 1}
                      onClick={() =>
                        setQuantity((current) => Math.max(1, current - 1))
                      }
                      className="flex h-full w-11 items-center justify-center text-[#10285f] transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span
                      id="product-quantity"
                      aria-live="polite"
                      className="min-w-10 text-center text-sm font-bold"
                    >
                      {quantity}
                    </span>

                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() =>
                        setQuantity((current) => current + 1)
                      }
                      className="flex h-full w-11 items-center justify-center text-[#10285f] transition hover:bg-slate-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Estimated product subtotal
                    </p>
                    <p className="text-lg font-bold text-[#10285f]">
                      ₹{(product.price * quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={openCheckout}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#1683c7] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#10285f]"
              >
                Buy Now
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Submit your order details and our team will contact you to
                confirm the requirements.
              </p>
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#d6eaf3] bg-[#f0f8fb] p-4">
              <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[#1683c7]" />
              <div>
                <h3 className="text-sm font-bold text-[#10285f]">
                  Delivery and project requirements
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Manufacturing schedules, transportation, and final order
                  terms are confirmed based on your project requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1683c7]">
              Product Highlights
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#10285f] sm:text-3xl">
              Designed for Everyday Use
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Practical material and construction features for school
              restroom partition projects.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-slate-200 bg-[#fafcfd] p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f4f8]">
                    <Icon className="h-5 w-5 text-[#1683c7]" />
                  </div>
                  <h3 className="mt-4 font-bold text-[#10285f]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1683c7]">
              Technical Details
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#10285f] sm:text-3xl">
              Product Specifications
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Review the listed specifications for Kids Restroom Partitions.
              Please confirm project-specific measurements and requirements
              with our team before ordering.
            </p>

            <div className="mt-6 rounded-2xl bg-[#10285f] p-6 text-white">
              <ShieldCheck className="h-8 w-8 text-sky-200" />
              <h3 className="mt-4 text-lg font-bold">
                A Reliable Partition Partner
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Ryka specializes in HPL board toilet cubicles and shower
                partitions, with experience in partition solutions since
                2014, as stated in our company information.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-[#10285f] px-5 py-4">
              <h3 className="font-bold text-white">
                Technical Specification Table
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <tbody>
                  {specifications.map(([label, value], index) => (
                    <tr
                      key={`${label}-${index}`}
                      className={
                        index % 2 === 0 ? "bg-[#f5f9fb]" : "bg-white"
                      }
                    >
                      <th className="w-1/2 border-b border-slate-200 px-4 py-3.5 font-semibold text-[#10285f] sm:px-5">
                        {label}
                      </th>
                      <td className="border-b border-slate-200 px-4 py-3.5 text-slate-600 sm:px-5">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Additional information */}
      <section className="bg-[#f1f0eb]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1683c7]">
              More About This Product
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#10285f] sm:text-3xl">
              Additional Information
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Ryka Restroom is a partner for HPL board toilet cubicles and
              shower partitions in India. We focus on design and practical
              partition solutions for different project requirements.
            </p>

            <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="font-bold text-[#10285f]">
                Packaging Details
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Toilet cubicles are made from durable, water-resistant
                materials, including High-Pressure Laminate (HPL) and compact
                laminate board, offering strength and aesthetic options.
                Packaging and transportation arrangements should be confirmed
                with our team for the specific order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#197fa8]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 text-center sm:px-8 md:flex-row md:text-left">
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Ready to enquire about Kids Restroom Partitions?
            </h2>
            <p className="mt-2 text-sm text-white/85">
              Submit your product order details to get started with Ryka
              Restroom.
            </p>
          </div>

          <button
            type="button"
            onClick={openCheckout}
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-700"
          >
            Buy Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Checkout popup */}
      <CheckoutPopup
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={[cartItem]}
      />
    </main>
    </>
  );
}
