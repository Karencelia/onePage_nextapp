import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="justify-items-center">
        <Image
          src="/testimonial-1.jpg"
          alt="test image"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div>
        <div className="justify-center">
          <div>
            <h3 className="font-bold text-2xl flex justify-center ">
              Marcella Leonard
            </h3>
          </div>

          <span className="flex justify-center">Creative Director</span>
        </div>
        <p className="mx-6 px-8 text-2xl italic font-medium">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
