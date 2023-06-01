"use client";
import ButtonGray from "@/components/buttons/button";
import { useEffect } from "react";
import { motion } from "framer-motion";

const SectionHero = () => {
    useEffect(() => {}, []);

    const TextHeader = "Marathon bike".split("");

    const item_text = {
        hidden: {
            top: "100%",
        },
        visible: {
            top: "0%",
        },
    };

    const group_text = {
        hidden: {
            y: 0,
        },
        visible: {
            y: 0,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    return (
        <div className="relative h-screen w-full bg-hero-section bg-cover bg-[20%_0] px-[3%] md:bg-[center_-4rem]">
            <div className="relative z-10 flex h-full w-full flex-col justify-end pb-[70px]">
                <motion.div
                    variants={group_text}
                    initial="hidden"
                    animate="visible"
                    className="overflow-hidden text-header text-white"
                >
                    {TextHeader.map((el, index) => {
                        return (
                            <motion.span
                                className="relative"
                                key={`text-header-${index}`}
                                variants={item_text}
                            >
                                {el}
                            </motion.span>
                        );
                    })}
                </motion.div>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{duration: 1 }}
                    className="line mb-[35px] mt-[25px] h-[1px] bg-[#414141]"
                ></motion.div>
                <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
                    <div className="w-1/2 text-center text-body md:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus saepe fugit quibusdam porro sit. Veniam ullam
                        alias, blanditiis quo
                    </div>
                    <ButtonGray>DISCOVER THE BENEFITES</ButtonGray>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 h-[40%] w-full bg-gradient-to-t from-black to-transparent"></div>
        </div>
    );
};

export default SectionHero;
