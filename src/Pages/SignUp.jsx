import React, { useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import Typed from "react-typed";
import Axios from 'axios';

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [businessname, setBusinessname] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [businessline, setBusinessline] = useState();
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [address, setAddress] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const conf = confirm("Please confirm your details! We are proceeding to register you.");
    if (conf) {
      const data = {
        fullname,
        businessname,
        phone,
        email,
        password,
        businessline,
        instagram,
        facebook,
        address,
      };
  
      const response = await Axios.post("https://eazymarketapi.herokuapp.com/addMerchant", data)
      .catch(err => alert('Failed to register. Please try again.'))
  
      alert("Registered successfully!")
  
      // Set to empty strings to clear the form
      setFullname("")
      setBusinessname("")
      setPhone("")
      setEmail("")
      setPassword("")
      setBusinessline("")
      setInstagram("")
      setFacebook("")
      document.getElementById("form").reset()
    }

  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-200">
              Register your{" "}
              <Typed
                strings={["Brand.", "Business."]}
                typeSpeed={120}
                backSpeed={140}
                loop
                className="text-[#00df9a] font-black"
              />
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600"></p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSignUp} id='form'>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="fullname" className="sr-only">
                  Fullname
                </label>
                <input
                  onChange={(e) => setFullname(e.target.value)}
                  id="fullname"
                  name="fullname"
                  type="text"
                  autoComplete="fullname"
                  value={fullname}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 text-gray-300 rounded-t-md focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Fullname"
                />
              </div>

              <div>
                <label htmlFor="buisnessname" className="sr-only">
                  Business Name
                </label>
                <input
                  onChange={(e) => setBusinessname(e.target.value)}
                  id="buisnessname"
                  name="buisnessname"
                  type="text"
                  autoComplete="current-buisnessname"
                  value={businessname}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Business Name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  name="phone"
                  type="number"
                  autoComplete="current-phone"
                  value={phone}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Phone Number e.g +234..."
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="current-email"
                  value={email}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-Password"
                  value={password}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>

              <div>
                <label htmlFor="businessline" className="sr-only">
                  Business Line
                </label>
                <input
                  onChange={(e) => setBusinessline(e.target.value)}
                  id="businessline"
                  name="businessline"
                  type="number"
                  autoComplete="current-businessline"
                  value={businessline}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Business Line e.g +234..."
                />
              </div>

              <div>
                <label htmlFor="instagram" className="sr-only">
                  Instagram Handle
                </label>
                <input
                  onChange={(e) => setInstagram(e.target.value)}
                  id="instagram"
                  name="instagram"
                  type="text"
                  autoComplete="current-instagram"
                  value={instagram}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Instagram Handle"
                />
              </div>

              <div>
                <label htmlFor="facebook" className="sr-only">
                  Facebook Handle
                </label>
                <input
                  onChange={(e) => setFacebook(e.target.value)}
                  id="facebook"
                  name="facebook"
                  type="text"
                  autoComplete="current-facebook"
                  value={facebook}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                  placeholder="Facebook Handle"
                />
              </div>

              <div>
                <label htmlFor="buisnessname" className="sr-only">
                  Address
                </label>
                <textarea
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 bg-transparent placeholder-gray-400 rounded-b-md text-gray-300 focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] focus:z-10 sm:text-sm"
                ></textarea>
              </div>
            </div>
            <p className='text-indigo-300 text-center text-sm'>Remember to add your country code to the numbers provided.</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-200"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#00df9a] hover:text-white"
                >
                  Already have an account? <a className="text-[#00df9a]" href="/auth">Sign in</a>
                </a>
              </div>
            </div>

            

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 bg-[#00df9a] rounded-md my-4 font-medium p-2 text-black hover:bg-white transition duration-700 ease-in-out hover:scale-110 hover:-translate-y-1"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-green-900 group-hover:text-[#00df9a]"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
