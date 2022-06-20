import React, { useState, useEffect } from "react";
import Axios from "axios";

const MerchantProducts = ({ id }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const run = async () => {
      const merchant = JSON.parse(localStorage.getItem("merchant"));
      const response = await Axios.get(
        `https://eazymarketapi.herokuapp.com/getMerchantProducts/${merchant._id}`
      );
      setProducts(response.data);
    };
    run();
  }, []);
  return (
    <div>
      {products.map((product) => {
        return (
            <div className="w-full flex flex-col">
          <div className="bg-transparent border grid grid-cols-2 p-2 mb-3 font-black rounded-md text-center hover:text-black hover:bg-cyan-100 transition duration-500">
            <h1>{ product?.name }</h1>
            <h1>${ Intl.NumberFormat().format(product?.price) }</h1>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default MerchantProducts;
