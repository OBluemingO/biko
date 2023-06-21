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
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%" },
  };

  const lineAnimation = {
    hidden: { width: "0%" },
    visible: { width: "100%", transition: { duration: start_animate } },
  };

  const TextHeader = "Marathon bike".split("");
  const TextDetail =
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus saepe fugit quibusdam porro sit. Veniam ullam alias, blanditiis quo`.split(
      " "
    );
  return (
    <div className="relative h-screen w-full bg-hero-section bg-cover bg-[20%_0] px-[3%] md:bg-[center_-4rem]">
      <div className="relative z-10 flex h-full w-full flex-col justify-end pb-[70px]">
        <motion.div
          variants={groupText}
          initial="hidden"
          animate="visible"
          className="overflow-hidden text-header text-white"
        >
          {TextHeader.map((el, index) => {
            return (
              <motion.span key={`text-header-pop-${index}`} variants={eachText} className="relative">
                {el}
              </motion.span>
            );
          })}
        </motion.div>
        <motion.div
          variants={lineAnimation}
          initial={"hidden"}
          animate={"visible"}
          className="line mb-[15px] mt-[10px] md:mb-[35px] md:mt-[25px] h-[1px] w-full bg-[#414141]"
        ></motion.div>
        <div className="flex w-full flex-col items-left justify-between gap-5 md:flex-row md:gap-0">
          <motion.div
            variants={groupText}
            initial={"hidden"}
            animate={"visible"}
            className="flex w-3/4 md:w-1/2 flex-wrap justify-start md:justify-start overflow-hidden text-body"
          >
            {TextDetail.map((el, index) => {
              return (
                <motion.span key={`text-detail-pop-${index}`} variants={eachBody} className="mr-[5px]">
                  {el}
                </motion.span>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ButtonGray>DISCOVER THE BENEFITES</ButtonGray>
          </motion.div>
        </div>
        <div className="absolute left-0 -z-[10] w-full bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  );
};

export default SectionHero;
