import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./CaerSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    // console.log(cart);
    dispatch(deleteItem(pizzaId));
  }
  return (
    <Button type={"small"} clearCartItem={handleDelete}>
      DELETE
    </Button>
  );
}

export default DeleteItem;
