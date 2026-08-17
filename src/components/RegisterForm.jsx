import React from "react";
import { useAuth } from "../hooks/useAuth";


const RegisterForm = () => {

  const {
    handleSubmit,
    register,
    errors,
    registerHandler,
    setToggle,
  } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
      <div className="w-full max-w-md bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-slate-400 mt-2">
            Create your account to get started
          </p>
        </div>

        <form onSubmit={handleSubmit(registerHandler)} className="space-y-5">

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-300 mb-2"
              
            >
              Username
            </label>

            <input
           type="text"
           id="username"
           placeholder="Enter your username"
           autoComplete="username"
           {...register("username", {
             required: "Username is required",
           })}
           className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
         />
                   </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-2"
              
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
              {...register("email",{
                required:"email is req",
               
              })}
            />
          </div>

         {/* Password */}
<div>
  <label
    htmlFor="password"
    className="block text-sm font-medium text-slate-300 mb-2"
  >
    Password
  </label>

  <input
    type="password"
    id="password"
    placeholder="Enter your password"
    autoComplete="new-password"
    {...register("password", {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    })}
    className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
  />

  {errors.password && (
    <p className="text-red-400 text-sm mt-1">
      {errors.password.message}
    </p>
  )}
</div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Already have an account?{" "}
          <button
  type="button"
  onClick={() => setToggle((prev) => !prev)}
  className="text-blue-500 hover:text-blue-400 font-medium"
>
  login
</button>
        </p>

      </div>
    </div>
  );
};

export default RegisterForm;