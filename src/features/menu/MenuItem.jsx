import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/CaerSlice";
import DeleteItem from "../cart/DeleteItem";
import { useSelector } from "react-redux";
import { getCurrentQuantity } from "../cart/CaerSlice";
import UpdateItemQuantity from "../cart/updateItemQuantity";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantity(id));

  const isIncart = currentQuantity > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li
      className={`flex cursor-pointer flex-row items-center gap-4 py-2 transition-all duration-300  ${
        soldOut
          ? "cursor-not-allowed hover:bg-stone-200"
          : "hover:bg-yellow-200/20"
      } `}
    >
      <img
        src={imageUrl}
        alt={name}
        className={`${
          soldOut ? "opacity-70 grayscale" : ""
        }  h-[6rem] sm:h-[8rem] `}
      />
      <div className="flex grow flex-col gap-3 pt-0.5 ">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className=" mt-auto flex items-center justify-between ">
          {!soldOut ? (
            <p className="text-base">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isIncart && (
            <div className="flex flex-row-reverse gap-3 sm:gap-8">
              {" "}
              <DeleteItem pizzaId={id} />
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
            </div>
          )}
          {!isIncart && (
            <Button
              cartClick={handleAddToCart}
              type={"small"}
              disabled={soldOut}
            >
              ADD TO CART
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
