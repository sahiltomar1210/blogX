import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const MobileLogin = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navitage = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = async (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        if (user) {
          dispatch({ type: "LOGIN", payload: user });

          navitage("/");
        }
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
    <div className=" p-4 flex w-full sm:hidden overflow-hidden justify-center">
      <div className="flex flex-col gap-4">
        <div className="text-xl font-bold">
          <h1>Hello Again!</h1>
        </div>
        <div>
          Need an account ?
          <NavLink
            to="/register"
            className="underline mx-1 hover:scale-110 text-[blue]"
          >
            Register
          </NavLink>
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Email</label>
          <input
            type="email"
            className="border border-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Password</label>
          <input
            type="password"
            className="border border-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          className="border border-1 bg-black text-white rounded w-20 h-8 flex justify-center items-center text-xl cursor-pointer hover:scale-110"
          onClick={handleLogin}
        >
          Login
        </button>
        {error && <div className="text-rose-600">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default MobileLogin;
