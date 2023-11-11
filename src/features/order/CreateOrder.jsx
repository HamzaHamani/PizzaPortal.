// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/button";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/CaerSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { fetchAddress } from "../user/userSlice";
import { useDispatch } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
isValidPhone;

function CreateOrder() {
  const dispatch = useDispatch();
  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const navigation = useNavigation(); // to know when each is route is loading data so we show loader spinner, its universal, it knows each route if is loading
  const isLoading = navigation.state === "loading";

  const formErrors = useActionData();
  const user = useSelector((state) => state.user);
  // console.log(address);
  // console.log(username);

  const price = useSelector(getTotalCartPrice);

  const isLoadingAddress = user.status === "loading";

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-5 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="post">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input  grow"
            type="text"
            name="customer"
            required
            defaultValue={user.username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />

            {formErrors?.phone && (
              <p className="text-xd mt-2 rounded-md bg-red-100 p-2 text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={user.adrees}
              required
            />
          </div>
          <span className="absolute right-0 z-50">
            <Button
              disabled={isLoadingAddress}
              type={"small"}
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress());
              }}
            >
              Fetch Address
            </Button>
          </span>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-60 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <Button type={"primary"} disabled={isLoading}>
            {isLoading ? "Packing order..." : `Order Now ${price}$`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function CreateOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority == "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please give us your correct phone number";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
  // return null;
}
export default CreateOrder;
