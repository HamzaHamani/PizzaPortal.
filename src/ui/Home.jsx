import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./button";
function Home() {
  const username = useSelector((store) => store.user.username);

  return (
    <div className="my-10 px-5 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold tracking-wide md:text-4xl">
        The best pizza.
        <br />
        <span className="mt-1 tracking-wider text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username ? (
        <div className="flex items-center justify-center gap-3">
          <Button type={"primary"} to={"menu"}>
            continue ordring, {username}
          </Button>
          <Button type={"secondary"} onclick={"log-out"}>
            Log out
          </Button>
        </div>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}
export default Home;
