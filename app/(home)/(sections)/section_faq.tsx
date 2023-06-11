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
      <div className="px-[7.5%] mt-[150px]">
        <div className="text-center text-faq-header lg:text-8xl  mb-[100px]">Most Common FAQ</div>
        <div
          onMouseEnter={handleOnMouseOverShow}
          onMouseLeave={handleOnMouseLeaveShow}
        >
          <motion.div
            onMouseOver={() => handleOnMouseOver(0)}
            className="flex border-t-[1px] items-center justify-between py-8"
          >
            <div className="flex flex-col gap-5">
              <LogoLine />
              <p className="text-2xl font-light">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              magni quaerat voluptatem inventore nemo eos culpa, non dolorem
              reprehenderit aspernatur labore. Architecto, repellendus optio.
              Magnam, deleniti quos! Quidem, eum obcaecati.
            </div>
          </motion.div>
          <motion.div
            onMouseOver={() => handleOnMouseOver(1)}
            className="flex border-t-[1px] items-center justify-between py-8"
          >
            <div className="flex flex-col gap-5">
              <Clip />
              <p className="text-2xl font-light">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              magni quaerat voluptatem inventore nemo eos culpa, non dolorem
              reprehenderit aspernatur labore. Architecto, repellendus optio.
              Magnam, deleniti quos! Quidem, eum obcaecati.
            </div>
          </motion.div>
          <motion.div
            onMouseOver={() => handleOnMouseOver(2)}
            className="flex border-t-[1px] border-b-[1px] items-center justify-between py-8"
          >
            <div className="flex flex-col gap-5">
              <Biko />
              <p className="text-2xl font-light">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              magni quaerat voluptatem inventore nemo eos culpa, non dolorem
              reprehenderit aspernatur labore. Architecto, repellendus optio.
              Magnam, deleniti quos! Quidem, eum obcaecati.
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionFaq;
