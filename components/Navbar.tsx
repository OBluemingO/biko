"use client"
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease:'easeOut' } },
  };
  return (
    <>
      <div className="absolute pt-[50px] text-xl z-50 mx-auto flex justify-between w-full px-[3%] text-body">
        <motion.span
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="hidden md:block"
        >
          <Link href="">phayuphat118@gmail.com</Link>
        </motion.span>
        <div className="hidden lg:flex gap-5">
          <Link className="cursor-pointer" href={"/about_us"}>About us</Link>
          <Link href="www.google.com">Benefits</Link>
          <Link href="">Contact</Link>
          <button>Login</button>
        </div>
        <div className="md:static lg:hidden">
          <RxHamburgerMenu />
        </div>
      </div>
      <div className="mt-[40px] top-0 absolute z-40 w-full left-1/2 -translate-x-1/2 text-4xl text-center text-white">
        Biko.
      </div>
    </>
  );
}

export default Navbar