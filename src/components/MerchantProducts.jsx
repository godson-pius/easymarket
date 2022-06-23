import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
    run().then(r => console.log(r));
  }, []);

  const deleteProduct = async(id) => {
    try {
      await Axios.delete(`https://eazymarketapi.herokuapp.com/deleteProduct/${id}`)
      console.log('done')
    } catch (e) {
      console.log('failed')
    }
  }

  const handleDelete = (id) => {
    let conf = confirm("The system is about deleting this product...")
    if (conf) {
      toast.promise(deleteProduct(id), { pending: 'Please wait...', success: 'Product deleted! Refresh page', error: 'Failed. please try again' })
    }
  }
  return (
    <div>
      <ToastContainer />
      {products.map((product, index) => {
        return (
            <div key={index} className="w-full flex flex-col">
          <div className="bg-transparent border grid grid-cols-2 p-2 mb-3 font-black rounded-md text-center hover:text-black hover:bg-cyan-100 transition duration-500">
            <h1>{ product?.name }</h1>
            <div>
              <h1>${ Intl.NumberFormat().format(product?.price) }</h1>
              <button className={'text-red-700 font-black text-sm hover:text-red-900'} onClick={() => handleDelete(product?._id)}>Delete Product</button>
            </div>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default MerchantProducts;
