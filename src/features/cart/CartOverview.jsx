import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./CaerSlice";
import { getTotalCartQuantity } from "./CaerSlice";
import { formatCurrency } from "../../utils/helpers";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totlCartPrice = useSelector(getTotalCartPrice);

  if (!totlCartPrice) return null;
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "linear" }}
        className="flex items-center justify-between bg-stone-800 p-4 px-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base"
      >
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{totalCartQuantity} pizzas</span>
          <span>{formatCurrency(totlCartPrice)}</span>
        </p>
        <Link to="/cart">Open cart &rarr;</Link>
      </motion.div>
    </AnimatePresence>
  );
}

export default CartOverview;
