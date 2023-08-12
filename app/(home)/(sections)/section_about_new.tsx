import React, { useRef } from "react";
import {
    motion,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import ButtonToggle from "@/components/buttons/button.toggle";

const init_time = 1;

const animate_group_text = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: init_time,
            ease: "easeOut",
            staggerChildren: 0.075,
        },
    },
};

const animate_group_card = {
    hidden: {},
    visible: {
        transition: {
            ease: "easeOut",
            staggerChildren: 0.1,
            delayChildren: 0.25,
        },
    },
};

const animate_items_text = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
        y: "0%",
        opacity: 1,
        transition: { duration: 0.6, ease: [0, 0.55, 0.45, 1] },
    },
};

const animate_text_after_image = {
    hidden: { y: "100%", opacity: 0, filter: `blur(5px)` },
    visible: (idx: number) => ({
        y: "0%",
        opacity: 1,
        filter: `blur(0px)`,
        // transition: { delay: 1.2 * idx, duration: 0.6, ease: [0, 0.55, 0.45, 1] },
        transition: { delay: 0.6 * idx, duration: 0.6, ease: [0, 0.55, 0.45, 1] },
    }),
};

const animate_image = {
    hidden: {
        scale: 0.5,
    },
    visible: {
        scale: 1,
        transition: {
            duration: 1.6,
            ease: [.6,.01, -.05,.95]
        },
    },
};

const animate_button = {
    hidden: {
        opacity:0,
        transform: "rotate(-90deg)",
        filter: `blur(5px)`
    },
    visible: {
        opacity:1,
        transform: "rotate(0deg)",
        filter: `blur(0px)`,
        transition: {
            delay: 0.5
        }
    },
};

const text =
    `Lorem ipsum dolor sit amet \n consectetur adipisicing elit Ea.`.split(
        "\n"
    );

const text_card =
    `Lorem ipsum, dolor sit amet Veritatis\n consectetur adipisicing Veritatis \n numquam  elit Veritatis`.split(
        "\n"
    );

const sectionAboutNew = () => {
    const textTopicRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: textTopicRef,
        offset: ["end end", "end start"],
    });
    const rotateX = useTransform(
        scrollYProgress,
        [0, 1],
        ["rotateX(0deg)", "rotateX(75deg)"]
    );

    return (
      <div className="flex h-[1080px] w-full flex-col bg-black pt-5">
        <div className="flex h-1/6 w-full items-center justify-center lg:h-2/6 ">
          <motion.h1
            style={{ transform: rotateX }}
            ref={textTopicRef}
            variants={animate_group_text}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="origin-center overflow-hidden whitespace-pre-line py-4 text-center text-4xl text-white lg:text-8xl"
          >
            {text.map((el, idx) => {
              return (
                <motion.span
                  key={`text-section-about-${idx}-children relative`}
                  variants={animate_items_text}
                  className="inline-block"
                >
                  {el}
                </motion.span>
              );
            })}
          </motion.h1>
        </div>
        <div className="flex h-full w-full px-[3%] lg:h-4/6">
          <div className="relative flex h-1/4 w-full flex-row items-center gap-10 lg:h-3/4 lg:basis-4/12 lg:flex-col">
            <div className="flex flex-row-reverse justify-end gap-5 lg:gap-0 lg:flex-row lg:justify-end mr-5">
              <motion.div
                variants={animate_group_card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex w-[75%] flex-col gap-4 rounded-2xl text-white lg:w-[60%]"
              >
                <motion.h1 variants={animate_items_text} className="text-4xl">
                  Lorem ipsum.
                </motion.h1>
                <p className="whitespace-pre-line">
                  {text_card.map((el, idx) => {
                    return (
                      <motion.span
                        key={`section-text-card-about-${idx}`}
                        variants={animate_items_text}
                        className="inline-block"
                      >
                        {el}
                      </motion.span>
                    );
                  })}
                </p>
              </motion.div>
              <motion.span
                variants={animate_button}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex w-fit flex-col gap-2 mt-2 lg:mt-0"
              >
                <div className="h-[30px] w-[30px] rounded-full border-2 border-white lg:h-[50px] lg:w-[50px]"></div>
                <div className="h-[30px] w-[30px] rounded-full border-2 border-white lg:h-[50px] lg:w-[50px]"></div>
              </motion.span>
            </div>
            {/* <motion.div
              variants={animate_image}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-[50%] w-[calc(60%+50px)] origin-center rounded-2xl bg-biko-c bg-cover"
            ></motion.div> */}
          </div>
          <div className="relative h-full basis-8/12">
            <motion.div
              variants={animate_image}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-3/4 w-full origin-top rounded-2xl bg-biko-c bg-cover "
            ></motion.div>
            <div className="mt-10 flex justify-end">
              {/* <div className="w-2/6 overflow-hidden">
                <motion.span
                  variants={animate_text_after_image}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block text-white"
                  custom={1}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Earum, quibusdam!
                </motion.span>
              </div> */}
              <div className="flex  gap-3">
                <motion.span
                  variants={animate_text_after_image}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block"
                  custom={1.3}
                >
                  <ButtonToggle>contact us</ButtonToggle>
                </motion.span>
                <motion.span
                  variants={animate_text_after_image}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block"
                  custom={1.6}
                >
                  <ButtonToggle>free trial</ButtonToggle>
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default sectionAboutNew;
