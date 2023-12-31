import { Link } from "react-router-dom";

function Button({
  children,
  disabled,
  to,
  type,
  logOut,
  cartClick,
  clearCart,
  clearCartItem,
  onClick,
}) {
  const base = ` inline-block rounded-full   font-bold uppercase tracking-wide  text-stone-800 transition-all duration-300 focus:bg-yellow-300 focus:outline-none focus:ring  focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 ${
    disabled
      ? " bg-stone-300  hover:bg-stone-300"
      : " bg-yellow-400 hover:bg-yellow-300 "
  } `;

  const styles = {
    primary: base + " text-base px-4 py-3 md:px-6 md:py-4",
    small: base + " text-sm px-4 py-2.5 md:px-5 md:py-3.5 text-xs",
    secondary:
      "text-sm inline-block rounded-full border-2 border-stone-300  font-bold uppercase tracking-wide  text-stone-400 transition-all duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800  focus:bg-stone-300 focus:outline-none focus:ring  focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed    px-4 py-3 md:px-5 md:py-3.5 ",
    round: base + " text-sm px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
  };

  if (clearCartItem)
    return (
      <button onClick={clearCartItem} className={styles[type]}>
        {children}
      </button>
    );

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  if (clearCart)
    return (
      <button onClick={clearCart} className={styles[type]}>
        {children}
      </button>
    );

  if (logOut)
    return (
      <button onClick={logOut} className={styles[type]}>
        {children}
      </button>
    );

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (cartClick)
    return (
      <button onClick={cartClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
