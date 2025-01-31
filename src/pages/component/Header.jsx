import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 m-4">
        <div className="flex">
          <h2 className="text-3xl font-semibold leading-4">Mone</h2>
        </div>
        <div className="f">
          <button className="rounded-full bg-slate-700 py-2 px-10 mx-1.5 uppercase font-medium ">
            let's talk
          </button>
          <button className="rounded-full uppercase py-2 px-8 mx-1.5 font-light bg-white  text-black">
            menu
          </button>
        </div>
      </nav>
    </>
  );
};
 
export default Header;
