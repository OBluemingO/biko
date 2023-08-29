"use client";
import ButtonGray from "@/components/buttons/button";
import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { motion, useInView } from "framer-motion";

type TCategorie = "wheels" | "drivetrain" | "frame" | "name";
type TCateWithOutName = Exclude<TCategorie, "name">;
type TDetail = "detail" | "percent";

type TypeDetail = {
  [K in TDetail]: K extends "detail" ? string : number;
};

type IData = {
  [K in TCategorie]: K extends "name" ? string & {} : TypeDetail;
};

const SectionAbout = () => {
  const [active, setActive] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerBottomRef = useRef<HTMLDivElement | null>(null);
  const isInview = useInView(containerRef, { amount: 0.6, once: true });
  const isInviewBottom = useInView(containerBottomRef, {
    amount: 0.6,
    once: true,
  });

  useEffect(() => {
    const increase_active = setInterval(() => {
      setActive((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(increase_active);
  }, [active]);

  const data: IData[] = [
    {
      name: "test-1",
      drivetrain: { detail: "asdfsdf", percent: 50 },
      wheels: { detail: "asdfsdf", percent: 20 },
      frame: { detail: "asdfsdf", percent: 40 },
    },
    {
      name: "test-2",
      drivetrain: { detail: "asdfsdf", percent: 10 },
      wheels: { detail: "asdfsdf", percent: 10 },
      frame: { detail: "asdfsdf", percent: 100 },
    },
    {
      name: "test-3",
      drivetrain: { detail: "asdfsdf", percent: 10 },
      wheels: { detail: "asdfsdf", percent: 10 },
      frame: { detail: "asdfsdf", percent: 30 },
    },
    {
      name: "test-4",
      drivetrain: { detail: "asdfsdf", percent: 40 },
      wheels: { detail: "asdfsdf", percent: 20 },
      frame: { detail: "asdfsdf", percent: 90 },
    },
  ];

  

  const handleClickActive = (idx: number) => {
    setActive(idx);
  };

  const start_duration = 0.6;

  const line_horizontal_animation = {
    hidden: { width: `0%` },
    show: (i: number) => ({
      width: isInviewBottom ? `100%` : `0%`,
      transition: { delay: start_duration + 0.3 },
    }),
  };

  const line_vertical_animation = {
    hidden: { height: `0%`, opacity: 0 },
    show: (i: number) => ({
      height: isInviewBottom ? `130%` : `0%`,
      opacity: isInviewBottom ? 1 : 0,
      transition: { delay: start_duration + 0.6 },
    }),
  };

  const percent_animation = {
    hidden: {
      opacity: `0%`,
    },
    show: (i: number) => ({
      opacity: isInviewBottom ? `100%` : `0%`,
      transition: { delay: (start_duration + 1) + (i * 0.05) },
    }),
  };


  return (
    <>
      <div
        ref={containerRef}
        className="relative h-[1024px] w-full bg-biko-section bg-cover bg-[center_-1.5rem]"
      >
        <div className=" flex h-full flex-col items-center justify-center">
          <span className="overflow-hidden">
            <motion.h1
              initial={{ y: "120px" }}
              animate={{ y: isInview ? "0px" : "120px" }}
              transition={{
                delay: start_duration,
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="mb-[20px] overflow-hidden text-header leading-[1] text-white"
            >
              Testimonials
            </motion.h1>
          </span>
          <motion.div
            initial={{ scaleX: "0%" }}
            animate={{ scaleX: isInview ? "100%" : "0%" }}
            transition={{
              duration: start_duration,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={"mb-[20px] h-[1px] w-2/4 bg-white lg:w-1/4"}
          ></motion.div>
          <span className="overflow-hidden">
            <motion.p
              initial={{ y: "-140px" }}
              animate={{ y: isInview ? "0px" : "-140px" }}
              transition={{
                delay: start_duration,
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-detailBody mx-auto mb-[65px] w-[calc(100%-20vw)] text-center text-body lg:w-[613px]"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              repudiandae tenetur labore sapiente beatae maxime repellat commodi
              error eligendi iste, dicta a! Ducimus ab recusandae repellendus
              est quis, mollitia ad?
            </motion.p>
          </span>
          <motion.div
            initial={{ opacity: 0, y: "-120px" }}
            animate={{
              opacity: isInview ? 1 : 0,
              y: isInview ? "0px" : "-120px",
            }}
            transition={{
              delay: start_duration + 0.6,
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="max-w-[338px]"
          >
            <ButtonGray>DISCOVER THE BENEFITS</ButtonGray>
          </motion.div>
        </div>

        <div className="absolute left-0 top-0 h-[40%] w-full bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-t from-black to-transparent" />
      </div>
      <div
        ref={containerBottomRef}
        className="flex h-[600px] flex-col  border-rose-50 bg-black px-[5%] pb-[150px] md:h-auto md:flex-row lg:h-[895px]"
      >
        <div className="scrollbar flex w-full flex-row overflow-x-auto md:h-full md:w-[30%] md:flex-col md:overflow-auto">
          {data.map((el: IData, idx: number) => {
            const { name, drivetrain, frame, wheels } = el;
            return (
              <motion.div
                key={`section-about-first-${idx}`}
                variants={{
                  hidden: { opacity: 0 },
                  show: (i) => ({
                    opacity: isInviewBottom ? 1 : 0,
                    transition: { delay: 0.125 * i },
                  }),
                }}
                initial="hidden"
                animate="show"
                custom={idx}
                className={clsx(
                  "before:content-[' '] relative mt-2 flex flex-grow cursor-pointer before:absolute before:bottom-0 before:block before:h-[2px] before:w-full md:before:static md:before:h-full md:before:w-[10px]",
                  active == idx
                    ? "text-white before:bg-green-200"
                    : "text-stone-600 before:bg-stone-600"
                )}
                onClick={() => handleClickActive(idx)}
              >
                <div className="flex w-full flex-col justify-center md:w-auto md:px-5">
                  <div className="w-full text-center text-base md:w-auto md:text-left md:text-2xl">
                    {name}
                  </div>
                  <div className="hidden md:block">
                    Lorem ipsum dolor sit amet consectetur adipisicing nemo quis
                    temporibus commodi.
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex-grow lg:px-[5%]">
          <div className="flex h-full w-full flex-col lg:px-[10%]">
            <div className="my-auto h-2/3 w-full">
              {Object.keys(data[active])
                .filter((el): el is TCateWithOutName => el != "name")
                .map((el: TCateWithOutName, index: number, ell_all) => {
                  const { detail, percent } = data[active][el];
                  return (
                    <motion.div
                      key={`section-about-second-${index}`}
                      className={clsx("relative grid h-1/3 w-full grid-cols-4")}
                      variants={line_horizontal_animation}
                      initial="hidden"
                      animate="show"
                    >
                      <div className="absolute left-0 top-1/2 z-30 h-[90%] w-full -translate-y-1/2 border-y-2 ">
                        <motion.div
                          style={{
                            width: `${percent}%`,
                          }}
                          variants={percent_animation}
                          initial="hidden"
                          animate="show"
                          custom={index}
                          className={clsx(
                            "h-full bg-white transition-all",
                            percent === 100 ? `` : `rounded-r-full`
                          )}
                        ></motion.div>
                      </div>
                      <motion.div
                        variants={percent_animation}
                        initial="hidden"
                        animate="show"
                        custom={index}
                        className="absolute left-0 top-1/2 z-30 flex h-[90%] w-full -translate-y-1/2 items-center bg-transparent px-5 text-white mix-blend-difference"
                      >
                        <p className="mr-2 uppercase">{el} :</p>
                        <p>{detail}</p>
                      </motion.div>
                      {Array(4)
                        .fill(null)
                        .map((el, idx, ele) => {
                          return (
                            <motion.div
                              key={`section-about-third-${idx}`}
                              variants={line_vertical_animation}
                              initial="hidden"
                              animate="show"
                              custom={idx}
                              className={clsx(
                                "relative -top-[15%] h-[130%] w-full transition-all",
                                idx == ele.length - 1
                                  ? `border-x-2`
                                  : `border-l-2`,
                                index === ell_all.length - 1
                                  ? ` after:absolute after:bottom-[-15%] after:block after:text-white`
                                  : ``,
                                idx === ele.length - 1 &&
                                  index === ell_all.length - 1
                                  ? `before:absolute before:bottom-[-15%] before:left-[-10%] before:block before:text-white after:right-[-10%]`
                                  : `after:left-[-8%]`,
                                {
                                  [`after:content-['0%']`]:
                                    idx == 0 && index === ell_all.length - 1,
                                  [`after:content-['25%']`]:
                                    idx == 1 && index === ell_all.length - 1,
                                  [`after:content-['50%']`]:
                                    idx == 2 && index === ell_all.length - 1,
                                  [`before:content-['75%'] after:content-['100%']`]:
                                    idx == 3 && index === ell_all.length - 1,
                                }
                              )}
                            ></motion.div>
                          );
                        })}
                    </motion.div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
