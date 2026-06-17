import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatINR } from "../data/products";

const CartDrawer = () => {
  const { isOpen, closeCart, items, removeItem, updateQty, subtotal } = useCart();
  const navigate = useNavigate();

  const goCheckout = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            data-testid="cart-backdrop"
          />
          <motion.aside
            data-testid="cart-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-[80] w-full sm:w-[460px] bg-card border-l border-white/5 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5">
              <h3 className="font-display text-xl tracking-wide">Your Atelier Bag</h3>
              <button data-testid="cart-close-btn" onClick={closeCart} className="text-foreground/60 hover:text-foreground">
                <X size={20} strokeWidth={1.25} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6">
              {items.length === 0 ? (
                <div data-testid="cart-empty" className="text-center py-24">
                  <p className="font-display text-2xl mb-3">Your bag is quiet.</p>
                  <p className="text-sm text-foreground/50 font-body">Begin with our seasonal edit.</p>
                </div>
              ) : (
                <ul className="space-y-8">
                  {items.map((item) => (
                    <li key={item.key} data-testid={`cart-item-${item.id}`} className="flex gap-5">
                      <img src={item.image} alt={item.name} className="w-24 h-32 object-cover" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="font-display text-base leading-tight">{item.name}</h4>
                          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 mt-1 font-body">Size {item.size}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-white/10">
                            <button
                              data-testid={`cart-decrease-${item.id}`}
                              onClick={() => updateQty(item.key, item.qty - 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-white/5"
                            >
                              <Minus size={12} strokeWidth={1.25} />
                            </button>
                            <span className="w-8 text-center text-sm font-body">{item.qty}</span>
                            <button
                              data-testid={`cart-increase-${item.id}`}
                              onClick={() => updateQty(item.key, item.qty + 1)}
                              className="w-7 h-7 flex items-center justify-center hover:bg-white/5"
                            >
                              <Plus size={12} strokeWidth={1.25} />
                            </button>
                          </div>
                          <span className="font-body text-sm">{formatINR(item.price * item.qty)}</span>
                        </div>
                      </div>
                      <button
                        data-testid={`cart-remove-${item.id}`}
                        onClick={() => removeItem(item.key)}
                        className="self-start text-foreground/40 hover:text-foreground"
                      >
                        <X size={14} strokeWidth={1.25} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-white/5 px-8 py-6 space-y-5">
                <div className="flex justify-between text-sm font-body">
                  <span className="text-foreground/55 uppercase tracking-[0.25em] text-[11px]">Subtotal</span>
                  <span data-testid="cart-subtotal" className="font-display text-xl">{formatINR(subtotal)}</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 font-body">Taxes & complimentary delivery calculated at checkout</p>
                <button
                  data-testid="cart-checkout-btn"
                  onClick={goCheckout}
                  className="w-full bg-foreground text-background py-4 text-[11px] uppercase tracking-[0.3em] font-body hover:bg-foreground/90 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
