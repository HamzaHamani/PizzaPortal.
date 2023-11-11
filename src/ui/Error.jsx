import { useNavigate } from "react-router-dom";

function NotFound() {
  // const navigate = useNavigate();
  // console.log(error);
  const navigate = useNavigate();

  return (
    <div className="mt-[-100px] h-screen bg-gray-200">
      <div className="mx-auto mt-[100px] max-w-3xl  rounded   py-10 text-center text-2xl text-red-900  ">
        <div className="mt-[100px] text-center">
          <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
          <p className="mb-4 text-lg text-gray-600">
            Oops! Looks like you're lost.
          </p>
          <div className="animate-bounce">
            <svg
              className="mx-auto h-16 w-16 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </div>
          <p className="mt-4 text-gray-600">
            Let's get you back{" "}
            <span
              className="cursor-pointer text-yellow-600"
              onClick={() => navigate("/")}
            >
              HOME
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
