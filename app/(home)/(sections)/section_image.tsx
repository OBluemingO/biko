"use client"
import { motion } from 'framer-motion'

const SectionImage = () => {
  return (
    <div className="h-screen lg:h-[1611px] w-full px-[3%] flex flex-col gap-5">
      <div className="flex gap-5 h-[50%] lg:h-[873px]">
        <motion.div
          initial={{ backgroundSize: "150%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          whileInView={{ backgroundSize: "100%" }}
          className="overflow-hidden basis-1/2 bg-biko-a bg-cover rounded-[20px] "
        >
          <motion.div
            initial={{ backdropFilter: "blur(5px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            whileInView={{ backdropFilter: "blur(0px)" }}
            className="w-full h-full "
          ></motion.div>
        </motion.div>
        <motion.div
          initial={{ backgroundSize: "150%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          whileInView={{ backgroundSize: "100%" }}
          className="basis-1/2 bg-biko-b bg-cover rounded-[20px]"
        >
          <motion.div
            initial={{ backdropFilter: "blur(5px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            whileInView={{ backdropFilter: "blur(0px)" }}
            className="w-full h-full "
          ></motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ backgroundSize: "150%" }}
        viewport={{ amount: 0.3, once: true }}
        whileInView={{
          backgroundSize: "100%",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className="w-full bg-biko-c bg-cover rounded-[20px] h-[50%] lg:h-[712px]"
      >
        <motion.div
          initial={{ backdropFilter: "blur(5px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.3, once: true }}
          whileInView={{ backdropFilter: "blur(0px)" }}
          className="w-full h-full "
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default SectionImage 