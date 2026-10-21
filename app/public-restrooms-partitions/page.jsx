
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
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
  FileText,
  CheckCircle2,
  Building2,
  Wrench,
} from "lucide-react";
import { FaPhone } from "react-icons/fa";
import CheckoutPopup from "@/components/CheckoutPopup";

const product = {
  id: 1,
  img: "/services/1.webp",
  title: "Public Restrooms Partitions",
  desc: "Upgrade your washroom spaces with Ryka Restroom Cubicles.",
  price: 12000,
};

const specifications = [
  ["Partition Material", "HPL Compact Board"],
  ["Material", "HPL Compact Board"],
  ["Board Thickness", "12 mm"],
  [
    "Application Area",
    "Stadium, Mall, Airport, Industrial, Office, Hospital, School, Hotel",
  ],
  ["Built Type", "Modular"],
  ["Mounting Type", "Floor Mounted"],
  ["Thickness", "12MM"],
  ["Feature", "Easily Assembled"],
];

const features = [
  {
    icon: ShieldCheck,
    title: "HPL Compact Board",
    description:
      "A durable compact laminate material suitable for public and commercial restroom partition applications.",
  },
  {
    icon: Settings2,
    title: "Modular Construction",
    description:
      "A modular partition system designed for organized restroom layouts and practical assembly.",
  },
  {
    icon: Wrench,
    title: "Easy Assembly",
    description:
      "Designed for convenient assembly according to the confirmed product configuration and installation requirements.",
  },
  {
    icon: Droplets,
    title: "Water-Resistant Material",
    description:
      "HPL and compact laminate materials offer water resistance for restroom environments.",
  },
];

export default function PublicRestroomsPartitionsPage() {
  const [quantity, setQuantity] = useState(1);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const cartItem = {
    id: product.id,
    name: product.title,
    title: product.title,
    image: product.img,
    price: product.price,
    quantity,
  };

  const openCheckout = () => setCheckoutOpen(true);

  return (
    <>
      {/* Header */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#FFFAE7] px-3 py-2 shadow-md transition-all duration-300 sm:px-5 sm:py-3">
        <Link href="/" aria-label="Ryka Restroom home">
          <Image
            src="https://res.cloudinary.com/dzbkxqqo9/image/upload/v1761975029/logo-ryka_irxwux.webp"
            alt="Ryka Restroom Cubicles"
            width={180}
            height={100}
            priority
            sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
            className="h-auto w-[120px] sm:w-[150px] md:w-[180px]"
          />
        </Link>

        <a
          href="tel:+919667233007"
          aria-label="Call Ryka at +91 96672 33007"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1472B0] to-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105 sm:px-6 sm:py-3 sm:text-lg"
        >
          <FaPhone aria-hidden="true" />
          <span>+91-9667233007</span>
        </a>
      </header>

      <main className="mt-20 min-h-screen bg-[#faf9f5] text-slate-800">
        {/* Hero */}
        <section className="bg-[#10285f] text-white">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">


            <div className="mt-8 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200">
                Ryka Restroom Cubicles
              </p>

              <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                Public Restrooms Partitions
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                Upgrade your washroom spaces with Ryka Restroom Cubicles.
                Explore modular HPL compact board partitions for public,
                commercial, institutional, and industrial restroom projects.
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
                  alt="Ryka public restroom partitions made from HPL compact board"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#10285f] shadow-sm">
                  Public Restroom Solution
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
                Public Restrooms Partitions
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {product.desc} Ryka specializes in HPL board partitions
                and shower partitions in India, with a focus on design,
                practical functionality, and partition solutions for
                different project requirements.
              </p>

              {/* Price and checkout */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-sm text-slate-500">Product price</p>

                <div className="mt-1 flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#10285f]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-sm text-slate-500">/ Piece</span>
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Confirm the final dimensions, order quantity, applicable
                  taxes, transportation, and installation charges with our
                  team.
                </p>

                <div className="mt-6">
                  <label className="mb-3 block text-sm font-bold text-[#10285f]">
                    Select Quantity
                  </label>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex h-11 items-center overflow-hidden rounded-lg border border-slate-300 bg-white">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        disabled={quantity <= 1}
                        onClick={() =>
                          setQuantity((current) =>
                            Math.max(1, current - 1)
                          )
                        }
                        className="flex h-full w-11 items-center justify-center text-[#10285f] transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <Minus className="h-4 w-4" />
                      </button>

                      <span
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
                        Estimated subtotal
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
                  Submit your order details and our team will contact you
                  to confirm the requirements.
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
                Designed for Public Spaces
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Practical partition features for busy public and commercial
                restroom environments.
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
                Explore the material, thickness, mounting type, and
                application areas for Ryka Public Restrooms Partitions.
                Confirm project-specific measurements before ordering.
              </p>

              <div className="mt-6 rounded-2xl bg-[#10285f] p-6 text-white">
                <Building2 className="h-8 w-8 text-sky-200" />

                <h3 className="mt-4 text-lg font-bold">
                  Multiple Application Areas
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Suitable for partition projects in stadiums, malls,
                  airports, industrial facilities, offices, hospitals,
                  schools, and hotels.
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
                        key={label}
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
                About Ryka Restroom
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Ryka is a partner for premium HPL board partitions and
                shower partitions in India. We are dedicated to excellence
                and have a strong passion for design. Our expertise has
                been developed through partition solutions since 2014.
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <Leaf className="mt-1 h-5 w-5 shrink-0 text-[#1683c7]" />

                  <div>
                    <h3 className="font-bold text-[#10285f]">
                      Additional Information &amp; Packaging
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Toilet cubicles are made from durable, water-resistant
                      materials, including High-Pressure Laminate (HPL) and
                      compact laminate board, offering strength and
                      aesthetic options. Packaging and transportation
                      arrangements should be confirmed for the specific
                      order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#197fa8]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 text-center sm:px-8 md:flex-row md:text-left">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-2xl">
                Upgrade Your Public Restroom
              </h2>

              <p className="mt-2 text-sm text-white/85">
                Contact Ryka Restroom to discuss your partition requirements.
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
      </main>

      {/* Existing checkout popup */}
      <CheckoutPopup
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        cartItems={[cartItem]}
      />
    </>
  );
}
