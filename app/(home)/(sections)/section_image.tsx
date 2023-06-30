"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const SectionImage = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const containerSecondRef = useRef<HTMLDivElement | null>(null);
    const imageInView = useInView(containerRef, { amount: 0.5, once: true });
    const imageBiggerInView = useInView(containerSecondRef, {
        amount: 0.5,
        once: true,
    });

    const variant = {
        show: {
            height: imageInView ? `100%` : `0%`,
            backgroundSize: imageInView ? "130%" : "100%",
        },
    };

    const variant_bg = {
        hidden: { backdropFilter: "blur(5px)" },
        show: { backdropFilter: imageInView ? "blur(0px)" : "blur(5px)" },
    };

    const variant_full_bg = {
        hidden: { backdropFilter: "blur(5px)" },
        show: { backdropFilter: imageBiggerInView ? "blur(0px)" : "blur(5px)" },
    };

    return (
        <div className="flex h-screen w-full flex-col gap-5 px-[3%] lg:h-[1611px]">
            <div className="flex h-[50%] gap-5 lg:h-[873px]" ref={containerRef}>
                <motion.div className="basis-1/2 overflow-hidden rounded-[20px]">
                    <motion.div
                        variants={variant}
                        transition={{ duration: 1 }}
                        animate="show"
                        className="h-full w-full bg-black bg-biko-a "
                    >
                        <motion.div
                            variants={variant_bg}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 1.5 }}
                            className="h-full w-full "
                        ></motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="basis-1/2 overflow-hidden rounded-[20px]">
                    <motion.div
                        variants={variant}
                        animate="show"
                        transition={{ duration: 1 }}
                        className="h-full w-full bg-black bg-biko-b"
                    >
                        <motion.div
                            variants={variant_bg}
                            initial="hidden"
                            animate="show"
                            transition={{ duration: 1.5 }}
                            className="h-full w-full "
                        ></motion.div>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                className="h-[50%] w-full overflow-hidden rounded-[20px] lg:h-[712px]"
                ref={containerSecondRef}
            >
                <motion.div className="h-full w-full bg-black bg-biko-c bg-cover">
                    <motion.div
                        variants={variant_full_bg}
                        initial="hidden"
                        animate="show"
                        className="h-full w-full "
                    ></motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SectionImage;
