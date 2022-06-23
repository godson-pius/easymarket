import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import Axios from "axios";

function Advert() {

  const [advert, setAdvert] = useState([]);

  useEffect(() => {
    const getAdvert = async() => {
      const res = await Axios.get(`https://eazymarketapi.herokuapp.com/getAdvert`);
      setAdvert(res.data);
    }
    getAdvert();
  }, []);

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-md shadow-lg ring shadow-gray-400"
          src={ advert?.advertImage }
          alt="Advert Image"
        />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold uppercase">
            PAID ADVERT PRODUCT
          </p>
          <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold py-2">
            { advert?.name }
          </h1>
          <p>
            { advert?.description }
          </p>
          <ReactWhatsapp
            className="bg-black w-[200px] text-center rounded-md my-4 font-medium p-2 text-white hover:bg-[#00df9a] hover:text-black transition duration-700 ease-in-out hover:scale-110 hover:-translate-y-1"
            number={ `${advert?.owner}` }
            message={`Hello, i saw your paid product advert on Easy Market (https://eazymarket.netlify.app). And i am interested in it!`}
          >
            Buy Now
          </ReactWhatsapp>
        </div>
      </div>
    </div>
  );
}

export default Advert;
