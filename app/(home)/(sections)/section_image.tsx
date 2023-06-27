"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const SectionImage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    ["200px", "-200px"]
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageInView = useInView(containerRef, { amount: 0.5, once:true });

  return (
    <div className="flex h-screen w-full flex-col gap-5 px-[3%] lg:h-[1611px]">
      <div className="flex h-[50%] gap-5 lg:h-[873px]" ref={containerRef}>
        <motion.div className="basis-1/2 overflow-hidden rounded-[20px]">
          <motion.div
            animate={{
              height: imageInView ? `100%` : `0%`,
              backgroundSize: imageInView ? "130%" : "100%",
            }}
            transition={{ duration: 1 }}
            className="h-full w-full bg-black bg-biko-a "
          >
            <motion.div
              initial={{ backdropFilter: "blur(5px)" }}
              animate={{
                backdropFilter: imageInView ? "blur(0px)" : "blur(5px)",
              }}
              transition={{ duration: 1.5 }}
              className="h-full w-full "
            ></motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="basis-1/2 overflow-hidden rounded-[20px]">
          <motion.div
            animate={{
              height: imageInView ? `100%` : `0%`,
              backgroundSize: imageInView ? "130%" : "100%",
            }}
            transition={{ duration: 1 }}
            className="h-full w-full bg-black bg-biko-b"
          >
            <motion.div
              initial={{ backdropFilter: "blur(5px)" }}
              animate={{
                backdropFilter: imageInView ? "blur(0px)" : "blur(5px)",
              }}
              transition={{ duration: 1.5 }}
              className="h-full w-full "
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="h-[50%] w-full overflow-hidden rounded-[20px] lg:h-[712px]">
        <motion.div
          initial={{ scale: "150%" }}
          style={{ backgroundPositionY }}
          className="h-full w-full bg-black bg-biko-c bg-cover"
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
