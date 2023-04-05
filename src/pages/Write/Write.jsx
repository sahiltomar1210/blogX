import React from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
const Write = () => {
  return (
    <div className="pt-12 items-center">
      <img
        className="w-[70vw] h-60 mx-16 rounded object-cover"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs-tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="relative">
        <div className=" flex items-center justify-center">
          <label htmlFor="fileInput" className="cursor-pointer">
            <div>
              <AiOutlineFileAdd className="text-4xl text-gray-500" />
            </div>
          </label>
          <input type="file" id="fileInput" className="hidden" />
          <input
            type="text"
            placeholder="Title"
            className="text-3xl p-5 w-5/6 focus:outline-none"
          />
        </div>
        <div className="">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="text-xl p-5 w-5/6 focus:outline-none h-[80vh]"
          ></textarea>
        </div>
        <button className="absolute top-5 right-12 text-white bg-green-500 p-2 rounded cursor-pointer text-lg ">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
