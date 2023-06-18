"use client";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import BikoA  from '../../../public/images/galactic-night-sky-astronomy-science-combined-generative-ai.jpg'

const SectionImage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start end", "end start"],
  // });

  // const  backgroundPosition = useTransform(scrollYProgress, [0, 0.5], [`0% -100%`, `0% 100%`]);
  // useMotionValueEvent(backgroundPosition, "change", (latest) => {
  //   console.log("PosY: ", latest);
  // });
  return (
    <div
      ref={containerRef}
      className="flex h-screen w-full flex-col gap-5 px-[3%] lg:h-[1611px]"
    >
      <div className="flex h-[50%] gap-5 lg:h-[873px]">
        <motion.div className="basis-1/2 overflow-hidden rounded-[20px] ">
          <motion.div
            initial={{ scale: "110%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            whileInView={{ scale: "100%" }}
            className="h-full w-full bg-biko-a bg-cover"
          >
            <motion.div
              initial={{ backdropFilter: "blur(5px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.3, once: true }}
              whileInView={{ backdropFilter: "blur(0px)" }}
              className="h-full w-full "
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="basis-1/2 overflow-hidden rounded-[20px] ">
          <motion.div
            initial={{ scale: "110%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            whileInView={{ scale: "100%" }}
            className="h-full w-full bg-biko-b bg-cover"
          >
            <motion.div
              initial={{ backdropFilter: "blur(5px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ amount: 0.3, once: true }}
              whileInView={{ backdropFilter: "blur(0px)" }}
              className="h-full w-full "
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="h-[50%] w-full overflow-hidden rounded-[20px] lg:h-[712px]">
        <motion.div
          initial={{ scale: "110%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          whileInView={{ scale: "100%" }}
          className="h-full w-full bg-biko-c bg-cover"
        >
          <motion.div
            initial={{ backdropFilter: "blur(5px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            whileInView={{ backdropFilter: "blur(0px)" }}
            className="h-full w-full "
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionImage;
