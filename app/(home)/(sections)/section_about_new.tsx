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
    `Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Ea`.split(
        "\n"
    );

const text_card =
    `Lorem ipsum, dolor sit amet\n consectetur adipisicing elit. Veritatis,\n numquam  elit  Veritatis, numquam.`.split(
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
        <div className="flex h-screen w-full flex-col bg-black">
            <div className="flex h-1/2 w-full items-end justify-center ">
                <motion.h1
                    style={{ transform: rotateX }}
                    ref={textTopicRef}
                    variants={animate_group_text}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="origin-center overflow-hidden whitespace-pre-line py-4 text-center text-8xl text-white"
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
            <div className="flex h-1/2 w-full px-[3%]">
                <div className="relative flex h-full basis-4/12 flex-col ">
                    <div className="flex w-full flex-1 ">
                        <motion.div
                            variants={animate_group_card}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-1 flex-col p-4 gap-4 rounded-2xl text-white"
                        >
                            <motion.h1
                                variants={animate_items_text}
                                className="text-4xl"
                            >
                                Lorem, ipsum.
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
                        <div className="flex flex-1 flex-col gap-1 ">
                            <motion.span
                                variants={animate_button}
                                initial="hidden"
                                // animate="visible"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex w-fit flex-col"
                            >
                                <div className="h-[50px] w-[50px] rounded-full border-2 border-white"></div>
                                <div className="h-[50px] w-[50px] rounded-full border-2 border-white"></div>
                            </motion.span>
                        </div>
                    </div>
                    <motion.div
                        variants={animate_image}
                        initial="hidden"
                        // animate="visible"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-[300px] w-[80%] mx-auto rounded-2xl bg-biko-a bg-cover origin-top"
                    ></motion.div>
                </div>
                <div className="relative h-full basis-8/12">
                    <motion.div
                        variants={animate_image}
                        initial="hidden"
                        // animate="visible"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="h-3/4 w-full rounded-2xl bg-biko-d origin-top bg-cover"
                    ></motion.div>
                    <div className="flex justify-between mt-8">
                        <div className="w-2/6 overflow-hidden">
                            <motion.span
                                variants={animate_text_after_image}
                                initial="hidden"
                                // animate="visible"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="inline-block text-white"
                                custom={1}
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Earum, quibusdam!
                            </motion.span>
                        </div>
                        <div className="flex  gap-3">
                            <motion.span
                                variants={animate_text_after_image}
                                initial="hidden"
                                // animate="visible"
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
                                // animate="visible"
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
