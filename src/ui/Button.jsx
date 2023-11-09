import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateName } from "../features/user/userSlice";

function Button({ children, disabled, to, type, onclick }) {
  const dispatch = useDispatch();
  const base = ` inline-block rounded-full bg-yellow-400  font-bold uppercase tracking-wide  text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 ${
    disabled ? "bg-stone-300 hover:bg-stone-300" : ""
  } `;

  const styles = {
    primary: base + " text-base px-4 py-3 md:px-6 md:py-4",
    small: base + " text-sm px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-sm inline-block rounded-full border-2 border-stone-300  font-bold uppercase tracking-wide  text-stone-400 transition-all duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800  focus:bg-stone-300 focus:outline-none focus:ring  focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed    px-4 py-3 md:px-5 md:py-3.5 ",
  };

  if (onclick)
    return (
      <button
        onClick={() => {
          //check userSlice for localeStorage also
          //removing locale storage when loggign out
          localStorage.removeItem("username");
          //updating user reducer so we can show the user change immediatly, if we didnt gonna be shown only when page re render
          dispatch(updateName(""));
        }}
        className={styles[type]}
      >
        {children}{" "}
      </button>
    );

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
