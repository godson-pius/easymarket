import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { Tab } from "@headlessui/react";
import MerchantProducts from "../components/MerchantProducts";
import AddProduct from "../components/AddProduct";
import EditAccount from "../components/EditAccount";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Merchant = () => {
  const [currentMerchant, setCurrentMerchant] = useState({});

  useEffect(() => {
    const merchant = localStorage.getItem("merchant");
    setCurrentMerchant(JSON.parse(merchant));
  }, []);

  let [categories] = useState({
    "All Product": [
      {
        id: 1,
        content: (
          <div>
            <div className="w-full text-md font-black mb-7">All Products</div>
            <MerchantProducts />
          </div>
        ),
      },
    ],
    "Add Product": [
      {
        id: 1,
        content: (
          <div>
            <div className="text-md font-black">Add product</div>
            <AddProduct />
          </div>
        ),
      },
    ],
    "Edit Account": [
      {
        id: 1,
        content: (
          <div>
            <div className="text-md font-black">Edit Account</div>
            <EditAccount />
          </div>
        ),
      },
    ],
  });

  return (
    <>
      <Banner page={`${currentMerchant?.businessname} Dashboard`} />
      <div className="w-full justify-center flex bg-gradient-to-r from-cyan-400 to-blue-400 md:px-20 px-5">
        <div className="w-full px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative rounded-md p-3">
                        {post.content}
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default Merchant;
