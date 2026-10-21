
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  FiX,
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowRight,
  FiShoppingBag,
  FiCheckCircle,
  FiLoader,
  FiShield,
  FiMinus,
  FiPlus,
} from "react-icons/fi";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
  notes: "",
};

export default function CheckoutPopup({
  isOpen,
  onClose,
  cartItems = [],
  onQuantityChange,
}) {
  const router = useRouter();

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [quantities, setQuantities] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setFormData(INITIAL_FORM);
      setQuantities({});
      setStatus("");
      setIsSubmitting(false);
      setIsSuccess(false);
      return;
    }

    // Initialize quantities from the supplied cart items.
    setQuantities((previous) => {
      const next = {};

      cartItems.forEach((item, index) => {
        const key = String(item.id ?? item.slug ?? index);
        next[key] = previous[key] ?? Math.max(
          1,
          Number(item.quantity ?? item.qty ?? 1)
        );
      });

      return next;
    });
  }, [isOpen, cartItems]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape" && !isSubmitting) {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, isSubmitting, onClose]);

  if (!isOpen) return null;

  const getKey = (item, index) =>
    String(item.id ?? item.slug ?? index);

  const getPrice = (item) =>
    Math.max(0, Number(item.price ?? item.salePrice ?? 0));

  const getQuantity = (item, index) =>
    Math.max(
      1,
      Number(
        quantities[getKey(item, index)] ??
          item.quantity ??
          item.qty ??
          1
      )
    );

  const getLineTotal = (item, index) =>
    getPrice(item) * getQuantity(item, index);

  const orderTotal = cartItems.reduce(
    (total, item, index) =>
      total + getLineTotal(item, index),
    0
  );

  const itemCount = cartItems.reduce(
    (total, item, index) =>
      total + getQuantity(item, index),
    0
  );

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(price);

  const updateQuantity = (item, index, change) => {
    const key = getKey(item, index);
    const nextQuantity = Math.max(
      1,
      getQuantity(item, index) + change
    );

    setQuantities((previous) => ({
      ...previous,
      [key]: nextQuantity,
    }));

    // Optional callback keeps the parent product quantity synchronized.
    onQuantityChange?.(item, nextQuantity);
    setStatus("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        name === "phone"
          ? value.replace(/\D/g, "").slice(0, 10)
          : name === "pincode"
            ? value.replace(/\D/g, "").slice(0, 6)
            : value,
    }));

    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (formData.phone.length !== 10) {
      setStatus("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!/^\d{6}$/.test(formData.pincode)) {
      setStatus("Please enter a valid 6-digit PIN code.");
      return;
    }

    if (cartItems.length === 0) {
      setStatus("Your order is empty. Please select a product.");
      return;
    }

    const productNames = cartItems
      .map((item, index) => {
        const name =
          item.name || item.title || item.productName || "Product";

        return `${name} (Qty: ${getQuantity(item, index)})`;
      })
      .join(", ");

    const deliveryAddress = [
      formData.address.trim(),
      formData.city.trim(),
      `PIN: ${formData.pincode}`,
    ].join(", ");

    const orderNotes = [
      `Order items: ${productNames}`,
      `Order subtotal: ${formatPrice(orderTotal)}`,
      "Online payment: Not collected.",
      "Shipping and payment details to be confirmed by the team.",
      formData.notes.trim()
        ? `Additional notes: ${formData.notes.trim()}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    setIsSubmitting(true);
    setStatus("");

    try {
      const data = {
        supplierToken: "6a9bb67ac077e066ff1e0d9e",
        platform: "Ryka Restroom Cubicles",
        platformEmail: "rykarestroomcubicle@gmail.com",

        name: formData.name.trim(),
        email: formData.email.trim(),
        company: "NA",
        phone: `+91${formData.phone}`,

        product: productNames,
        place: deliveryAddress,
        message: orderNotes,
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 20000,
        }
      );

      if (res.status >= 200 && res.status < 300) {
        setFormData(INITIAL_FORM);
        setStatus("");
        setIsSuccess(true);
      } else {
        setStatus("Unable to submit your order. Please try again.");
      }
    } catch (error) {
      console.error("Ryka Restroom checkout error:", error);

      if (error.response) {
        setStatus(
          error.response.data?.message ||
            "Something went wrong. Please try again."
        );
      } else if (error.request) {
        setStatus(
          "Unable to connect to the server. Please check your internet connection."
        );
      } else {
        setStatus("Failed to submit your order. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#1683c7] focus:bg-white focus:ring-2 focus:ring-blue-100 disabled:opacity-60";

  const labelClass =
    "mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500";

  const closeAndRedirect = () => {
    // onClose?.();
    // router.push("/thankyou");
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#07152d]/70 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(e) => {
        if (
          e.target === e.currentTarget &&
          !isSubmitting
        ) {
          onClose?.();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-heading"
        className="relative my-auto max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
      >
        {/* HEADER */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-7">
          <div>
            <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#1683c7]">
              RYKA RESTROOM
            </p>

            <h2
              id="checkout-heading"
              className="text-xl font-extrabold tracking-tight text-[#10285f] sm:text-2xl"
            >
              {isSuccess ? "Order Confirmed" : "Quick Checkout"}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Close checkout"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-100 disabled:opacity-50"
          >
            <FiX size={20} />
          </button>
        </header>

        {/* SUCCESS SCREEN */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center px-5 py-12 text-center sm:px-10 sm:py-16">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <FiCheckCircle size={36} />
            </div>

            <span className="mb-3 rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
              Submission Successful
            </span>

            <h3 className="text-2xl font-extrabold text-[#10285f] sm:text-3xl">
              Order Submitted Successfully!
            </h3>

            <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
              Thank you for choosing Ryka Restroom. Our team will
              contact you soon to confirm your requirements, pricing,
              and delivery details.
            </p>

            <p className="mt-2 text-xs text-slate-400">
              No online payment has been collected.
            </p>

           
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_265px] lg:gap-7">
            {/* CUSTOMER FORM */}
            <form
              id="checkout-form"
              onSubmit={handleSubmit}
              className="min-w-0"
            >
              <div className="mb-5">
                <h3 className="text-base font-bold text-slate-800">
                  Customer Details
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Share your details to submit your order request.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                {/* NAME */}
                <div>
                  <label htmlFor="checkout-name" className={labelClass}>
                    Full Name *
                  </label>

                  <div className="relative">
                    <FiUser
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />

                    <input
                      id="checkout-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      className={inputClass}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label htmlFor="checkout-phone" className={labelClass}>
                    Phone Number *
                  </label>

                  <div className="relative">
                    <FiPhone
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />

                    <span className="absolute left-9 top-1/2 -translate-y-1/2 text-xs text-slate-500">
                      +91
                    </span>

                    <input
                      id="checkout-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      autoComplete="tel-national"
                      className={`${inputClass} pl-[67px]`}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="sm:col-span-2">
                  <label htmlFor="checkout-email" className={labelClass}>
                    Email Address *
                  </label>

                  <div className="relative">
                    <FiMail
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />

                    <input
                      id="checkout-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className={inputClass}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="sm:col-span-2">
                  <label htmlFor="checkout-address" className={labelClass}>
                    Delivery Address *
                  </label>

                  <div className="relative">
                    <FiMapPin
                      className="absolute left-3.5 top-3.5 text-slate-400"
                      size={16}
                    />

                    <textarea
                      id="checkout-address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House number, street, area..."
                      rows={2}
                      autoComplete="street-address"
                      className={`${inputClass} resize-y py-3`}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* CITY */}
                <div>
                  <label htmlFor="checkout-city" className={labelClass}>
                    City *
                  </label>

                  <input
                    id="checkout-city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    autoComplete="address-level2"
                    className={inputClass.replace("pl-10", "pl-3")}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* PIN CODE */}
                <div>
                  <label htmlFor="checkout-pincode" className={labelClass}>
                    PIN Code *
                  </label>

                  <input
                    id="checkout-pincode"
                    name="pincode"
                    type="text"
                    inputMode="numeric"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="6-digit PIN"
                    autoComplete="postal-code"
                    className={inputClass.replace("pl-10", "pl-3")}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* NOTES */}
                
              </div>

              {status && (
                <div
                  role="alert"
                  className="mt-4 rounded-xl border border-red-100 bg-red-50 px-3 py-3 text-xs leading-5 text-red-700"
                >
                  {status}
                </div>
              )}

              <div className="mt-4 flex items-start gap-2 text-[11px] leading-5 text-slate-400">
                <FiShield
                  className="mt-0.5 shrink-0 text-[#1683c7]"
                  size={15}
                />

                <p>
                  Your details are used to process your enquiry and
                  coordinate order confirmation.
                </p>
              </div>
            </form>

            {/* ORDER SUMMARY */}
            <aside className="h-fit rounded-2xl border border-slate-100 bg-[#f7f9fc] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-2">
                <h3 className="text-base font-extrabold text-[#10285f]">
                  Your Order
                </h3>

                <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-slate-600">
                  {itemCount} {itemCount === 1 ? "item" : "items"}
                </span>
              </div>

              <div className="max-h-56 space-y-4 overflow-y-auto">
                {cartItems.map((item, index) => (
                  <div
                    key={getKey(item, index)}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white">
                      {item.image || item.imageUrl ? (
                        <img
                          src={item.image || item.imageUrl}
                          alt={item.name || item.title || "Product"}
                          className="h-full w-full object-contain p-1"
                        />
                      ) : (
                        <FiShoppingBag
                          size={22}
                          className="text-slate-400"
                        />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold leading-5 text-slate-700">
                        {item.name ||
                          item.title ||
                          item.productName ||
                          "Product"}
                      </p>

                      {/* QUANTITY CONTROLS */}
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11px] text-slate-500">
                          Qty
                        </span>

                        <div className="flex items-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item, index, -1)
                            }
                            disabled={
                              getQuantity(item, index) <= 1 ||
                              isSubmitting
                            }
                            aria-label="Decrease quantity"
                            className="flex h-7 w-7 items-center justify-center text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <FiMinus size={12} />
                          </button>

                          <span className="min-w-8 text-center text-xs font-bold text-[#10285f]">
                            {getQuantity(item, index)}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item, index, 1)
                            }
                            disabled={isSubmitting}
                            aria-label="Increase quantity"
                            className="flex h-7 w-7 items-center justify-center text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 disabled:opacity-40"
                          >
                            <FiPlus size={12} />
                          </button>
                        </div>
                      </div>

                      <p className="mt-2 text-sm font-extrabold text-[#10285f]">
                        {formatPrice(getLineTotal(item, index))}
                      </p>
                    </div>
                  </div>
                ))}

                {cartItems.length === 0 && (
                  <p className="py-3 text-xs text-slate-500">
                    Your cart is empty.
                  </p>
                )}
              </div>

              <div className="my-4 border-t border-slate-200" />

              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500">Subtotal</span>

                <span className="font-bold text-slate-800">
                  {formatPrice(orderTotal)}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500">Shipping</span>

                <span className="text-right text-slate-500">
                  To be confirmed
                </span>
              </div>

              <div className="my-4 border-t border-dashed border-slate-200" />

              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-bold text-[#10285f]">
                  Total
                </span>

                <span className="text-lg font-extrabold text-[#10285f]">
                  {formatPrice(orderTotal)}
                </span>
              </div>

              <p className="mt-1 text-[10px] text-slate-400">
                Excluding shipping charges
              </p>

              {/* PLACE ORDER */}
              <button
                type="submit"
                form="checkout-form"
                disabled={isSubmitting || cartItems.length === 0}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#10285f] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#0878D1] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin" size={17} />
                    Submitting...
                  </>
                ) : (
                  <>
                    Place Order
                    <FiArrowRight size={17} />
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-[10px] leading-5 text-slate-400">
                No online payment required. Our team will confirm
                pricing, shipping, and payment details.
              </p>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
