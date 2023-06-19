"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionImage = () => {

  const { scrollYProgress } = useScroll();
  const a = useTransform(scrollYProgress, [0,1], ['200px','-200px'])

  return (
      <div className="flex h-screen w-full flex-col gap-5 px-[3%] lg:h-[1611px]">
          <div className="flex h-[50%] gap-5 lg:h-[873px]">
              <motion.div className="basis-1/2 overflow-hidden rounded-[20px] ">
                  <motion.div
                      initial={{ scale: "130%" }}
                      className="h-full w-full bg-black bg-biko-a bg-cover"
                      style={{ backgroundPositionY: a }}
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
                      initial={{ scale: "130%" }}
                      style={{ backgroundPositionY: a }}
                      className="h-full w-full bg-black bg-biko-b bg-cover"
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
                  initial={{ scale: "150%" }}
                  // transition={{ duration: 0.6, ease: "easeOut" }}
                  // viewport={{ amount: 0.3, once: true }}
                  // whileInView={{ scale: "100%" }}
                  style={{ backgroundPositionY: a }}
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
