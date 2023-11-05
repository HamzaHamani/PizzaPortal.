import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

//#features/Menu.js
function Menu() {
  const data = useLoaderData();

  return data.map((item) => <MenuItem pizza={item} key={item.id} />);
}
export async function Loader() {
  const data = await getMenu();
  return data;
}

export default Menu;
