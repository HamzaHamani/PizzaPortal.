import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
function CartOverview() {
  const carts = useSelector((state) => state.cart.cart);
  console.log(carts);

  const length = carts.length;
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 px-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{length} pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
