import React from "react";

function Newsletter() {
  return (
    <div className="w-full text-white py-10 px-8 md:px-20">
      <div className="w-full grid md:grid-cols-2 mx-auto">
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-2xl">
            Want tips & tricks to boost sales?
          </h1>
          <p className="text-slate-400">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-2 w-full rounded-md text-black"
              type="text"
              placeholder="Enter email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium p-2 text-black my-2 mx-2">
              Notify Me
            </button>
          </div>
          <p className='text-slate-400 text-sm'>We care about the protection of your data. <span className='text-[#00df9a]'>Read our privacy policy</span></p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;