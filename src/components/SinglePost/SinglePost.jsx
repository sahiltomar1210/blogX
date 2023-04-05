import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteSweep } from "react-icons/md";
const SinglePost = () => {
  return (
    <div className="w-full">
      <div className="p-5">
        <img
          className="h-80 w-full object-cover rounded"
          src="https://cdn.pixabay.com/photo/2023/04/02/08/34/snake-7894057_960_720.jpg"
          alt=""
        />
        <h1 className="text-center flex justify-between m-4 items-center text-2xl font-sans">
          Lorem, ipsum dolor sit amet.
          <div className=" flex gap-4 items-center justify-center">
            <FiEdit className="text-xl text-green-500 cursor-pointer" />
            <MdDeleteSweep className="text-2xl text-red-400 cursor-pointer" />
          </div>
        </h1>
        <div className="px-4 mb-4 flex justify-between items-center">
          <span>
            Author : <b>XYZ</b>
          </span>
          <span>1 hr ago</span>
        </div>
        <p className="text-lg first-letter:ml-5 first-letter:text-2xl first-letter:font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatibus, iure id iste ratione voluptatum ea blanditiis molestias
          eveniet magni incidunt rerum dolorum earum, fuga laboriosam, placeat
          dolor maiores! Consequatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci voluptatibus, iure id iste ratione
          voluptatum ea blanditiis molestias eveniet magni incidunt rerum
          dolorum earum, fuga laboriosam, placeat dolor maiores! Consequatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatibus, iure id iste ratione voluptatum ea blanditiis molestias
          eveniet magni incidunt rerum dolorum earum, fuga laboriosam, placeat
          dolor maiores! Consequatur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Adipisci voluptatibus, iure id iste ratione
          voluptatum ea blanditiis molestias eveniet magni incidunt rerum
          dolorum earum, fuga laboriosam, placeat dolor maiores! Consequatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatibus, iure id iste ratione voluptatum ea blanditiis molestias
          eveniet magni incidunt rerum dolorum earum, fuga laboriosam, placeat
          dolor maiores! Consequatur.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
