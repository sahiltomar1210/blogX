import { useRef, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userIcon from "../../assests/user-icon.png";
import logo from "../../assests/logo192.png";
import "./WebMenu.css";
import { AuthContext } from "../../context/AuthContext";
export default function WebMenu({ links }) {
  const { currentUser, dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
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

  const imgRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== imgRef.current) {
      setOpen(false);
    }
  });
  const handleClick = (path) => {
    setOpen(false);
    navigate(`${path}`);
  };

  const handleWrite = () => {
    setOpen(false);
    navigate("/write");
  };
  return (
    <div className="hidden sm:block w-full h-16 leading-[4.3rem]">
      <div className="flex items-center justify-around w-full">
        <div className="flex items-center gap-x-2">
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-16 h-12 rounded" />
          </NavLink>
        </div>
        <div>
          <ul className="flex items-center gap-x-11 mb-0">
            {links.map(({ display, path }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={(navClass) =>
                      navClass
                        ? "font-bold"
                        : "font-medium" &&
                          "hover:text-teal-800 cursor-pointer justify-between"
                    }
                  >
                    {display}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center gap-x-5">
          <span className="relative">
            <div>
              <img
                ref={imgRef}
                className="object-cover w-12 h-12 cursor-pointer hover:scale-110"
                alt="avatar"
                src={userIcon}
                onClick={() => setOpen(!open)}
              />
              {open ? (
                <div className=" bg-white p-4 w-48 shadow-lg absolute top-18 right-0 m-px">
                  {currentUser ? (
                    <ul>
                      <li
                        className="p-0.5 text-lg cursor-pointer rounded hover:bg-blue-100"
                        onClick={handleWrite}
                      >
                        Publish Post
                      </li>
                      <li
                        className="p-0.5 text-lg cursor-pointer rounded hover:bg-blue-100"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      {menus.map((menu, index) => (
                        <li
                          className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
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
              ) : (
                <></>
              )}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
