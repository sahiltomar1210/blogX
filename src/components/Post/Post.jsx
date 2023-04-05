import React from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-96 mt-0 ml-6 mb-10 mr-6 cursor-pointer "
      onClick={() => navigate("/post/1")}
    >
      <img
        className="w-full h-72 object-cover rounded hover:scale-105"
        src="https://cdn.pixabay.com/photo/2023/03/27/14/18/british-shorthair-7880879_960_720.jpg"
        alt=""
      />
      <div className="flex flex-col items-center">
        <div className="mt-2">
          <span className="text-base text-[#be9656] mt-4 mr-2.5 cursor-pointer">
            Music
          </span>
          <span className="text-base text-[#be9656] mt-4 mr-2.5 cursor-pointer">
            Life
          </span>
        </div>
        <span className="text-2xl font-bold mt-4 cursor-pointer">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="italic text-sm text-[#999] mt-4">1 hr ago</span>
      </div>
      <p className="text-lg leading-6 text-[#444] mt-4 overflow-hidden text-ellipsis line-clamp-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aut rerum,
        obcaecati ipsa at necessitatibus error quo harum reprehenderit neque
        odit nobis nam accusantium delectus minima eius esse ad suscipit. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel aut rerum,
        obcaecati ipsa at necessitatibus error quo harum reprehenderit neque
        odit nobis nam accusantium delectus minima eius esse ad suscipit. Lorem,
        ipsum dolor sit amet consectetur adipisicing elit. Vel aut rerum,
        obcaecati ipsa at necessitatibus error quo harum reprehenderit neque
        odit nobis nam accusantium delectus minima eius esse ad suscipit.
      </p>
    </div>
  );
};

export default Post;
