import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatINR } from "../data/products";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [placed, setPlaced] = useState(false);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pincode: "",
    country: "India",
    payment: "card",
  });

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const placeOrder = (e) => {
    e.preventDefault();
    if (!form.email || !form.firstName || !form.address) {
      toast.error("Please complete your details");
      return;
    }
    if (items.length === 0) {
      toast.error("Your bag is empty");
      return;
    }
    // Mock order
    setPlaced(true);
    clearCart();
    toast.success("Order placed — quietly.");
  };

  if (placed) {
    return (
      <div data-testid="order-confirmation" className="grain pt-40 pb-32 px-6 lg:px-16 max-w-[900px] mx-auto text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}>
          <CheckCircle2 size={48} strokeWidth={1} className="mx-auto text-foreground/80 mb-8" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/45 font-body block mb-4">— Order Confirmed</span>
          <h1 className="font-display text-5xl sm:text-6xl tracking-tighter font-medium mb-6">
            Thank you, <em className="italic font-normal text-foreground/55">{form.firstName || "Sir"}.</em>
          </h1>
          <p className="text-foreground/65 font-body max-w-md mx-auto leading-relaxed">
            Your atelier confirmation will arrive at {form.email || "your inbox"} shortly. Your garments will be hand-pressed before dispatch.
          </p>
          <button
            data-testid="continue-shopping-btn"
            onClick={() => navigate("/collection")}
            className="mt-12 border border-foreground/30 px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-body hover:border-foreground hover:bg-foreground hover:text-background transition-all"
          >
            Continue Browsing
          </button>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-32 px-6 lg:px-16 max-w-[900px] mx-auto text-center">
        <h1 className="font-display text-4xl mb-4">Your bag is quiet.</h1>
        <p className="text-foreground/55 font-body mb-10">Add a piece before proceeding to checkout.</p>
        <Link to="/collection" className="luxe-link text-[11px] uppercase tracking-[0.3em] font-body">Browse Collection →</Link>
      </div>
    );
  }

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div data-testid="checkout-page" className="grain pt-32 pb-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body block mb-4">— Step 02 / Checkout</span>
        <h1 className="font-display text-4xl lg:text-5xl tracking-tighter font-medium mb-16">Checkout</h1>

        <div className="grid lg:grid-cols-12 gap-16">
          <form onSubmit={placeOrder} data-testid="checkout-form" className="lg:col-span-7 space-y-12">
            <section>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body mb-6 font-medium">— Contact</h2>
              <input
                data-testid="checkout-email"
                value={form.email}
                onChange={upd("email")}
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/15 focus:border-foreground outline-none py-3 text-base font-body placeholder:text-foreground/35"
              />
            </section>

            <section>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body mb-6">— Delivery</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <input data-testid="checkout-firstname" value={form.firstName} onChange={upd("firstName")} placeholder="First name" className="bg-transparent border-b border-white/15 focus:border-foreground outline-none py-3 text-base font-body placeholder:text-foreground/35" />
                <input data-testid="checkout-lastname" value={form.lastName} onChange={upd("lastName")} placeholder="Last name" className="bg-transparent border-b border-white/15 focus:border-foreground outline-none py-3 text-base font-body placeholder:text-foreground/35" />
                <input data-testid="checkout-address" value={form.address} onChange={upd("address")} placeholder="Address" className="sm:col-span-2 bg-transparent border-b border-white/15 focus:border-foreground outline-none py-3 text-base font-body placeholder:text-foreground/35" />
                <input data-testid="checkout-city" value={form.city} onChange={upd("city")} placeholder="City" className="bg-transparent border-b border-white/15 focus:border-foreground outline-none py-3 text-base font-body placeholder:text-foreground/35" />
                <input data-testid="checkout-pincode" value={form.pincode} onChange={upd("pincode")} placeholder="Postal code" className="bg-transparent border-b border-white/15 focus:border-foreground outline-none py-3 text-base font-body placeholder:text-foreground/35" />
              </div>
            </section>

            <section>
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-foreground/45 font-body mb-6">— Payment</h2>
              <div className="space-y-3">
                {[
                  { id: "card", label: "Credit / Debit Card" },
                  { id: "upi", label: "UPI" },
                  { id: "netbanking", label: "Net Banking" },
                  { id: "cod", label: "Cash on Delivery" },
                ].map((p) => (
                  <label key={p.id} className={`flex items-center gap-4 border px-5 py-4 cursor-pointer transition-all ${form.payment === p.id ? "border-foreground" : "border-white/10 hover:border-white/30"}`}>
                    <input
                      data-testid={`payment-${p.id}`}
                      type="radio"
                      name="payment"
                      checked={form.payment === p.id}
                      onChange={() => setForm({ ...form, payment: p.id })}
                      className="accent-foreground"
                    />
                    <span className="text-sm font-body">{p.label}</span>
                  </label>
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 font-body mt-4">— Mock checkout · Payment integration arrives in the next chapter</p>
            </section>

            <button
              type="submit"
              data-testid="place-order-btn"
              className="w-full bg-foreground text-background py-5 text-[11px] uppercase tracking-[0.3em] font-body hover:bg-foreground/90 transition-all"
            >
              Place Order · {formatINR(total)}
            </button>
          </form>

          {/* Summary */}
          <aside className="lg:col-span-5 lg:sticky lg:top-32 self-start border border-white/5 p-8">
            <h3 className="font-display text-2xl mb-8">Your Bag</h3>
            <ul className="space-y-6 mb-8 max-h-80 overflow-y-auto">
              {items.map((i) => (
                <li key={i.key} className="flex gap-4">
                  <img src={i.image} alt={i.name} className="w-16 h-20 object-cover" />
                  <div className="flex-1">
                    <p className="font-display text-sm">{i.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 font-body mt-1">Size {i.size} · Qty {i.qty}</p>
                  </div>
                  <span className="text-sm font-body">{formatINR(i.price * i.qty)}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/5 pt-6 space-y-3 text-sm font-body">
              <div className="flex justify-between text-foreground/65">
                <span>Subtotal</span>
                <span>{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-foreground/65">
                <span>Delivery</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-white/5 mt-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/45">Total</span>
                <span data-testid="checkout-total" className="font-display text-2xl">{formatINR(total)}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
