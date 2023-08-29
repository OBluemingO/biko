"use client";
import React, { useEffect, useRef, useState } from "react";
import AuthInput from "../inputs/input.global";
import { loginAuth } from "../../apis";
import { motion, AnimatePresence } from "framer-motion";
import { useModalStore } from "../../stores/store";
import { SubmitHandler, useForm } from "react-hook-form";
import { TRegisterGroup } from "../../typs/Form";
import { signIn } from "next-auth/react";

const AuthModal = () => {
  
    const { handleSubmit:formHook,  formState: { errors }, watch, register, reset } = useForm()
    const modal_auth = useModalStore((state) => state.modal_auth);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const action_modal_auth = useModalStore((state) => state.action_modal_auth);
    const [loginMode, setLoginMode] = useState(true);

    const handleSubmit: SubmitHandler<TRegisterGroup> = async(data:TRegisterGroup) => {
      if(!('password' in data)) return
      await signIn("credentials", { username: data.email, password: data.password })
    };

    useEffect(() => {
        if (modal_auth) document.documentElement.style.overflow = "hidden";
        else document.documentElement.style.overflow = "";
        const handleClickModal = (e: MouseEvent) => {
            if (!(e.target instanceof Node)) return;

            if (e.target == modalRef.current) {
                reset()
                action_modal_auth(false);
                setLoginMode(true)
            }
        };
        window.addEventListener("click", handleClickModal);
        return () => {
            window.removeEventListener("click", handleClickModal);
        };
    }, [modal_auth]);

    useEffect(() => {
      reset()
    },[loginMode])

    return (
      <motion.div
        ref={(el) => (modalRef.current = el)}
        initial={{ top: "-180vh" }}
        animate={{ top: modal_auth ? "0vh" : "-180vh" }}
        className="fixed z-[300] grid h-full w-full place-items-center bg-[rgba(0,0,0,0.4)]"
      >
        <motion.div className="flex h-auto w-3/4 flex-col overflow-hidden  rounded-3xl bg-white lg:h-3/4 lg:max-h-[567px] lg:min-h-[420px]  lg:w-[792px] lg:flex-row">
          <div className="h-1/4 w-full p-4 lg:h-full lg:w-1/2">
            <div className="flex h-full w-full flex-col rounded-3xl bg-biko-d bg-cover text-white lg:justify-around ">
              <div className="pt-5 text-center lg:pt-0">
                <div className="mx-auto w-5/6 font-semibold md:block md:text-modal-auth-header lg:pt-20 lg:text-3xl">
                  Lorem ipsum dolor sit amet.
                </div>
                <div className="mx-auto block w-5/6 pb-4 pt-4 text-body md:pb-16 lg:pb-0 lg:pt-5">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quaerat
                </div>
              </div>
              <div className="mx-auto hidden h-1/4 w-5/6 flex-col justify-around rounded-lg bg-slate-900 px-4 py-2 text-white lg:flex">
                <div className="text-detail-body lg:text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
                  sapiente impedit cum.
                </div>
                <div className="flex gap-3">
                  <div className="h-[35px] w-[35px] rounded-full bg-white"></div>
                  <div>
                    <h1 className="text-detail-body lg:text-sm">
                      Lorem, ipsum.
                    </h1>
                    <p className="text-detail-body lg:text-sm">
                      Lorem consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            {loginMode ? (
              <motion.div
                key="modal-login"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{
                  y: 50,
                  opacity: 0,
                }}
                className="h-3/4 w-full overflow-y-scroll pb-4 pl-4 pr-4 lg:h-full lg:w-1/2 lg:overflow-y-hidden  lg:p-4"
              >
                <div className="h-full w-full rounded-3xl  text-black">
                  <div className="mx-auto w-5/6 ">
                    <h1 className="text-modal-auth-header font-bold uppercase lg:text-4xl">
                      Get started
                    </h1>
                  </div>
                  <form onSubmit={formHook(handleSubmit)}>
                    <AuthInput
                      {...{
                        register,
                        name: "Email",
                        label:'email',
                        type: "email",
                        place_holder: "biko_example@gmail.com",
                        required: true,
                        isError: (errors as any)?.email ? true : false,
                        notMark: true
                      }}
                      key="input-email-login"
                    />
                    <AuthInput
                      {...{
                        register,
                        name: "Password",
                        label: "password",
                        type: "password",
                        place_holder: "xxxxxxxxxx",
                        required: true,
                        isError: (errors as any)?.password ? true : false,
                        notMark: true
                      }}
                      key="input-password-login"
                    />
                    <button
                      type="submit"
                      className="mx-auto mt-5 grid h-[50px] w-5/6 cursor-pointer select-none place-items-center rounded-[60px] border-[1px] border-[#414141]  bg-[#212121] text-center text-body "
                    >
                      Login
                    </button>
                  </form>
                  <div className="mx-auto mt-4 w-5/6 text-center">or</div>
                  <div className="mx-auto mt-5 w-5/6 text-center">
                    Don't Have an account?{" "}
                    <button
                      className="underline"
                      onClick={() => setLoginMode(false)}
                    >
                      Register
                    </button>
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
                className=" h-3/4 w-full p-4 lg:h-full  lg:w-1/2"
              >
                <div className="h-full w-full rounded-3xl  text-black">
                  <div className="mx-auto w-5/6 ">
                    <h1 className="text-modal-auth-header font-bold uppercase lg:text-3xl">
                      Create Account
                    </h1>
                  </div>
                  <form onSubmit={formHook(handleSubmit)}>
                    <AuthInput
                      {...{
                        register,
                        name: "Fullname",
                        label: "full_name",
                        type: "text",
                        place_holder: "mock mock",
                        required: true,
                        isError: (errors as any)?.full_name ? true : false,
                      }}
                      key="input-full-name"
                      place_holder="johnny depp"
                    />
                    <AuthInput
                      {...{
                        register,
                        name: "Email",
                        label: "email",
                        type: "email",
                        place_holder: "biko_example@gmail.com",
                        required:true,
                        isError: (errors as any)?.email ? true : false,
                      }}
                      key="input-email-register"
                    />
                    <AuthInput
                      {...{
                        register,
                        name: "Password",
                        label: "password",
                        type: "password",
                        place_holder: "xxxxxxxxxx",
                        required:true,
                        isError: (errors as any)?.password ? true : false,
                      }}
                      key="input-password-register"
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
                    <button
                      className="underline"
                      onClick={() => setLoginMode(true)}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
};

export default AuthModal;
