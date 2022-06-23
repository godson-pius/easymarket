import React, { useState, useEffect } from "react";
import Axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const run = async () => {
      const response = await Axios.get(`https://eazymarketapi.herokuapp.com/getProducts`);
      setProducts(response.data);
    };
    run();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 text-center text-cyan-400">
        <div className="text-md font-black mb-7">
          All Products
        </div>
        <div>
          <span className='bg-cyan-400 text-white font-black p-2 rounded-md shadow-xl'>
            {products?.length}
            </span>
            </div>
      </div>
      {products.map((product, index) => {
        return (
          <div key={index} className="w-full flex flex-col">
            <div className="bg-transparent border grid grid-cols-2 p-2 mb-3 font-black rounded-md text-center hover:text-black hover:bg-cyan-100 transition duration-500">
              <h1>{product?.name}</h1>
              <h1>${Intl.NumberFormat().format(product?.price)}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
