import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import Loader from "./Loader";
import Axios from "axios";

function Market() {
const [open, setOpen] = useState(false);
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

const closeModal = () => {
setOpen(false);
}

useEffect(() => {
  const run = async () => {
    const response = await Axios.get("https://eazymarketapi.herokuapp.com/getProductsLimited");
    setLoading(!loading)
    setProducts(response.data);
  };
  run();
}, []);

return (
<div className="w-full py-20 px-10 md:px-20 bg-white">
      
        {loading ? <Loader /> : (
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
          {products.map((doc, index) => {
            return (
              <div key={index} className="w-full border p-5 rounded-2xl hover:scale-110 duration-500 hover:bg-gradient-to-r from-cyan-500 to-[#00df9a] hover:text-white hover:shadow-lg">
                <div className="flex justify-between">
                  <Transition appear show={open} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={closeModal}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center p-4 text-center">
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-100 border p-6 text-left align-middle shadow-xl transition-all">
                              <img
                                className="w-64 mx-auto py-4 rounded-xl"
                                src={ doc?.productImage }
                              />
                            </Dialog.Panel>
                          </Transition.Child>
                        </div>
                      </div>
                    </Dialog>
                  </Transition>
                  <div className="border p-2 rounded-full">
                    <FiChevronsLeft
                      size={15}
                      cursor="pointer"
                    />
                  </div>

                  <div className="border p-2 rounded-full">
                   <FiChevronsRight
                      size={15}
                      cursor="pointer"
                    /> 
                  </div>
                </div>

                <img className='h-[230px] bg-cover shadow-xl my-5 mx-auto rounded-xl bg-transparent' src={doc.productImage} alt="" />

                <h1 className="font-bold text-center text-xl uppercase">
                  <a href={`/product/${doc?._id}/${doc?.name}`}>{doc?.name}</a>
                </h1>
                <p className="text-center text-md font-medium text-[#00df9a]">
                  ${Intl.NumberFormat().format(doc?.price)}
                </p>
              </div>
            );
          })}
        </div>
        )}

      </div>
);
}

export default Market;