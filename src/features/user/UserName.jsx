import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((state) => state.user.username);
  if (!username) return;
  return <p className="font-semibolds hidden text-sm md:block"> {username}</p>;
}

export default UserName;
