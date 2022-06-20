import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { Tab } from "@headlessui/react";
import AllProducts from '../components/AllProducts';
import AllMerchants from '../components/AllMerchants';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Admin = () => {
  const [currentMerchant, setCurrentMerchant] = useState({});

  useEffect(() => {
    const merchant = localStorage.getItem("merchant");
    setCurrentMerchant(JSON.parse(merchant));
  }, []);

  let [categories] = useState({
    "All Products": [
      {
        id: 1,
        content: (
          <div className='w-full'>
            <AllProducts />
          </div>
        ),
      },
    ],
    "All Merchants": [
      {
        id: 1,
        content: (
          <div>
            <AllMerchants />
          </div>
        ),
      },
    ],
    
    "Add Paid Advert": [
      {
        id: 3,
        content: (
          <div>
            <AllMerchants />
          </div>
        ),
      },
    ],
  });

  return (
    <>
      <Banner page={`Manager Dashboard`} />
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

export default Admin;
