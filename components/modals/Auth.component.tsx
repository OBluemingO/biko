"use client"
import React, { useState } from "react";
import AuthInput from '../inputs/auth.input';
import { motion, AnimatePresence } from 'framer-motion'

const AuthModal = () => {
  const [modeLogin, setModeLogin] = useState(true)

  const handleChangeMode = () => {
     setModeLogin(( prev: boolean ) => !prev)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const show = true

  return (
    <motion.div 
    // initial={{top: '-50%'}}
    // animate={{top: show ? '50%' : '-50%' }} 
    className="fixed left-1/2 top-1/2 z-[5000000] flex h-3/4  max-h-[567px] w-1/2 max-w-[792px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white">
      <div className="h-full w-1/2  p-4">
        <div className="flex h-full w-full flex-col justify-around rounded-3xl bg-biko-d bg-cover text-white ">
          <div>
            <div className="mx-auto w-5/6 pt-20 text-4xl font-semibold">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="mx-auto w-5/6 pt-5 text-body">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            </div>
          </div>
          <div className="mx-auto flex h-1/4 w-5/6 flex-col justify-around rounded-lg bg-slate-900 px-4 py-2 text-white">
            <div className="text-detailBody">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              sapiente impedit cum.
            </div>
            <div className="flex gap-3">
              <div className="h-[35px] w-[35px] rounded-full bg-white"></div>
              <div className="">
                <h1 className="text-sm">Lorem, ipsum.</h1>
                <p className="text-sm text-body">Lorem consectetur.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {modeLogin ? (
          <motion.div
            key="modal-login"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: 50,
              opacity: 0,
            }}
            className="h-full w-1/2  p-4"
          >
            <div className="h-full w-full rounded-3xl  text-black">
              <div className="mx-auto w-5/6 pt-8">
                <h1 className="text-4xl font-bold">Get started</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <AuthInput
                  {...{ name: "Email", type: "email", place_holder:'example@gmail.com' }}
                  key="input-username"
                />
                <AuthInput
                  {...{ name: "Password", type: "password", place_holder:'xxxxxxxxxx' }}
                  key="input-password"
                />

                <button
                  type="submit"
                  className="mx-auto mt-5 grid h-[50px] w-5/6 cursor-pointer select-none place-items-center rounded-[60px] border-[1px] border-[#414141]  bg-[#212121] text-center text-body "
                >Login</button>
              </form>
              <div className="mx-auto mt-4 w-5/6 text-center">or</div>
              <div className="mx-auto mt-5 w-5/6 text-center">
                Don't Have an account?{" "}
                <button className="underline" onClick={handleChangeMode}>Register</button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="modal-register"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: 50,
              opacity: 0,
            }}
            className="h-full w-1/2  p-4"
          >
            <div className="h-full w-full rounded-3xl  text-black">
              <div className="mx-auto w-5/6 pt-8">
                <h1 className="text-4xl font-bold">Get started</h1>
                <h4 className="text-body">create your account now</h4>
              </div>
              <form onSubmit={handleSubmit}>
                <AuthInput
                  {...{ name: "Full Name", type: "text" }}
                  key="input-full-name"
                />
                <AuthInput
                  {...{ name: "Email", type: "email" }}
                  key="input-username"
                />
                <AuthInput
                  {...{ name: "Password", type: "password" }}
                  key="input-password"
                />

                <button
                  type="submit"
                  className="mx-auto mt-5 grid h-[50px] w-5/6 cursor-pointer select-none place-items-center rounded-[60px] border-[1px] border-[#414141]  bg-[#212121] text-center text-body "
                >
                  Register
                </button>
              </form>
              <div className="mx-auto mt-4 w-5/6 text-center">or</div>
              <div className="mx-auto mt-5 w-5/6 text-center">
                Have an account?{" "}
                <button className="underline" onClick={handleChangeMode}>
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AuthModal;