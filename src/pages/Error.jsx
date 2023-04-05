import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12">
        Page Not Found
      </div>
      <div className="mt-5">
        <span className="block px-8 py-3 bg-[orange] text-white rounded border border-[orange]">
          <button onClick={handleClick}>Go Home</button>
        </span>
      </div>
    </div>
  );
}
