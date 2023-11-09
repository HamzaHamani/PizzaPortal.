import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return;
  localStorage.setItem("username", username);
  return <p className="hidden text-lg font-bold md:block"> {username}</p>;
}

export default UserName;
