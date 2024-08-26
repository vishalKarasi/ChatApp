import { BiLogOut } from "react-icons/bi";
import useLogout from "@hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto py-3 border-t border-slate-500">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6  text-white cursor-pointer hover:text-red-500 hover:scale-125"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
