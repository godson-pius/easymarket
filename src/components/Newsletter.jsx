import React, {useState} from "react";
import Axios from 'axios';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Newsletter() {
    const [email, setEmail] = useState()
    const [text, setText] = useState("Notify Me")

    const handleSubmit = async () => {
        setText("Please wait...")
        const data = {
            email
        }

        try {
            await Axios.post('https://eazymarketapi.herokuapp.com/addSubscriber', data)
            toast.success('You will start receiving mails from us.')
            setText("Notify Me")
            setEmail("")
        } catch (e) {
            toast.error('Failed! Please try again.')
            setText("Notify Me")
            setEmail("")
        }
    }

    return (
        <>
            <ToastContainer/>
            <div className="w-full text-white py-10 px-8 md:px-20">
                <div className="w-full grid md:grid-cols-2 mx-auto">
                    <div className="flex flex-col justify-center">
                        <h1 className="font-bold text-2xl">
                            Want tips & tricks to boost sales?
                        </h1>
                        <p className="text-slate-400">
                            Sign up to our newsletter and stay up to date.
                        </p>
                    </div>
                    <div className="my-4">
                        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                            <input
                                className="p-2 w-full rounded-md text-black"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                            <button onClick={handleSubmit}
                                    className="bg-[#00df9a] w-[200px] rounded-md font-medium p-2 text-black my-2 mx-2">
                                {text}
                            </button>
                        </div>
                        <p className='text-slate-400 text-sm'>We care about the protection of your data. <span
                            className='text-[#00df9a]'>Read our privacy policy</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Newsletter;
