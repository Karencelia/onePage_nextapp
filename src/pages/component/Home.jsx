import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="px-6">
      <div className="flex justify-center mx-4 my-6">
        <h1 className="text-8xl font-bold mx-2 my-8">Arthur Jackson</h1>
      </div>
      
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="grid justify-items-start">
          <div className="p-10 ml-14">
            <h4 className="mb-3 uppercase">Biography</h4>
            <p className="leading-[2rem] w-[380px] mb-0 text-[#ffffffcc]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="p-10 ml-14 mt-0">
            <h5 className="mb-3 uppercase">Skills</h5>
            <ul className="flex justify-between">
              <li>Web Development</li>
              <li>UI & UX Design</li>
              <li>Marketing</li>
              <li>SEO</li>
              <li>Management</li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase p-10 ml-14 mt-0">Connect</h5>
            <ul>
              <li className="rouded-full "></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="grid justify-items-center">
          <Image
            src="/hero-avatar.jpg"
            alt="hero img"
            width={340}
            height={340}
            className="rounded-full my-20"
          />
        </div>

        <div className="grid justify-items-end text-left p-10 mr-14">
          <div className="items-end">
            <h6 className="text-lg text-right uppercase">Projects Done</h6>
            <h1 className="text-5xl text-right "> 432</h1>
          </div>
          <div>
            <h6 className="text-lg uppercase">Years of Experience</h6>
            <h1 className="text-5xl text-right">13+</h1>
          </div>
          <div>
            <h6 className="text-xl uppercase">Worldwide Clients</h6>
            <h4 className="text-5xl text-right">900</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
