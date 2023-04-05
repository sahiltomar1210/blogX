import { IoCloseOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const MobileMenu = ({ links, close }) => {
  const { currentUser, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const menus = [
    {
      path: "login",
      display: "Login",
    },
    {
      path: "register",
      display: "Register",
    },
  ];
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth >= 640) {
        close();
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [close]);
  const handleClick = (path) => {
    close();
    navigate(`${path}`);
  };
  const handlePublish = () => {
    close();
    navigate("/write");
  };
  return (
    <div
      className="fixed insert-0 top-0 l-0 h-full w-full backdrop-blur bg-gray-500 bg-opacity-60 sm:hidden"
      onClick={close}
    >
      <div className="m-2 bg-white rounded-xl p-5">
        <div className="flex items-center justify-between">
          <h1>Navigation</h1>
          <div className="cursor-pointer">
            <IoCloseOutline
              className="w-7 h-7 hover:scale-110 transition-all"
              onClick={close}
            />
          </div>
        </div>
        <div className="mt-5 divide-y">
          {links.map(({ display, path }, index) => {
            return (
              <NavLink
                key={index}
                to={path}
                className="block py-2 text-zinc-500 hover:bg-blue-100 transition-all"
              >
                <div onClick={close}>{display}</div>
              </NavLink>
            );
          })}
          {currentUser ? (
            <ul className="divide-y">
              <li
                className="block py-2 text-zinc-500 text-lg hover:bg-blue-100 transition-all cursor-pointer"
                onClick={handlePublish}
              >
                Publish Post
              </li>
              <li
                className="block py-2 text-zinc-500 text-lg hover:bg-blue-100 transition-all cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          ) : (
            <ul className="divide-y">
              {menus.map((menu, index) => (
                <li
                  className="block py-2 text-zinc-500 text-lg hover:bg-blue-100 transition-all cursor-pointer"
                  key={index}
                >
                  <div
                    onClick={() => {
                      handleClick(menu.path);
                    }}
                  >
                    {menu.display}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
