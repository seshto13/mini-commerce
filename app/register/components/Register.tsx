"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: any) => {
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    event.preventDefault();
    if (firstName.trim() == null || firstName == "") {
      setFirstNameError("Please enter the username");
      return;
    }

    if (lastName.trim() == null || lastName == "") {
      setLastNameError("Please enter the username");
      return;
    }

    if (email.trim() == null || email == "") {
      setEmailError("Please enter the username");
      return;
    }

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
    <div className="w-[100%] h-screen  bg-white border-2 flex items-center justify-center">
      <p className=""></p>

      <form
        className="w-[80%] md:w-[50%] p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="login-container" id="login">
          <div className="top">
            <header className="text-center text-3xl font-semibold text-white mt-4 md:mt-10">
              Welcome
            </header>
          </div>
          <br />

          <div className="w-full bg-white text-black border-2 border-gray-300 rounded-xl ">
            <input
              type="text"
              className="w-full bg-transparent px-4 p-3 outline-none"
              id="firstName"
              placeholder="FirstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <p className="text-white text-md italic">{firstNameError}</p>

          <br />

          <div className="w-full bg-white text-black  border-2 border-gray-300 rounded-xl ">
            <input
              type="text"
              className="w-full bg-transparent px-4 p-3 outline-none rounded-3xl"
              id="LastName"
              placeholder="LastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
          <p className="text-white text-md italic">{lastNameError}</p>

          <br />

          <div className="w-full bg-white text-black  border-2 border-gray-300 rounded-xl ">
            <input
              type="email"
              className="w-full bg-white bg-transparent px-4 p-3 rounded-3xl outline-none"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <p className="text-white text-md italic">{emailError}</p>
        </div>
        <br />

        <div className="relative">
          <input
            className="w-full bg-white border-2 border-gray-300 rounded-xl  px-4 p-3 outline-none"
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
            {passwordError && <p className="text-white text-md italic">{passwordError}</p>}
        </div>
       
    
        <br />
        <div className="w-full bg-white text-black p-4 border-2 border-gray-300 rounded-xl text-center hover:bg-green-500 font-semibold hover:text-white ">
          <input
            type="submit"
            className="w-full outline-none cursor-pointer"
            value="Create Account"
          />
        </div>

        <br />
        <div className="flex items-center justify-center gap-2 text-center">
          <p className="text-black">Already have an account? </p>
          
          <Link
            href="/my-account
            "
            className="text-l text-lime-500 hover:text-lime-700 "
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
