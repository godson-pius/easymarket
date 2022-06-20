import React from "react";
import Axios from "axios";

const AddProduct = () => {
  const server = "https://eazymarketapi.herokuapp.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let org = JSON.parse(localStorage.getItem("merchant"));
    let productImage = document.getElementById("image").files[0];
    let productname = document.getElementById("productname").value;
    let price = document.getElementById("price").value;
    let addBtn = document.getElementById("addBtn");
    addBtn.innerHTML = "Adding...";

    var formData = new FormData();
    formData.append("name", productname);
    formData.append("price", price);
    formData.append("owner", org._id);
    formData.append("productImage", productImage, productImage.name);

    const res = await Axios.post(`${server}/addProduct`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    res.status === 200
      ? alert("Product Added Successfully")
      : alert("Product Not Added");

    addBtn.innerHTML = "Add Product";
  };
  return (
    <div>
      <form
        className="flex flex-col mt-7"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label className="ml-3 text-slate-600 text-sm bg-white absolute mt-[-10px] px-3">
          Product Name
        </label>
        <input
          type="text"
          id="productname"
          className="p-2 border border-[#00df9a] rounded-md mb-10"
        />

        <label className="ml-3 text-slate-600 text-sm bg-white absolute mt-[73px] px-3">
          Product Image
        </label>
        <input
          id="image"
          type="file"
          filename="productImage"
          className="p-2 border border-[#00df9a] rounded-md text-sm mb-10"
        />

        <label className="ml-3 text-slate-600 text-sm bg-white absolute mt-[149px] px-3">
          Product Price
        </label>
        <input
          type="text"
          id="price"
          className="p-2 border border-[#00df9a] rounded-md text-sm mb-10"
        />

        <label className="ml-3 sr-only text-slate-500 text-sm bg-white absolute mt-[228px] px-3">
          Onwer
        </label>
        <input
          type="hidden"
          disabled
          readOnly
          className="p-1 border border-[#00df9a] rounded-md mb-3"
        />
        <button
          type="submit"
          id='addBtn'
          className="p-2 bg-cyan-300 rounded-md hover:bg-cyan-200 transition duration-700 ease-in-out"
        >
          Add Product to market
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
