import React from "react";

function Thumbnail(props) {
  return (
    <>
      <div className="flex items-center">
        <img src={`/${props.image}`} className="rounded-xl w-full mt-1" />
      </div>

      <div className="mt-2 flex-col ">
        <div className="flex">
          <p className="font-light text-sm px-1 border-r-[1px] border-[#858585] ">
            {props.catagory}
          </p>
          <p className="font-light text-sm px-1">{props.tittle}</p>
        </div>
        <h3 className="text-[#FFFFFF] font-bold lg:text-lg md:text-md text-lg mt-1">
          {props.judul}
        </h3>
      </div>
    </>
  );
}

export default Thumbnail;
