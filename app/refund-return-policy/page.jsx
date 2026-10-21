
import Link from "next/link";
import {
  RotateCcw,
  ClipboardCheck,
  Package,
  ShieldCheck,
  Camera,
  CheckCircle2,
  Wallet,
  Wrench,
  Truck,
  Ban,
  Phone,
  Mail,
  ChevronRight,
  FileText,
  Headset,
} from "lucide-react";
import Cta from "@/components/Cta";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";

const policySections = [
  { id: "order-cancellation", title: "Order Cancellation", icon: ClipboardCheck },
  { id: "customized-products", title: "Customized Products", icon: Package },
  { id: "damaged-defective", title: "Damaged or Defective Products", icon: Camera },
  { id: "return-eligibility", title: "Return Eligibility", icon: CheckCircle2 },
  { id: "refund-process", title: "Refund Process", icon: Wallet },
  { id: "replacement-rectification", title: "Replacement or Rectification", icon: Wrench },
  { id: "shipping-costs", title: "Shipping and Return Costs", icon: Truck },
  { id: "non-returnable", title: "Non-Returnable Situations", icon: Ban },
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
      <div className="pl-0 text-sm leading-5 text-slate-600 sm:pl-14 sm:text-[15px] sm:leading-5">
        {children}
      </div>
    </section>
  );
}

export default function RefundReturnPolicyPage() {
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

        <div className="relative mx-auto max-w-7xl px-5 py-14 mt-20 sm:px-8 sm:py-13">
          <div className="mx-auto max-w-3xl text-center">
        
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-200">
              Ryka Restroom Cubicles
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Refund &amp; Return Policy
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-5 text-slate-200 sm:text-base">
              Our approach to cancellations, returns, replacements, and
              refunds for toilet cubicles, restroom partitions, and related
              products.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90 sm:text-sm">
              <ShieldCheck className="h-4 w-4 text-sky-200" />
              Clear terms. Reliable service.
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
            Refund &amp; Return Policy
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
                Customer Information
              </p>
              <h2 className="mt-1 text-lg font-bold text-white">
                On This Page
              </h2>
            </div>

            <nav className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-2 lg:grid-cols-1">
              {policySections.map((section, index) => {
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
                Need assistance?
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Contact our team with your order details so we can review
                your request.
              </p>
            
            </div>
          </div>
        </aside>

        {/* Policy details */}
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8 lg:px-10">
          {/* Intro */}
          <div className="border-b border-slate-100 py-7 sm:py-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f8]">
                <FileText className="h-5 w-5 text-[#1683c7]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#10285f]">
                  Our Commitment
                </h2>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  At Ryka Restroom, we aim to supply products that meet the
                  specifications agreed upon with our customers. If an
                  order-related issue arises, please contact us promptly so
                  we can review the matter and work toward an appropriate
                  resolution.
                </p>
                <p className="mt-3 text-sm leading-5 text-slate-600">
                  Please review this policy before placing an order or
                  requesting a return.
                </p>
              </div>
            </div>
          </div>

          <PolicySection
            number="01"
            title="Order Cancellation"
            id="order-cancellation"
          >
            <p>
              Customers are requested to review their order details, product
              specifications, dimensions, finishes, and quantities before
              confirming an order. Cancellation requests must be submitted
              in writing as soon as possible.
            </p>
            <p className="mt-3">
              Orders that have already entered production, have been
              customized, or have been dispatched may not be eligible for
              cancellation.
            </p>
          </PolicySection>

          <PolicySection
            number="02"
            title="Customized Products"
            id="customized-products"
          >
            <p>
              Toilet cubicles, restroom partitions, and related products may
              be manufactured according to specific project requirements,
              measurements, colors, materials, and designs.
            </p>
            <p className="mt-3">
              Customized or made-to-order products are generally not eligible
              for return or refund unless they are defective, damaged in
              transit, incorrectly supplied, or otherwise covered by an
              applicable agreement or law.
            </p>
          </PolicySection>

          <PolicySection
            number="03"
            title="Damaged or Defective Products"
            id="damaged-defective"
          >
            <p>
              If your order arrives damaged, defective, or different from
              the confirmed specifications, please notify us promptly after
              delivery.
            </p>

            <p className="mt-3">
              To help us review your claim, please provide:
            </p>

            <ul className="mt-4 space-y-3">
              {[
                "Your order or invoice details.",
                "A clear description of the issue.",
                "Clear photographs of the affected products and packaging.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#1683c7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4">
              We will review the claim and determine an appropriate
              resolution in accordance with the agreed order terms and
              applicable law.
            </p>
          </PolicySection>

          <PolicySection
            number="04"
            title="Return Eligibility"
            id="return-eligibility"
          >
            <p>
              A return must be approved by our team before the goods are
              sent back. Products should remain unused and in their original
              condition unless the return relates to damage or a
              manufacturing defect.
            </p>
            <p className="mt-3">
              Installed, altered, mishandled, or incorrectly stored products
              may require additional inspection before a claim can be
              accepted.
            </p>
          </PolicySection>

          <PolicySection
            number="05"
            title="Refund Process"
            id="refund-process"
          >
            <p>
              Once an eligible refund is approved, we will communicate the
              refund amount and the applicable processing procedure.
            </p>
            <p className="mt-3">
              Refunds will generally be issued through the original payment
              method where feasible, or through another mutually agreed
              method. Processing times may depend on the payment provider,
              bank, and the circumstances of the transaction.
            </p>
          </PolicySection>

          <PolicySection
            number="06"
            title="Replacement or Rectification"
            id="replacement-rectification"
          >
            <p>
              Where a verified product issue is covered by the order
              agreement or applicable law, we may arrange a replacement,
              repair, rectification, or refund as appropriate.
            </p>
            <p className="mt-3">
              The available resolution will depend on the nature of the
              issue, product availability, contractual terms, and applicable
              legal requirements.
            </p>
          </PolicySection>

          <PolicySection
            number="07"
            title="Shipping and Return Costs"
            id="shipping-costs"
          >
            <p>
              Responsibility for transportation, collection, and return
              shipping costs will be assessed based on the reason for the
              return, the agreed order terms, and applicable law.
            </p>
            <p className="mt-3">
              Customers should obtain written authorization and shipping
              instructions from our team before returning any products.
            </p>
          </PolicySection>

          <PolicySection
            number="08"
            title="Non-Returnable Situations"
            id="non-returnable"
          >
            <p>
              Returns may not be accepted for products manufactured
              correctly according to approved customer specifications,
              products damaged through improper handling or installation,
              or products altered after delivery.
            </p>
            <p className="mt-3">
              These conditions are subject to applicable consumer protection
              laws and any written warranty or order agreement.
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
                    Have a question about your order?
                  </h2>
                  <p className="mt-3 text-sm leading-5 text-slate-200">
                    Contact Ryka Restroom with your invoice number, delivery
                    details, and a description of the issue. Our team will
                    review your request and explain the next steps.
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

          {/* Legal note */}
          <div className="mb-8 rounded-xl border border-[#d6eaf3] bg-[#f0f8fb] p-5 sm:mb-10 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1683c7]" />
              <div>
                <h3 className="font-bold text-[#10285f]">
                  Important Information
                </h3>
                <p className="mt-2 text-sm leading-5 text-slate-600">
                  This policy should be read together with any quotation,
                  purchase order, warranty, or written agreement applicable
                  to your transaction. Nothing in this policy limits rights
                  that cannot legally be excluded under applicable law.
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
