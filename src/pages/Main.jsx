import "./main.css";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// eslint-disable-next-line
import { db } from "../firebase";
// eslint-disable-next-line
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import Posts from "./Posts/Posts";
// eslint-disable-next-line
import SinglePage from "./SinglePage/SinglePage";
const Main = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="mt-4">
      {currentUser ? (
        <Posts />
      ) : (
        <div className="w-full flex flex-col justify-center items-center p-10 text-2xl">
          <p>
            Blogging refers to the practice of writing and publishing content on
            a website or blog on a regular basis. A blog can cover a wide range
            of topics and can be written in a personal or professional style.
            Blogging has become increasingly popular as a means of sharing
            information, opinions, and experiences with a global audience. It
            can serve as a platform for self-expression, networking, and
            building a personal brand. Many individuals and businesses use
            blogging as a marketing tool to promote their products or services
            and connect with their target audience.
          </p>
          <NavLink to="/register">
            <button className="bg-gray-700 text-xl p-2 rounded text-white m-4">
              Register
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Main;
