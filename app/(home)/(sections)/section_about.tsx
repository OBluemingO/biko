import ButtonGray from "@/components/buttons/button";
import Card from "@/components/cards/card";
import React, { useState } from "react"
import clsx from "clsx";

const SectionAbout = () => {
  // const content = {
  //   rate: 4,
  //   name: "phayuphat trilao",
  //   body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aspernatur enim velit quod tempora iure! Quidem expedita praesentium libero ab.",
  //   image: "https://mystiquemedicalspa.com/wp-content/uploads/2014/11/bigstock-159411362-Copy.jpg",
  // };

  // const contentMain = {
  //   rate: 4,
  //   name: "phayuphat trilao",
  //   body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aspernatur enim velit quod tempora iure! Quidem expedita praesentium libero ab.Lorem ipsum dolor sit amet,",
  //   image: "https://mystiquemedicalspa.com/wp-content/uploads/2014/11/bigstock-159411362-Copy.jpg",
  // };

  const [active, setActive] = useState(0)

  const handleClickActive = (idx: number) => {
    setActive(idx)
  }

  return (
      <>
          <div className="relative h-[1024px] w-full bg-biko-section bg-cover bg-[center_-1.5rem]">
              <div className=" flex h-full flex-col items-center justify-center">
                  <h1 className="mb-[70px] text-header text-white">
                      Testimonials
                  </h1>
                  <p className="mb-[65px] w-[calc(100%-20vw)] text-center text-detailBody text-body lg:w-[613px]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ducimus repudiandae tenetur labore sapiente beatae maxime
                      repellat commodi error eligendi iste, dicta a! Ducimus ab
                      recusandae repellendus est quis, mollitia ad?
                  </p>
                  <div className="max-w-[338px]">
                      <ButtonGray>DISCOVER THE BENEFITS</ButtonGray>
                  </div>
              </div>

              <div className="absolute left-0 top-0 h-[40%] w-full bg-gradient-to-b from-black to-transparent" />
              <div className="absolute bottom-0 left-0 h-[20%] w-full bg-gradient-to-t from-black to-transparent" />
          </div>
          <div className="flex border-2 border-rose-50 bg-black px-[5%] pb-[150px] md:h-auto lg:h-[895px]">
              <div className="flex h-full w-[30%] flex-col bg-green-200">
                  {Array(4)
                      .fill(null)
                      .map((el, idx) => {
                          return (
                              <div
                                  className={clsx(
                                      "before:content-[' '] flex flex-grow bg-yellow-200 text-black before:block before:h-full before:w-[10px] ",
                                      active == idx
                                          ? "before:bg-green-200"
                                          : "before:bg-gray-200"
                                  )}
                                  onClick={() => handleClickActive(idx)}
                              >
                                  <div className="flex flex-col justify-center px-5">
                                      <div className="text-2xl">mocmock</div>
                                      <div>
                                          Lorem ipsum dolor sit amet consectetur
                                          adipisicing nemo quis temporibus
                                          commodi.
                                      </div>
                                  </div>
                              </div>
                          );
                      })}
              </div>
              <div className="h-full flex-grow bg-white"></div>
              {/* <div className="w-full h-full flex flex-col gap-10 ">
          <div className=" w-full h-1/2">
            <Card {...content} />
          </div>
          <div className=" w-full h-1/2">
            <Card {...{ ...content, rate: 3 }} />
          </div>
        </div>
        <div className="w-full h-full ">
          <Card {...{ ...contentMain, rate: 6 }} />
        </div>
        <div className="w-full h-full flex flex-col gap-10 ">
          <div className=" w-full h-1/2">
            <Card {...{ ...content, rate: 2 }} />
          </div>
          <div className=" w-full h-1/2">
            <Card {...{ ...content, rate: 1 }} />
          </div>
        </div> */}
          </div>
      </>
  );
};

export default SectionAbout;
