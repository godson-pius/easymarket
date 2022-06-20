import React, { useState, useEffect } from "react";
import Axios from "axios";

const EditAccount = () => {
  const [businessline, setBusinessline] = useState();
  const [businessname, setBusinessname] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  const handleUpdate = async (e) => {
    e.preventDefault();
    let merchant = JSON.parse(localStorage.getItem("merchant"));
    const conf = confirm(
      "Please confirm your details! We are proceeding to updating your account."
    );
    if (conf) {
      const data = {
        businessname,
        email,
        businessline,
        address,
      };

      const response = await Axios.patch(
        `https://eazymarketapi.herokuapp.com/updateMerchant/${merchant?._id}`,
        data
      ).catch((err) => alert("Failed to update account. Please try again."));

      alert("Account Updated successfully!");

      // Set to empty strings to clear the form
      setBusinessname("");
      setPhone("");
      setEmail("");
      setBusinessline("");
      document.getElementById("form").reset();
    }
  };

  return (
    <div>
      <form className="flex flex-col mt-7" onSubmit={handleUpdate}>
        <label className="ml-3 text-slate-600 text-sm bg-white absolute mt-[-10px] px-3">
          Business Name
        </label>
        <input
          type="text"
          value={businessname}
          onChange={(e) => setBusinessname(e.target.value)}
          className="p-2 border border-[#00df9a] rounded-md mb-10"
        />

        <label className="ml-3 text-slate-600 text-sm bg-white absolute mt-[73px] px-3">
          Business Line
        </label>
        <input
          type="text"
          value={businessline}
          onChange={(e) => setBusinessline(e.target.value)}
          className="p-2 border border-[#00df9a] rounded-md text-sm mb-10"
        />

        <label className="ml-3 text-slate-600 text-sm bg-white absolute mt-[149px] px-3">
          Email Address
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-[#00df9a] rounded-md text-sm mb-10"
        />

        <label className="ml-3 text-slate-500 text-sm bg-white absolute mt-[228px] px-3">
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-1 border border-[#00df9a] rounded-md mb-3"
        />

        <button
          type="submit"
          className="p-2 bg-cyan-300 rounded-md hover:bg-cyan-200 transition duration-700 ease-in-out"
        >
          Update Account
        </button>
      </form>
    </div>
  );
};

export default EditAccount;
