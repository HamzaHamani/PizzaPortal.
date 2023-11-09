import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  // const navigate = useNavigate();
  const error = useRouteError();
  // console.log(error);

  return (
    <div className="mx-auto mt-[100px] max-w-3xl rounded bg-red-200 py-10 text-center text-2xl text-red-900 shadow-lg  shadow-black/30">
      <h1>Something went wrong 😢</h1>
      <p>{error.message || error.data}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
