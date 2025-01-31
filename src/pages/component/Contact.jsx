import React from "react";

const Contact = () => {
  return (
    <div className="mx-6 my-4">
      <div>
        <h3>Contact</h3>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Let's Talk</h1>
      </div>
      <div className="flex font-bold w-full">
        <div className="mx-6 mr-10 flex-row">
          <h6>Email:</h6>
          <h3 className="text-2xl">contact@flatheme.net</h3>
        </div>
        <div className="">
          <h6>Call:</h6>
          <h3 className="text-2xl">+123 456 7890</h3>
        </div>
      </div>
      <div className="bg-black mx-6 ">
        <form>
          <div className="flex">
            
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="bg-zinc-900 px-4 py-2 rounded-md w-full mr-2"
              />
          
            
              <input
                type="text"
                name="email"
                id="email"
                placeholder="E-mail"
                className="bg-zinc-900 px-4 py-2  rounded-md w-full ml-2 "
              />
            
          </div>
          <div className="my-4">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="bg-zinc-900 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className=" ">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="bg-zinc-900 w-full h-32 px-2 py-2 rounded-md"
            ></textarea>
          </div>
          <div>
            <button className="capitalise bg-zinc-900 rounded-lg px-4 py-2 ">
              Send message
            </button>
          </div>
        </form>
        <div className="flex  mt-4 rounded-md ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126850.86171341006!2d3.3248149569439014!3d6.510363996992637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1737633092480!5m2!1sen!2sng"
            width={1000}
            height={450}
            className="rounded-xl object-fill"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

