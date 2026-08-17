import React from "react";
import { useAuth } from "../hooks/useAuth";


const LoginForm = () => {

   const {
    handleSubmit,
    register,
    errors,
    loginHandler,
    setToggle,
  } = useAuth();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4">
      <div className="w-full max-w-md bg-[#1e293b] border border-slate-700 rounded-2xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-2">
            Login to continue to your account
          </p>
        </div>

        <form className="space-y-5"
        onSubmit={handleSubmit(loginHandler)}
        >

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
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
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
              name="password"
              placeholder="Enter your password"
               autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
              })}
              
              className="w-full px-4 py-3 bg-[#0f172a] border border-slate-700 rounded-lg text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />
             {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:text-blue-400"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-slate-400 mt-6">
          Don't have an account?{" "}
          <button
  type="button"
  onClick={() => setToggle((prev) => !prev)}
  className="text-blue-500 hover:text-blue-400 font-medium"
>
  Create account
</button>
        </p>

      </div>
    </div>
  );
};

export default LoginForm;