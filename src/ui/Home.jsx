import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./button";
import { updateName } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const username = useSelector((store) => store.user.username);

  function handleLogOut() {
    //check userSlice for localeStorage also
    //removing locale storage when loggign out
    // console.log("delete");
    localStorage.removeItem("username");
    //updating user reducer so we can show the user change immediatly, if we didnt gonna be shown only when page re render
    dispatch(updateName(""));
  }

  return (
    <div className="my-[110px]  px-5 text-center sm:my-16">
      <h1 className="mb-8  mt-10 text-4xl font-semibold tracking-wide md:text-6xl">
        The best pizza.
        <br />
        <span className=" tracking-wider text-yellow-500 sm:mt-5">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username ? (
        <div className="flex items-center justify-center gap-3">
          <Button type={"primary"} to={"menu"}>
            continue ordring, {username}
          </Button>
          <Button type={"secondary"} logOut={handleLogOut}>
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
