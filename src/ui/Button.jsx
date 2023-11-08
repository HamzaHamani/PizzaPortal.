import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base = `text-l inline-block rounded-full bg-yellow-400  font-bold uppercase tracking-wide  text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 ${
    disabled ? "bg-stone-300 hover:bg-stone-300" : ""
  } `;

  const styles = {
    primary: base + " px-4 py-3 md:px-5 md:py-3",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-sm",
  };

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
