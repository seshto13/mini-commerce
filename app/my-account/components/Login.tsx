"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  

  const handleSubmit = (event: any) => {
    setUsernameError("");
    setPasswordError("");
    event.preventDefault();
    if (username.trim() == null || username == "") {
      setUsernameError("Please enter the username");
      return;
    } 
    (username.trim() === '' || password.trim() === '')
    if (password.trim() == null || password.trim() == "") {
      setPasswordError("Please enter the password");
      return;
    }
    if (password.length < 6) {
        setPasswordError("Password must be at least 6 characters");
        return;
      }
     if (!/\d/.test(password) || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        setPasswordError('Password must contain at least one number and one symbol');
        return;
      } 
  
    
    // Here you can perform any action you want with the form data, such as sending it to a server
    /*console.log('Form submitted with username:', username, 'and password:', password);*/
    alert("Form submitted successfully");
  };


  const togglePasswordVisibility = () => {
    // setShowPassword(!showPassword);
    setShowPassword(prevState => !prevState);
  };
  
    return (
    <div className="w-[100%] h-screen  text-black border-2 flex items-center justify-center">
      <p className=""></p>
      <form className="w-[80%] md:w-[50%] p-6 rounded-lg"
       onSubmit={handleSubmit}>
        <div className="login-container" id="login">
          <div className="top">
            <header className="text-2xl font-semibold text-black">
              Welcome Back !
            </header>
          </div>
          <br />
          <div className="w-full bg-white text-black border-2 border-gray-300 rounded-xl">
            <input
              type="text"
              className="w-full bg-transparent px-4 p-3 rounded-3xl  border-black"
              id="username"
              placeholder="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
             </div>
            <p className="text-white text-md italic">{usernameError}</p>
         

          <br />

          <div className=" relative">
          <input
            className="shadow appearance-none border-2 border-gray-300 rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            
          />


             <div className="absolute border-none outline-none inset-y-0 right-0 px-3 pb-2 my-3 text-black"
              onClick={togglePasswordVisibility}
            >
              {/* {showPassword ? 'Hide' : 'Show'} */}
              {showPassword ? <FaEyeSlash className="text-black"/> : <FaEye className="text-black"/>}

            </div>
            {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
        </div>

<br />
        <div className="border-2 border-gray-300 rounded-xl">
          <button
            className="w-full bg-white text-black  border-black hover:bg-[#4CAF50] hover:text-white font-semibold py-4 px-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>

          <div className="w-full justify-between md:flex text-white mx-2">
            <div className="flex gap-2 mt-2">
              <input type="checkbox" id="login-check" />
              <div className="text-black"> Remember Me</div>
            </div>
            <div className="text-blue-500 mt-2 cursor-pointer hover:text-[#4CAF50]">Forgot Password?</div>
          </div>
          <br />
          <div className="text-center">
            <p className="text-black">{`Don't have an account?`} </p>
            <Link href="/register" className="text-xl text-green-500 mb-4 hover:text-green-800">
              Register
            </Link>
          </div>
        </div>
      </form>

     
    </div>
  );
};

export default Login;
