import Button from "../../ui/button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  pizzaId;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 text-lg sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        <Button type={"small"}>DELETE</Button>
      </div>
    </li>
  );
}

export default CartItem;
