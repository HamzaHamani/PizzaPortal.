import Button from "../../ui/button";
import { useDispatch } from "react-redux";
import { decreasItemQuantity, increaItemQuantity } from "./CaerSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      {" "}
      <Button
        type="round"
        onClick={() => dispatch(decreasItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-lg font-semibold">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
