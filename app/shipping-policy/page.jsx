
import Link from "next/link";
import {
  Truck,
  PackageCheck,
  MapPin,
  Clock,
  Wallet,
  Radio,
  Warehouse,
  ClipboardCheck,
  CloudRain,
  MapPinned,
  RefreshCw,
  ShieldCheck,
  Phone,
  Mail,
  ChevronRight,
  FileText,
  Headset,
} from "lucide-react";
import Cta from "@/components/Cta";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";

const sections = [
  { id: "order-processing", title: "Order Processing", icon: PackageCheck },
  { id: "shipping-coverage", title: "Shipping Coverage", icon: MapPin },
  { id: "delivery-time", title: "Estimated Delivery Time", icon: Clock },
  { id: "shipping-charges", title: "Shipping Charges", icon: Wallet },
  { id: "tracking-updates", title: "Order Tracking and Updates", icon: Radio },
  { id: "site-readiness", title: "Delivery and Site Readiness", icon: Warehouse },
  { id: "delivery-inspection", title: "Inspection Upon Delivery", icon: ClipboardCheck },
  { id: "delivery-delays", title: "Delivery Delays", icon: CloudRain },
  { id: "failed-delivery", title: "Incorrect Address or Failed Delivery", icon: MapPinned },
  { id: "shipping-changes", title: "Changes to Shipping Arrangements", icon: RefreshCw },
];

function SectionHeading({ number, title, id }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f8] text-sm font-bold text-[#197ba4]">
        {number}
      </span>
      <h2
        id={id}
        className="scroll-mt-28 pt-1 text-xl font-bold tracking-tight text-[#10285f] sm:text-2xl"
      >
        {title}
      </h2>
    </div>
  );
}

function PolicySection({ number, title, id, children }) {
  return (
    <section className="scroll-mt-28 border-b border-slate-100 py-8 last:border-0 sm:py-10">
      <SectionHeading number={number} title={title} id={id} />
      <div className="pl-0 text-sm leading-5 text-slate-600 sm:pl-14 sm:text-[15px] sm:leading-8">
        {children}
      </div>
    </section>
  );
}

export default function ShippingPolicyPage() {
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
    <main className="min-h-screen bg-[#faf9f5] text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#10285f]">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#1683c7]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#1683c7]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-13 mt-20">
          <div className="mx-auto max-w-3xl text-center">
          

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-200">
              Ryka Restroom Cubicles
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Shipping Policy
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-5 text-slate-200 sm:text-base">
              Information about order processing, manufacturing timelines,
              transportation, delivery, and receiving your restroom cubicles
              and partition products.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90 sm:text-sm">
              <PackageCheck className="h-4 w-4 text-sky-200" />
              From our facility to your project
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-5 py-4 text-xs text-slate-500 sm:px-8 sm:text-sm">
          <Link href="/" className="transition hover:text-[#1683c7]">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-[#10285f]">
            Shipping Policy
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-[#10285f] px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-200">
                Delivery Information
              </p>
              <h2 className="mt-1 text-lg font-bold text-white">
                On This Page
              </h2>
            </div>

            <nav className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-2 lg:grid-cols-1">
              {sections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-[#edf6fa] hover:text-[#147ba7]"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-[#1683c7]" />
                    <span className="min-w-0 flex-1">{section.title}</span>
                    <span className="text-[11px] text-slate-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                );
              })}
            </nav>

            <div className="border-t border-slate-100 bg-[#faf9f5] p-5">
              <p className="text-sm font-semibold text-[#10285f]">
                Need a delivery update?
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Contact our team with your order or quotation reference.
              </p>
              
            </div>
          </div>
        </aside>

        {/* Policy article */}
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8 lg:px-10">
          {/* Intro */}
          <div className="border-b border-slate-100 py-7 sm:py-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f8]">
                <Truck className="h-5 w-5 text-[#1683c7]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#10285f]">
                  Our Shipping Commitment
                </h2>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  At Ryka Restroom, we understand that reliable delivery is
                  an important part of every project. We coordinate order
                  processing and transportation based on the confirmed
                  requirements and keep customers informed of relevant
                  delivery arrangements.
                </p>
                <p className="mt-3 text-sm leading-5 text-slate-600">
                  Every order is coordinated according to its product
                  specifications, manufacturing requirements, and delivery
                  destination.
                </p>
              </div>
            </div>
          </div>

          <PolicySection
            number="01"
            title="Order Processing"
            id="order-processing"
          >
            <p className="leading-6">
              Orders are processed after confirmation of the purchase order,
              product specifications, quantities, payment terms, and other
              applicable requirements.
            </p>
            <p className="leading-6" >
              Processing time may vary depending on product availability,
              customization, manufacturing schedules, and project
              requirements. Our team will communicate the expected dispatch
              timeline wherever applicable.
            </p>
          </PolicySection>

          <PolicySection
            number="02"
            title="Shipping Coverage"
            id="shipping-coverage"
          >
            <p className="leading-6">
              Ryka Restroom supplies toilet cubicles, restroom partitions,
              and related products to customers at serviceable locations in
              India.
            </p>
            <p className="mt-3">
              Shipping availability depends on the delivery address, product
              dimensions, order quantity, transportation arrangements, and
              site accessibility. Please contact our team to confirm
              delivery feasibility for your location.
            </p>
          </PolicySection>

          <PolicySection
            number="03"
            title="Estimated Delivery Time"
            id="delivery-time"
          >
            <p className="leading-6">
              Delivery timelines depend on manufacturing requirements, order
              volume, destination, transport availability, and site
              conditions. Customized or bulk orders may require additional
              production and transportation time.
            </p>
            <p className="leading-6">
              Any delivery estimate shared during ordering is indicative
              unless a specific timeline has been confirmed in writing.
            </p>
          </PolicySection>

          <PolicySection
            number="04"
            title="Shipping Charges"
            id="shipping-charges"
          >
            <p className="leading-6">
              Shipping, freight, handling, unloading, and other
              transportation-related charges will be communicated during the
              quotation or order confirmation process, wherever applicable.
            </p>
            <p className=" leading-6">
              Charges may vary depending on shipment size, weight,
              destination, delivery method, and special handling requirements.
              Customers should review the agreed quotation or purchase order
              for the applicable terms.
            </p>
          </PolicySection>

          <PolicySection
            number="05"
            title="Order Tracking and Updates"
            id="tracking-updates"
          >
            <p className="leading-6">
              Where shipment tracking or transport details are available,
              our team may share the relevant information with the customer.
            </p>
            <p className=" leading-6">
              For project-based or bulk deliveries, customers may contact us
              to obtain an update on manufacturing progress, dispatch status,
              and estimated arrival.
            </p>
          </PolicySection>

          <PolicySection
            number="06"
            title="Delivery and Site Readiness"
            id="site-readiness"
          >
            <p className="leading-6">
              Customers should ensure that the delivery site is accessible
              and ready to receive the shipment. Adequate arrangements should
              be made for unloading, safe storage, and movement of the
              products to the intended installation area.
            </p>
            <p className=" leading-6">
              Any special access restrictions, delivery time windows, or
              unloading requirements should be communicated before dispatch.
            </p>
          </PolicySection>

          <PolicySection
            number="07"
            title="Inspection Upon Delivery"
            id="delivery-inspection"
          >
            <p className="leading-6">
              Customers are encouraged to inspect the shipment upon delivery
              and verify the quantities and visible condition of the products
              against the relevant delivery documents.
            </p>
            <p className=" leading-6">
              Any visible damage, shortage, or incorrect item should be
              documented, preferably with photographs, and reported to our
              team promptly. Please retain the packaging and delivery
              records where possible to help us review the issue.
            </p>
          </PolicySection>

          <PolicySection
            number="08"
            title="Delivery Delays"
            id="delivery-delays"
          >
            <p className="leading-6">
              Delivery may be affected by manufacturing delays,
              transportation disruptions, weather conditions, site access
              restrictions, public holidays, or other circumstances beyond
              our reasonable control.
            </p>
            <p className=" leading-6">
              If a significant delay occurs, we will make reasonable efforts
              to communicate relevant updates. The applicable order
              agreement will govern any remedies or revised delivery
              commitments.
            </p>
          </PolicySection>

          <PolicySection
            number="09"
            title="Incorrect Address or Failed Delivery"
            id="failed-delivery"
          >
            <p className="leading-6">
              Customers are responsible for providing an accurate delivery
              address, contact number, and any necessary site instructions.
            </p>
            <p className=" leading-6">
              If delivery cannot be completed because of incorrect details,
              unavailable recipients, restricted site access, or other
              customer-related circumstances, additional transportation or
              redelivery charges may apply where permitted by the agreed
              order terms and applicable law.
            </p>
          </PolicySection>

          <PolicySection
            number="10"
            title="Changes to Shipping Arrangements"
            id="shipping-changes"
          >
            <p className="leading-6">
              Requests to change the delivery address, delivery schedule,
              quantities, or transportation arrangements should be
              submitted as early as possible.
            </p>
            <p className=" leading-6">
              Changes requested after manufacturing, packing, or dispatch
              may affect delivery timelines and costs. Such requests will
              be subject to feasibility and written confirmation by our
              team.
            </p>
          </PolicySection>

          {/* Contact card */}
          <div className="mb-8 mt-8 overflow-hidden rounded-2xl border border-slate-200 sm:mb-10">
            <div className="bg-[#10285f] px-5 py-6 sm:px-7">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-white/10 p-2.5">
                  <Headset className="h-6 w-6 text-sky-200" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-200">
                    We Are Here to Help
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    Planning your next project?
                  </h2>
                  <p className="mt-3 text-sm leading-5 text-slate-200">
                    Contact Ryka Restroom to discuss product availability,
                    project requirements, transportation arrangements, and
                    estimated delivery timelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f8fbfc] p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="rounded-lg bg-[#e8f4f8] p-2">
                    <Phone className="h-4 w-4 text-[#1683c7]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Call Us
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#10285f]">
                      +91 96672 33007
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="rounded-lg bg-[#e8f4f8] p-2">
                    <Mail className="h-4 w-4 text-[#1683c7]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email Us
                    </p>
                    <a
                      href="mailto:rykarestroomcubicle@gmail.com"
                      className="mt-1 break-all text-sm font-bold text-[#10285f] hover:text-[#1683c7]"
                    >
                      rykarestroomcubicle@gmail.com
                    </a>
                  </div>
                </div>
              </div>

             
            </div>
          </div>

          {/* Important note */}
          <div className="mb-8 rounded-xl border border-[#d6eaf3] bg-[#f0f8fb] p-5 sm:mb-10 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1683c7]" />
              <div>
                <h3 className="font-bold text-[#10285f]">
                  Important Information
                </h3>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  This Shipping Policy should be read together with the
                  applicable quotation, purchase order, delivery terms, and
                  other written agreements. In the event of a conflict, the
                  applicable agreed terms and mandatory legal requirements
                  will govern.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Bottom CTA */}
      <Cta/>
    </main>
    </>
  );
}
