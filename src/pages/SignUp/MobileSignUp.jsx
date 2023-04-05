import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const MobileSignUp = () => {
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
    <form className=" p-4 flex w-full sm:hidden overflow-hidden justify-center">
      <div className="flex flex-col gap-4">
        <div className="text-xl font-bold">
          <h1>Welcome to team!</h1>
        </div>
        <div>
          Already have an account ?
          <NavLink
            to="/login"
            className="underline mx-1 hover:scale-110 text-[blue]"
          >
            Login
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
        <div className="flex flex-col">
          <label className="text-lg">Confirm Password</label>
          <input
            type="password"
            className="border border-1"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          className="border border-1 bg-black text-white rounded w-20 h-8 flex justify-center items-center text-xl cursor-pointer hover:scale-110"
          onClick={handleRegister}
        >
          Register
        </button>
        {error && <div className="text-rose-600">{errorMessage}</div>}
      </div>
    </form>
  );
};

export default MobileSignUp;
