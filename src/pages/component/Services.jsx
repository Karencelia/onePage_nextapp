import React from 'react'


const Services = () => {
  return (
    <div className=' mr-14 '>
      <div className="p-10 flex justify-evenly">
        <div>
          <span>
            <h3>Services</h3>
          </span>
          <h1 className="text-6xl font-bold ">
            What I <span className="text-violet-900">Do</span>
          </h1>
        </div>

        <div className=' w-[800px] text-start  ml-20 '>
          <div className="flex justify-around place-items-center bg-zinc-800  my-5 mx-8  py-8 rounded ">
            <div className="">
              <h3>01/</h3>
            </div>
            <div>
              <i></i>
              <h3 className="text-lg mx-4 font-bold">Design</h3>
            </div>
            <div>
              <p className='p-[10px] w-[380px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit, sed do eiusmod tempor incididunt ut
              </p>
            </div>
          </div>

          <div className="flex justify-around place-items-center bg-zinc-800  my-5 mx-8  py-8 rounded ">
            <div>
              <h3 className="text-xlg">02/</h3>
            </div>
            <div>
              <h3 className="text-lg mx-4">Development</h3>
            </div>
            <div className="">
              <p className='p-[10px] w-[380px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et
              </p>
            </div>
          </div>

          <div className="flex justify-around bg-zinc-800 rounded py-8 my-5 mx-8  place-items-center">
            <div className="px-2">
              <h3 className="text-lg">03/</h3>
            </div>
            <div>
              <h3 className="text-lg mx-4">Marketing</h3>
            </div>
            <div>
              <p className='p-[10px] w-[380px]'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
