import React, { useState, useEffect } from "react";
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
          <a href={`/product/${advert?._id}/${advert?.name}`} className="bg-black w-[200px] text-center rounded-md my-4 font-medium p-2 text-white hover:bg-[#00df9a] hover:text-black transition duration-700 ease-in-out hover:scale-110 hover:-translate-y-1">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Advert;
