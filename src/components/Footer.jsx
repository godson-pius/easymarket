import React from "react";

function Footer() {
  return (
    <div className="w-full py-12">
      <div className="max-w-[1240px] mx-auto text-center px-4">
        <div className="text-white">
          <h1 className="font-bold text-3xl md:text-5xl text-[#00df9a]">Easy Market.</h1>
          {/* <p className="text-slate-500 py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aperiam
            voluptatem sapiente omnis repudiandae consequatur culpa, ipsum
            eligendi autem saepe odit quam, error ullam fuga? Tempore veniam
            consequuntur assumenda amet.
          </p> */}
          <p className="text-gray-300 text-sm border border-indigo-400 rounded-full font-bold mt-5 w-72 mx-auto p-1 hover:bg-indigo-600 transition duration-700 ease-in-out">Powered by: <a className="text-indigo-300" href="https://www.worldbraintechnology.com">World Brain Technology</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
