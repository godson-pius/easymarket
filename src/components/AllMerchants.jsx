import React, { useState, useEffect } from "react";
import Axios from "axios";
import Merchant from '../Pages/Merchant';

const AllMerchants = () => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    const run = async() => {
      const response = await Axios.get(`https://eazymarketapi.herokuapp.com/getMerchants`);
      setMerchants(response.data);
    };
    run();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 text-center text-cyan-400">
        <div className="text-md font-black mb-7">
          All Merchants
        </div>
        <div>
          <span className='bg-cyan-400 text-white font-black p-2 rounded-md shadow-xl'>
            {merchants?.length}
            </span>
            </div>
      </div>
      {merchants.map((merchant) => {
        return (
          <div className="w-full flex flex-col">
            <div className="bg-transparent border grid grid-cols-2 p-2 mb-3 font-black rounded-md text-center hover:text-black hover:bg-cyan-100 transition duration-500">
            <div>
              <h1>{merchant?.businessname}</h1>
              <span className='text-sm text-slate-500'>{merchant.address}</span>
              </div>
              <div>
              <h1>{merchant?.businessline}</h1>
              <span className='text-sm text-slate-500'>{merchant.email}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllMerchants;
