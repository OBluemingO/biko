"use client";
import ButtonGray from "@/components/buttons/button";
import { motion } from "framer-motion";

const SectionHero = () => {
  const start_animate = 1;

  const groupText = {
    hidden: {
      y: 0,
    },
    visible: {
      y: 0,
      transition: {
        duration: start_animate,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  const eachText = {
    hidden: { top: "100%" },
    visible: { top: "0%" },
  };

  const eachBody = {
    hidden: { opacity:0, y: "100%" },
    visible: { opacity:1, y: "0%", },
  };

  const lineAnimation = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: start_animate } },
  };

  const TextHeader = "Marathon bike".split("");
  const TextDetail = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus saepe fugit quibusdam porro sit. Veniam ullam alias, blanditiis quo`.split(" ")
  return (
    <div className="h-screen w-full bg-hero-section bg-cover bg-[20%_0] md:bg-[center_-4rem] relative px-[3%]">
      <div className="flex relative z-10 flex-col justify-end h-full w-full pb-[70px]">
        <motion.div
          variants={groupText}
          initial="hidden"
          animate="visible"
          className="text-header text-white overflow-hidden"
        >
          {TextHeader.map((el, index) => {
            return (
              <motion.span variants={eachText} className="relative">
                {el}
              </motion.span>
            );
          })}
        </motion.div>
        <motion.div
          variants={lineAnimation}
          initial={"hidden"}
          animate={"visible"}
          className="line h-[1px] w-full bg-[#414141] mt-[25px] mb-[35px]"
        ></motion.div>
        <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center">
          <motion.div
            variants={groupText}
            initial={"hidden"}
            animate={"visible"}
            className="flex flex-wrap overflow-hidden w-1/2 text-body text-center md:text-left"
          >
            {TextDetail.map((el, index) => {
              return (
                <motion.span variants={eachBody} className="mr-[5px]">
                  {el}
                </motion.span>
              );
            })}
          </motion.div>
          <motion.div initial={{opacity:0, x:100, scale:0.5}} animate={{opacity:1, x:0, scale:1}} transition={{delay:0.5}} >
            <ButtonGray>DISCOVER THE BENEFITES</ButtonGray>
          </motion.div>
        </div>
      </div>
      <div className="absolute left-0 w-full bottom-0 h-[40%] bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default SectionHero;
