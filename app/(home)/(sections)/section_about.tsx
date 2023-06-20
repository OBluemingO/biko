import ButtonGray from "@/components/buttons/button";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

type TCategorie = "wheels" | "drivetrain" | "frame" | "name";
type TDetail = "detail" | "percent";

type IData = {
  [key in TCategorie]:
    | {
        [index in TDetail]: string | number;
      }
    | (string & {});
};

const SectionAbout = () => {
  const [active, setActive] = useState<number>(0);
  const [data, setData] = useState<IData[]>([
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
  ]);

  useEffect(() => {
    const increase_active = setInterval(() => {
      setActive((prev) => (prev >= 3 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(increase_active);
  }, []);

  const handleClickActive = (idx: number) => {
    setActive(idx);
  };

  return (
    <>
      <div className="relative h-[1024px] w-full bg-biko-section bg-cover bg-[center_-1.5rem]">
        <div className=" flex h-full flex-col items-center justify-center">
          <h1 className="mb-[70px] text-header text-white">Testimonials</h1>
          <p className="mb-[65px] w-[calc(100%-20vw)] text-center text-detailBody text-body lg:w-[613px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            repudiandae tenetur labore sapiente beatae maxime repellat commodi
            error eligendi iste, dicta a! Ducimus ab recusandae repellendus est
            quis, mollitia ad?
          </p>
          <div className="max-w-[338px]">
            <ButtonGray>DISCOVER THE BENEFITS</ButtonGray>
          </div>
        </div>

        <div className="absolute left-0 top-0 h-[40%] w-full bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="flex  border-rose-50 bg-black px-[5%] pb-[150px] md:h-auto lg:h-[895px]">
        <div className="flex h-full w-[30%] flex-col">
          {Array(4)
            .fill(null)
            .map((el, idx) => {
              return (
                <div
                  className={clsx(
                    "before:content-[' '] mt-2 flex flex-grow cursor-pointer text-white before:block before:h-full before:w-[10px]",
                    active == idx ? "before:bg-green-200" : "before:bg-gray-200"
                  )}
                  onClick={() => handleClickActive(idx)}
                >
                  <div className="flex flex-col justify-center px-5">
                    <div className="text-2xl">mocmock</div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing nemo
                      quis temporibus commodi.
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="h-full flex-grow px-[5%]">
          <div className="flex h-full w-full flex-col px-[10%]">
            <div className="h-2/3 my-auto w-full">
              {Object.keys(data[active])
                .filter((el) => el != "name")
                .map((el, index, ell_all) => {
                  const { detail, percent } = data[active][
                    el as TCategorie
                  ] as { detail: string; percent: number };
                  return (
                    <div
                      className={clsx("relative grid h-1/3 w-full grid-cols-4")}
                    >
                      <div className="absolute left-0 top-1/2 z-30 h-[90%] w-full -translate-y-1/2 border-y-2 ">
                        <motion.div
                          style={{
                            width: `${percent}%`,
                          }}
                          className={clsx(
                            "h-full bg-white transition-all",
                            percent === 100 ? `` : `rounded-r-full`
                          )}
                        ></motion.div>
                      </div>
                      <div className="absolute left-0 top-1/2 z-30 flex h-[90%] w-full -translate-y-1/2 items-center bg-transparent px-5 text-white mix-blend-difference">
                        <p className="uppercase mr-2">{el} :</p>
                        <p>{detail}</p>
                      </div>
                      {Array(4)
                        .fill(null)
                        .map((el, idx, ele) => {
                          return (
                            <div
                              className={clsx(
                                "relative -top-[15%] h-[130%] w-full",
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
                            ></div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
            {/* <div className="w-full flex-grow "></div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
