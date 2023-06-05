"use client"
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease:'easeOut' } },
  };

  const group = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

    const eachBody = {
      hidden: { opacity: 0, y: "100%" },
      visible: { opacity: 1, y: "0%" },
    };

  return (
    <>
      <div className="absolute z-50 mx-auto flex w-full justify-between px-[3%] pt-[50px] text-xl text-body">
        <motion.span
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="hidden md:block"
        >
          <Link href="">phayuphat118@gmail.com</Link>
        </motion.span>
        <motion.div
          variants={group}
          initial="hidden"
          animate="visible"
          className="hidden gap-5 lg:flex relative "
        >
          
          <motion.span
            variants={eachBody}
          >
            <Link className="cursor-pointer" href={"/about_us"}>
              About us
            </Link>
          </motion.span>
          <motion.span
            variants={eachBody}
          >
            <Link href="/benefits">Benefits</Link>
          </motion.span>
          <motion.span
            variants={eachBody}
          >
            <Link href="/contact">Contact</Link>
          </motion.span>
          <motion.span
            variants={eachBody}
          >
            <button>Login</button>
          </motion.span>
        </motion.div>
        <div className="md:static lg:hidden">
          <RxHamburgerMenu />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute left-1/2 top-0 z-40 mt-[40px] w-full -translate-x-1/2 text-center text-4xl text-white"
      >
        Biko.
      </motion.div>
    </>
  );
}

export default Navbar