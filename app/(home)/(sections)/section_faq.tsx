"use client"
import LogoLine from "@/public/svgs/logoLine";
import Biko from "@/public/svgs/Biko";
import Clip from "@/public/svgs/Clip";
import { motion } from "framer-motion";

const SectionFaq = () => {
  return (
      <div className="px-[7.5%] mt-[150px]">
          <div className="text-center text-8xl  mb-[100px]">
              Most Common FAQ
          </div>
          <motion.div className="flex border-t-[1px] items-center justify-between py-8">
              <div className="flex flex-col gap-5">
                  <LogoLine />
                  <p className="text-2xl font-light">
                      Lorem ipsum dolor sit amet
                  </p>
              </div>
              <div className="w-1/2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus magni quaerat voluptatem inventore nemo eos culpa, non
                  dolorem reprehenderit aspernatur labore. Architecto,
                  repellendus optio. Magnam, deleniti quos! Quidem, eum
                  obcaecati.
              </div>
          </motion.div>
          <motion.div className="flex border-t-[1px] items-center justify-between py-8">
              <div className="flex flex-col gap-5">
                  <Clip />
                  <p className="text-2xl font-light">
                      Lorem ipsum dolor sit amet
                  </p>
              </div>
              <div className="w-1/2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus magni quaerat voluptatem inventore nemo eos culpa, non
                  dolorem reprehenderit aspernatur labore. Architecto,
                  repellendus optio. Magnam, deleniti quos! Quidem, eum
                  obcaecati.
              </div>
          </motion.div>
          <motion.div className="flex border-t-[1px] items-center justify-between py-8">
              <div className="flex flex-col gap-5">
                  <Biko />
                  <p className="text-2xl font-light">
                      Lorem ipsum dolor sit amet
                  </p>
              </div>
              <div className="w-1/2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus magni quaerat voluptatem inventore nemo eos culpa, non
                  dolorem reprehenderit aspernatur labore. Architecto,
                  repellendus optio. Magnam, deleniti quos! Quidem, eum
                  obcaecati.
              </div>
          </motion.div>
      </div>
  );
}

export default SectionFaq 