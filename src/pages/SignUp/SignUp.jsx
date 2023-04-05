import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import MobileSignUp from "./MobileSignUp";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === confirmPassword && email !== "") {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/login");
      } catch (err) {
        setError(true);
        console.log(err.message);
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMessage("Email already in use!!");
        } else if (
          err.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setErrorMessage("Password should have 6 characters!!");
        } else if (err.message === "Firebase: Error (auth/invalid-email).") {
          setErrorMessage("Invalid Email !!");
        } else {
          setErrorMessage("Error Please try again later !");
        }
      }
    } else {
      alert("Please fill all details correctly");
    }
  };
  return (
    <>
      <div className="hidden sm:flex p-4 w-full flex justify-center items-center overflow-hidden">
        <form className=" flex justify-center items-center flex-col p-4 gap-4 overflow-hidden">
          <h2 className="text-5xl">Welcome to team!</h2>
          <div className="w-24 h-24 rounded">
            <RxAvatar className="w-24 h-24" />
          </div>
          <div className="gap-2 flex flex-col h-44 justify-center gap-8">
            <div className="flex flex-row justify-between gap-2">
              <label className="text-l">Email</label>
              <input
                type="email"
                className="border border-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between gap-2">
              <label className="text-l">Password</label>
              <input
                type="text"
                className="border border-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-row justify-between gap-2">
              <label className="text-l">Confirm Password</label>
              <input
                type="password"
                className="border border-1"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="border border-1 bg-black text-white rounded w-20 h-8 flex justify-center items-center text-xl cursor-pointer hover:scale-110"
            onClick={handleRegister}
          >
            Register
          </button>
          {error && <div className="text-rose-600">{errorMessage}</div>}
          <div>
            Already have an account ?
            <NavLink to="/login" className="underline mx-1 hover:scale-110">
              Login
            </NavLink>
          </div>
        </form>
      </div>
      <MobileSignUp />
    </>
  );
};

export default SignUp;
