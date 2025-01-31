import React from 'react'
import Image from 'next/image';

const portfolio = () => {
  return (
    <div className="justify-center mx-4 bg-zinc-900 px-8 py-4 rounded">
      <div>
        <h3 className="mx-6">Portfolio</h3>
      </div>
      <div className="mx-6">
        <h1 className="text-5xl font-bold">
          Recent <span className="text-violet-900">Works</span>
        </h1>
      </div>
      <div>
        <p className="mx-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </div>
      <div>
        <Image
           src="/portfolio-wide.jpg"
           alt="hero img"
           width={340}
           height={340}
           className="rounded-sm my-20"
                  />
      </div>
      <div></div>
    </div>
  );
}

export default portfolio;