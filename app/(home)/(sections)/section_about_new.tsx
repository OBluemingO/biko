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
    visible: { y: "0%", opacity: 1 },
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
    },
    visible: {
        opacity:1,
        transform: "rotate(0deg)",
        transition: {
            delay: 0.5
        }
    },
};

const text =
    `Lorem ipsum dolor sit amet  consectetur \n adipisicing elit. Ea`.split(
        "\n"
    );

const text_card =
    `Lorem ipsum, dolor sit amet consectetur \n adipisicing elit. Veritatis, numquam  elit \n Veritatis, numquam.`.split(
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
        <div className="flex h-screen w-full flex-col bg-white">
            <div className="flex h-1/2 w-full items-end justify-center bg-blue-800">
                <motion.h1
                    style={{ transform: rotateX }}
                    ref={textTopicRef}
                    variants={animate_group_text}
                    initial="hidden"
                    animate="visible"
                    className="origin-center overflow-hidden whitespace-pre-line py-4 text-center text-8xl"
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
            <div className="flex h-1/2 w-full bg-green-200 px-[3%]">
                <div className="relative flex h-full basis-4/12 flex-col bg-purple-700">
                    <div className="flex w-full flex-1 bg-black">
                        <motion.div
                            variants={animate_group_card}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-1 flex-col gap-4 border-2 border-black bg-green-200"
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
                        <div className="flex flex-1 flex-col gap-1 bg-green-200">
                            <motion.span
                                variants={animate_button}
                                initial="hidden"
                                animate="visible"
                                className="flex w-fit flex-col border-2"
                            >
                                <div className="h-[50px] w-[50px] rounded-full border-2 border-black"></div>
                                <div className="h-[50px] w-[50px] rounded-full border-2 border-black"></div>
                            </motion.span>
                        </div>
                    </div>
                    <motion.div
                        variants={animate_image}
                        initial="hidden"
                        animate="visible"
                        className="h-[300px] w-full rounded-2xl bg-white"
                    ></motion.div>
                </div>
                <div className="relative h-full basis-8/12  bg-red-500">
                    <motion.div
                        variants={animate_image}
                        initial="hidden"
                        animate="visible"
                        className="h-3/4 w-full rounded-2xl bg-black"
                    ></motion.div>

                    <ButtonToggle>click</ButtonToggle>
                </div>
            </div>
        </div>
    );
};

export default sectionAboutNew;
