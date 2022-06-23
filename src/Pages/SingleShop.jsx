import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Axios from "axios";
import ReactWhatsapp from "react-whatsapp";
import Loader from "../components/Loader";
import SingleProductLoader from "../components/SingleProductLoader";

const SingleShop = () => {
  let params = useParams();
  const server = "https://eazymarketapi.herokuapp.com/";
  const [product, setProduct] = useState();
  const [owner, setOwner] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const response = await Axios.get(
        `https://eazymarketapi.herokuapp.com/getProduct/${params.id}`
      ).catch((err) => console.log(err));

      setProduct(response.data);

      const getMerchant = await Axios.get(`https://eazymarketapi.herokuapp.com/getMerchant/${response.data.owner}`).catch((err) => console.log(err));

      setOwner(getMerchant.data);

      setLoading(!loading);
    };

    run();
 
  }, []);

  return (
    <>
      <Banner page={params.product} />
      <div className="w-full bg-slate-200 justify-center flex flex-col px-10 text-center md:text-left md:px-52 md:py-20">

      {loading ? <SingleProductLoader /> : (
        <div className="grid md:grid-cols-3 gap-8 bg-gradient-to-r from-cyan-400 to-blue-400 p-10 rounded-3xl mt-[-50px] mb-10 md:mb-0 md:mt-[-130px] text-white shadow-2xl">
        {/* First Grid */}
        <div className="mt-20">
          <h1 className="text-black text-2xl font-black">{ product?.name } </h1>
          <p className="text-slate-200">Product Price: $<b>{ Intl.NumberFormat().format(product?.price) }</b></p>
          <p className="text-slate-200">Merchant: { owner?.businessname }</p>
        </div>{" "}
        {/* End of First Grid */}
        {/* Second Grid */}
        <div className="">
          <img
            className="rounded-full border-white border-y-2 shadow-2xl w-64 md:auto mx-auto"
            src={ product?.productImage }
            alt="Product Image"
          />
        </div>{" "}
        {/* End of Second Grid */}
        {/* Third Grid */}
        <div className="mt-20 md:text-right">
          <h1 className="text-black text-2xl font-black">
            Contact Merchant{" "}
          </h1>
          <p className="text-slate-200">Business Line: +{ owner?.businessline }</p>
          <ReactWhatsapp
            className="bg-slate-200 mx-auto rounded-md my-4 font-medium p-2 text-black hover:bg-white transition duration-700 ease-in-out hover:scale-110 hover:-translate-y-1"
            number={ `${owner?.businessline}` }
            message={`Hello, i saw your product (https://eazymarket.netlify.app${ useLocation().pathname }) on Easy Market. And i am interested in it! \n\n\n https://eazymarket.netlify.app`}
          >
            Drop message on Whatsapp
          </ReactWhatsapp>
        </div>{" "}
        {/* End of Third Grid */}
      </div>
      ) }
        
      </div>
    </>
  );
};

export default SingleShop;
