import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userAxios from "../../../Axios/userAxios.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); // State to store error messages
  const navigate = useNavigate();

  const signUpForm = (event) => {
    event.preventDefault();
    setEmailError("");
    setNameError("");
    setPhoneError("");
    setPasswordError("");
    setErrorMsg(""); // Clear any previous error message

    if (!name) {
      setNameError("User Name is required");
      return;
    }

    if (!email) {
      setEmailError("Email Address is required");
      return;
    }

    if (!phone) {
      setPhoneError("Phone is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    userAxios
      .post("/register", { name, email, phone, password })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: true,
        });
        navigate("/login");
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.message;
          setErrorMsg(errorMessage); // Set the error message
          toast.error(errorMessage, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: true,
          });
        } else if (error.request) {
          setErrorMsg("Network Error: Please check your internet connection.");
        } else {
          setErrorMsg("An error occurred while processing your request.");
        }
      });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-900">
      <div
        className="absolute inset-0 bg-black opacity-70"
        style={{ zIndex: "-1" }}
      ></div>
      <img
        className="absolute inset-0 w-full h-full z-0 opacity-30"
        src="/Images/register.jpg"
        alt="Background"
      />

      <div className="relative z-10 w-full max-w-md px-6 py-12 bg-transparent border-2 border-amber-500 rounded-lg">
        <h2 className="mb-10 text-center text-3xl font-bold text-amber-500">
          SIGN UP
        </h2>

        <form className="space-y-6" onSubmit={signUpForm}>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="username"
              className="w-full py-2 text-white bg-gray-100 bg-opacity-30 rounded-md shadow-sm focus:ring-1 focus:ring-amber-500 focus:outline-none text-center"
              onChange={(e) => setName(e.target.value)}
              placeholder="User Name"
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              className="w-full py-2 text-white bg-gray-100 bg-opacity-30 rounded-md shadow-sm focus:ring-1 focus:ring-amber-500 focus:outline-none text-center"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          <div>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className="w-full py-2 text-white bg-gray-100 bg-opacity-30 rounded-md shadow-sm  focus:ring-1 focus:ring-amber-500 focus:outline-none text-center"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />
            {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
          </div>

          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="w-full py-2 text-white bg-gray-100 bg-opacity-30 rounded-md shadow-sm focus:ring-1 focus:ring-amber-500 focus:outline-none text-center"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/4 py-2 text-sm font-semibold rounded-2xl text-white bg-gradient-to-r from-amber-500 to-amber-300 hover:from-slate-400 hover:to-slate-50 "
            >
              Sign up
            </button>
          </div>

          {/* Display error message if it exists */}
          {errorMsg && (
            <div className="text-red-500 text-sm text-center">{errorMsg}</div>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-gray-300">
          Have an account?{" "}
          <a
            href="/login"
            className="font-semibold leading-6 text-sky-500 hover:text-blue-200"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default UserRegister;
