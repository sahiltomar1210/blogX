import { useState, useContext } from "react";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import MobileLogin from "./MobileLogin";
const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navitage = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        dispatch({ type: "LOGIN", payload: user });
        setTimeout(() => {
          navitage("/");
        }, 1000);
      })
      .catch((error) => {
        setError(true);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setErrorMessage("Wrong Password");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setErrorMessage("User Not Found!!");
        } else if (error.message === "Firebase: Error (auth/invalid-email).") {
          setErrorMessage("Please enter proper email!");
        } else if (
          error.message === "Firebase: Error (auth/missing-password)."
        ) {
          setErrorMessage("Please enter password!");
        } else {
          setErrorMessage(error.message);
        }
      });
  };

  return (
    <>
      <div className="hidden sm:flex p-4 w-full flex justify-center items-center overflow-hidden">
        <div className="flex justify-center items-center flex-col p-4 gap-4 overflow-hidden">
          <h2 className="text-5xl">Hello again!</h2>
          <h3 className="text-3xl">Nice to you.</h3>
          <div className="w-24 h-24 rounded">
            <RxAvatar className="w-24 h-24" />
          </div>
          <form className="gap-2 flex flex-col h-44 justify-center gap-8">
            <div className="flex flex-row justify-between gap-2">
              <label className="text-2xl">Email</label>
              <input
                type="email"
                className="border border-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between gap-2">
              <label className="text-2xl">Password</label>
              <input
                type="password"
                className="border border-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </form>
          <button
            type="submit"
            onClick={handleLogin}
            className="border border-1 bg-black text-white rounded w-20 h-8 flex justify-center items-center text-xl cursor-pointer hover:scale-110"
          >
            Login
          </button>
          {error && <div className="text-rose-600">{errorMessage}</div>}
          <div>
            Don't have account ?
            <NavLink to="/register" className="underline mx-1 hover:scale-110">
              Register
            </NavLink>
          </div>
        </div>
      </div>
      <MobileLogin />
    </>
  );
};

export default Login;
