import React, { useState } from "react";
import userAxios from "../../../Axios/userAxios.js";
import { Await, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from '@react-oauth/google';

import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);


        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const loginForm = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email Address is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    try {
      const res = await userAxios.post("/login", { email, password });
      const result = res.data;
      console.log(result);
      if (result.token) {
        const token = result.token;
        localStorage.setItem("token", token)
        toast.success(res.data.message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: true,
        });
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        
        if (error.response.data.message) {
          if (Array.isArray(error.response.data.message)) {
            setErrMsg(error.response.data.message.join(", "));
          } else {
            setErrMsg(error.response.data.message.toString());
          }
          
        } else {
          setErrMsg("An error occurred while processing your request.");
        }
      } else {
        setErrMsg("An error occurred while processing your request.");
      }
    }
    
  };

  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
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
          LOGIN
        </h2>

        <form className="space-y-6" onSubmit={loginForm}>


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
              LOGIN
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-sky-500 hover:text-blue-200"
          >
            SIGN UP
          </a>
        </p>
      </div>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

    </div>
  )
}
export default UserLogin;