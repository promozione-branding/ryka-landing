
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  LockKeyhole,
  Cookie,
  Users,
  Database,
  UserCheck,
  ExternalLink,
  Baby,
  RefreshCw,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import Cta from "@/components/Cta";

const sections = [
  { id: "introduction", title: "Introduction", icon: FileText },
  { id: "information-we-collect", title: "Information We Collect", icon: Users },
  { id: "how-we-use-information", title: "How We Use Your Information", icon: UserCheck },
  { id: "cookies", title: "Cookies & Similar Technologies", icon: Cookie },
  { id: "sharing-information", title: "Sharing of Information", icon: Users },
  { id: "data-security", title: "Data Security", icon: LockKeyhole },
  { id: "data-retention", title: "Data Retention", icon: Database },
  { id: "privacy-rights", title: "Your Privacy Rights", icon: ShieldCheck },
  { id: "third-party-websites", title: "Third-Party Websites", icon: ExternalLink },
  { id: "childrens-privacy", title: "Children's Privacy", icon: Baby },
  { id: "policy-changes", title: "Changes to This Policy", icon: RefreshCw },
  { id: "contact-us", title: "Contact Us", icon: Mail },
];

const informationTypes = [
  {
    title: "Personal Information",
    description:
      "Your name, email address, phone number, company name, and other details you provide through enquiry forms or contact requests.",
  },
  {
    title: "Project Information",
    description:
      "Product preferences, installation requirements, project specifications, and details submitted when requesting a quotation.",
  },
  {
    title: "Technical Information",
    description:
      "Your IP address, browser type, device information, pages visited, and general website usage data, where collected.",
  },
  {
    title: "Communication Information",
    description:
      "Messages, feedback, and other information you share when contacting the Ryka Restroom team.",
  },
];

const usageItems = [
  "Respond to enquiries and quotation requests.",
  "Provide product details, specifications, pricing, and project-related assistance.",
  "Communicate with you about our products and services.",
  "Improve our website, user experience, and customer support.",
  "Maintain website security and prevent fraudulent or unauthorized activity.",
  "Comply with applicable legal obligations and protect our legitimate interests.",
];

function SectionHeading({ number, title, id }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f8] text-sm font-bold text-[#197ba4]">
        {number}
      </span>
      <h2 id={id} className="scroll-mt-28 pt-1 text-xl font-bold tracking-tight text-[#10285f] sm:text-2xl">
        {title}
      </h2>
    </div>
  );
}

function PolicySection({ number, title, id, children }) {
  return (
    <section className="scroll-mt-28 border-b border-slate-100 py-8 last:border-0 sm:py-10">
      <SectionHeading number={number} title={title} id={id} />
      <div className="pl-0 text-sm leading-6 text-slate-600 sm:pl-14 sm:text-[15px] sm:leading-6">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
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
      {/* Page Hero */}
      <section className="relative mt-15 overflow-hidden bg-[#10285f]">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#1683c7]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#1683c7]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-200">
              Ryka Restroom Cubicles
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
              Your privacy matters to us. Learn how Ryka Restroom collects,
              uses, and protects your information when you visit our website
              or enquire about our restroom cubicles and partition solutions.
            </p>

           
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
          <span className="font-semibold text-[#10285f]">Privacy Policy</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
        {/* Table of Contents */}
        <aside className="lg:sticky lg:top-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="bg-[#10285f] px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-sky-200">
                Quick Navigation
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
                Have a privacy question?
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Contact our team for help with your information or privacy
                requests.
              </p>
             
            </div>
          </div>
        </aside>

        {/* Policy Article */}
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8 lg:px-10">
          <div className="border-b border-slate-100 py-7 sm:py-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8f4f8]">
                <FileText className="h-5 w-5 text-[#1683c7]" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#10285f]">
                  Your Privacy at Ryka Restroom
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  This policy applies to information collected through our
                  website and communications relating to our products and
                  services. Please read it to understand our general
                  information-handling practices.
                </p>
              </div>
            </div>
          </div>

          <PolicySection number="01" title="Introduction" id="introduction">
            <p>
              Welcome to Ryka Restroom (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;). We are committed to protecting your privacy and
              handling your personal information responsibly. This Privacy
              Policy explains how we collect, use, store, and protect
              information when you visit our website or contact us regarding
              our toilet cubicles, restroom partitions, and related products
              and services.
            </p>
          </PolicySection>

          <PolicySection
            number="02"
            title="Information We Collect"
            id="information-we-collect"
          >
            <p>
              We may collect the following types of information when you
              interact with our website, submit an enquiry, or request
              information about our products:
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {informationTypes.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-[#fafcfd] p-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#1683c7]" />
                    <h3 className="font-bold text-[#10285f]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </PolicySection>

          <PolicySection
            number="03"
            title="How We Use Your Information"
            id="how-we-use-information"
          >
            <p>
              The information we collect may be used for the following
              purposes:
            </p>
            <ul className="mt-4 space-y-3">
              {usageItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1683c7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection number="04" title="Cookies and Similar Technologies" id="cookies">
            <p>
              Our website may use cookies and similar technologies to support
              essential website functions, understand visitor interactions,
              and improve performance. Third-party analytics or advertising
              tools may also use cookies where enabled.
            </p>
            <p className="mt-3">
              You can manage cookies through your browser settings. Disabling
              certain cookies may affect some website functionality.
            </p>
          </PolicySection>

          <PolicySection
            number="05"
            title="Sharing of Information"
            id="sharing-information"
          >
            <p>
              We do not sell your personal information. We may share
              information with authorized service providers who help us
              operate our website, manage enquiries, provide communication
              services, or analyze website performance.
            </p>
            <p className="mt-3">
              Information may also be disclosed when required by law, to
              protect our rights, or in connection with a legitimate business
              reorganization. We expect recipients to handle information
              appropriately and in accordance with applicable requirements.
            </p>
          </PolicySection>

          <PolicySection number="06" title="Data Security" id="data-security">
            <p>
              We take reasonable technical and organizational measures to
              protect the information submitted to us against unauthorized
              access, misuse, alteration, and disclosure. However, no method
              of transmitting information over the internet or storing data
              electronically can be guaranteed to be completely secure.
            </p>
          </PolicySection>

          <PolicySection number="07" title="Data Retention" id="data-retention">
            <p>
              We retain personal information only for as long as reasonably
              necessary to respond to enquiries, manage business relationships,
              fulfill the purposes described in this policy, and meet
              applicable legal or regulatory requirements. Retention periods
              may vary depending on the nature of the information and the
              circumstances in which it was collected.
            </p>
          </PolicySection>

          <PolicySection number="08" title="Your Privacy Rights" id="privacy-rights">
            <p>
              Subject to applicable law, you may have the right to request
              access to your personal information, correction of inaccurate
              details, deletion of information, withdrawal of consent where
              processing is based on consent, or information about how your
              data is handled.
            </p>
            <p className="mt-3">
              To submit a privacy-related request, please contact us using
              the details below. We may need to verify your identity before
              processing certain requests.
            </p>
          </PolicySection>

          <PolicySection
            number="09"
            title="Third-Party Websites"
            id="third-party-websites"
          >
            <p>
              Our website may contain links to external websites or
              third-party services. We do not control their privacy practices
              or content. We recommend reviewing the relevant privacy policies
              before sharing personal information with those services.
            </p>
          </PolicySection>

          <PolicySection
            number="10"
            title="Children's Privacy"
            id="childrens-privacy"
          >
            <p>
              Our website and services are intended for general business and
              commercial enquiries, not for children to submit personal
              information independently. If you believe a child has provided
              personal information to us inappropriately, please contact us
              so that we can review the matter.
            </p>
          </PolicySection>

          <PolicySection
            number="11"
            title="Changes to This Privacy Policy"
            id="policy-changes"
          >
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our business practices, website functionality, or
              applicable legal requirements. Updates will be published on
              this page, together with the revised effective date.
            </p>
            <p className="mt-3">
              We encourage you to review this policy periodically to stay
              informed about our privacy practices.
            </p>
          </PolicySection>

          <PolicySection number="12" title="Contact Us" id="contact-us">
            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy or your personal information, please contact
              Ryka Restroom using the contact details below.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              <div className="bg-[#10285f] px-5 py-4">
                <p className="font-bold text-white">
                  Ryka Restroom Cubicles
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  We’re here to help with your privacy-related questions.
                </p>
              </div>

              <div className="space-y-4 p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-[#e8f4f8] p-2">
                    <Mail className="h-4 w-4 text-[#1683c7]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Email
                    </p>
                    <a
                      href="mailto:rykarestroomcubicle@gmail.com"
                      className="mt-1 break-all text-sm font-semibold text-[#10285f] hover:text-[#1683c7]"
                    >
                      rykarestroomcubicle@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-[#e8f4f8] p-2">
                    <Phone className="h-4 w-4 text-[#1683c7]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#10285f]">
                      +91 96672 33007
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Please confirm this number is the correct contact
                      number for privacy requests before publishing.
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
          </PolicySection>

          {/* Closing note */}
          <div className="mb-8 rounded-xl border border-[#d6eaf3] bg-[#f0f8fb] p-5 sm:mb-10 sm:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1683c7]" />
              <div>
                <h3 className="font-bold text-[#10285f]">
                  Thank you for trusting Ryka Restroom
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We value the trust you place in us when you share your
                  information. Please contact our team if you need further
                  information about this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <Cta/>
    </main>
    </>
  );
}
