import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  isLoadingIngredients;
  ingredients;
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-base">
        <p>
          <span className=" font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="text-lg font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-stome500 text-base capitalize italic">
        {isLoadingIngredients ? "loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
