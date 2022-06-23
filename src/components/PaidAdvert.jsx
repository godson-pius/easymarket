import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Axios from "axios";

const PaidAdvert = () => {
    const server = "https://eazymarketapi.herokuapp.com";
    
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [owner, setOwner] = useState("")
    const [image, setImage] = useState()

    const updateProduct = async() => {
        let formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('description', description)
        formData.append('owner', owner)
        formData.append('advertImage', image, image.name)

        try {
            await Axios.patch(`${server}/updateAdvert`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
        } catch (e) {
            alert('Failed. Please try again!')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.promise(updateProduct, { pending: 'Please wait...', success: 'Paid advert updated!', error: 'Failed. please try again' })
    }

    return (
        <div>
            <ToastContainer/>
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
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 border border-[#00df9a] rounded-md mb-10"
                />

                <label className="ml-3 text-slate-600 text-sm bg-white absolute mt-[73px] px-3">
                    Product Image
                </label>
                <input
                    id="image"
                    type="file"
                    filename="productImage"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="p-2 border border-[#00df9a] rounded-md text-sm mb-10"
                />

                <label className="ml-3 text-slate-600 text-sm bg-white absolute mt-[149px] px-3">
                    Product Price
                </label>
                <input
                    type="text"
                    id="price"
                    onChange={(e) => setPrice(e.target.value)}
                    className="p-2 border border-[#00df9a] rounded-md text-sm mb-10"
                />

                <label className="ml-3 text-slate-500 text-sm bg-white absolute mt-[228px] px-3">
                    Owner
                </label>
                <input
                    type="text"
                    onChange={(e) => setOwner(e.target.value)}
                    className="p-1 border border-[#00df9a] rounded-md mb-3"
                />


                <textarea onChange={(e) => setDescription(e.target.value)} className="p-2 border border-[#00df9a] rounded-md text-sm mb-10" name="" id=""></textarea>
                <button
                    type="submit"
                    id='addBtn'
                    className="p-2 bg-cyan-300 rounded-md hover:bg-cyan-200 transition duration-700 ease-in-out"
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default PaidAdvert