import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("Form submitted successfully");
  };

  return (
    <div className="h-screen items-center pt-10 flex flex-col bg-gray-100">
      <h1 className="text-4xl py-2 font-bold">Create Account</h1>
      <h1 className="text-2xl pb-6 text-gray-400">
        Example of form validation built with React.
      </h1>
      <form
        className="h-screen items-center pt-10 flex flex-col"
        onSubmit={handleSignUp}>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          className="h-16 w-[285px] pl-[16px] mb-5 focus:outline-none focus:placeholder-transparent"></input>
        <input
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="h-16 w-[285px] pl-[16px] mb-5 focus:outline-none focus:placeholder-transparent"></input>
        <input
          required
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="h-16 w-[285px] pl-[16px] mb-5 focus:outline-none focus:placeholder-transparent"></input>
        <button
          type="submit"
          className="h-12 w-[285px] text-[15px] mt-5 text-white bg-[#545a6a] rounded-md">
          CREATE ACCOUNT
        </button>
        {error && <span className="text-red-500 mt-4">{error}</span>}
      </form>
    </div>
  );
};

export default SignUp;
