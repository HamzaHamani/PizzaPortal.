import { useLoaderData } from "react-router-dom";
import { getMenu } from "../services/apiRestaurant";

function Home() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>
    </div>
  );
}

export async function loader() {
  const data = await getMenu();
  return data;
}
export default Home;
