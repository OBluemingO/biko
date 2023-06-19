"use client";
import LogoLine from "@/public/svgs/LogoLine";
import Biko from "@/public/svgs/Biko";
import Clip from "@/public/svgs/Clip";
import { motion } from "framer-motion";
import ImageTrackingCursor from "@/components/ImageTrackingCursor";
import { useState } from "react";

const SectionFaq = () => {
  const [show, setShow] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  const handleOnMouseOver = (current: number) => {
    setCurrent(current);
  };
  const handleOnMouseOverShow = () => {
    setShow(true);
  };
  const handleOnMouseLeaveShow = () => {
    setShow(false);
  };

  return (
      <>
          <ImageTrackingCursor {...{ show, current }} />
          <div className="mt-[150px] px-[7.5%]">
              <div className="mb-[100px] text-center text-faq-header  lg:text-8xl">
                  Most Common FAQ
              </div>
              <div
                  onMouseEnter={handleOnMouseOverShow}
                  onMouseLeave={handleOnMouseLeaveShow}
              >
                  <motion.div
                      onMouseOver={() => handleOnMouseOver(0)}
                      className="flex flex-col items-center justify-between border-t-[1px] py-8 transition-all lg:hover:px-8 lg:flex-row"
                  >
                      <div className="flex flex-col items-center gap-5 lg:items-baseline">
                          <LogoLine />
                          <p className="text-2xl font-bold lg:font-light">
                              Lorem ipsum dolor sit amet
                          </p>
                      </div>
                      <div className="w-3/4 text-center lg:w-1/2 lg:text-left">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ducimus magni quaerat voluptatem inventore nemo
                          eos culpa, non dolorem reprehenderit aspernatur
                          labore. Architecto, repellendus optio.
                      </div>
                  </motion.div>
                  <motion.div
                      onMouseOver={() => handleOnMouseOver(1)}
                      className="flex flex-col items-center justify-between border-t-[1px] py-8 lg:hover:px-8 lg:flex-row transition-all"
                  >
                      <div className="flex flex-col items-center gap-5 lg:items-baseline">
                          <Clip />
                          <p className="text-2xl font-bold lg:font-light">
                              Lorem ipsum dolor sit amet
                          </p>
                      </div>
                      <div className="w-3/4 text-center lg:w-1/2 lg:text-left">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ducimus magni quaerat voluptatem inventore nemo
                          eos culpa, non dolorem reprehenderit aspernatur
                          labore. Architecto, repellendus optio.
                      </div>
                  </motion.div>
                  <motion.div
                      onMouseOver={() => handleOnMouseOver(2)}
                      className="flex flex-col items-center justify-between border-b-[1px] border-t-[1px] py-8 transition-all lg:hover:px-8 lg:flex-row"
                  >
                      <div className="flex flex-col items-center gap-5 lg:items-baseline">
                          <Biko />
                          <p className="text-2xl font-bold lg:font-light">
                              Lorem ipsum dolor sit amet
                          </p>
                      </div>
                      <div className="w-3/4 text-center lg:w-1/2 lg:text-left">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ducimus magni quaerat voluptatem inventore nemo
                          eos culpa, non dolorem reprehenderit aspernatur
                          labore. Architecto, repellendus optio.
                      </div>
                  </motion.div>
              </div>
          </div>
      </>
  );
};

export default SectionFaq;
