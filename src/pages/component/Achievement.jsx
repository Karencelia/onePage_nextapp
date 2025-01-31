import React from "react"
const Achievement = () =>{
  return (
    <div className="justify-around my-4">
      <div>
        <h3 className="mx-6">Achievements</h3>
      </div>
      <div className="">
        <h1 className="text-5xl font-bold mx-7">
          Awa<span className="text-violet-900">rds</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 mx-6 rounded  px-2 py-2">
        <div className=" grid bg-zinc-900 rounded px-4 py-4">
          <h4 className="font-bold">Best Designer of the Month</h4>
          <h6>2023</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />elit, sed do
            eiusmod tempor incididunt ut labore <br /> et dolore
          </p>
        </div>
        <div className="bg-zinc-900 rounded px-4 py-4">
          <h4 className="font-bold text-lg">The True Gem</h4>
          <h6>2023</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div className="bg-zinc-900 rounded px-4 py-4">
          <h4>First Class Performer</h4>
          <h6>2022</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="bg-zinc-900 rounded px-4 py-4">
          <h4>Customers Favourite</h4>
          <h6>2021</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
    </div>
  );
}

export default Achievement