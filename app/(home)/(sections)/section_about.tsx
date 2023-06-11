import ButtonGray from "@/components/buttons/button";
import Card from "@/components/cards/card";
import React from "react";

const SectionAbout = () => {
  const content = {
    rate: 4,
    name: "phayuphat trilao",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aspernatur enim velit quod tempora iure! Quidem expedita praesentium libero ab.",
    image: "https://mystiquemedicalspa.com/wp-content/uploads/2014/11/bigstock-159411362-Copy.jpg",
  };

  const contentMain = {
    rate: 4,
    name: "phayuphat trilao",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem aspernatur enim velit quod tempora iure! Quidem expedita praesentium libero ab.Lorem ipsum dolor sit amet,",
    image: "https://mystiquemedicalspa.com/wp-content/uploads/2014/11/bigstock-159411362-Copy.jpg",
  };

  return (
    <>
      <div className="w-full h-[1024px] bg-biko-section relative bg-cover bg-[center_-1.5rem]">
        <div className=" flex flex-col items-center justify-center h-full">
          <h1 className="text-white mb-[70px] text-header">Testimonials</h1>
          <p className="text-body w-[calc(100%-20vw)] lg:w-[613px] text-center text-detailBody mb-[65px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            repudiandae tenetur labore sapiente beatae maxime repellat commodi
            error eligendi iste, dicta a! Ducimus ab recusandae repellendus est
            quis, mollitia ad?
          </p>
          <div className="max-w-[338px]">
            <ButtonGray>DISCOVER THE BENEFITS</ButtonGray>
          </div>
        </div>

        <div className="absolute left-0 w-full top-0 h-[40%] bg-gradient-to-b from-black to-transparent" />
        <div className="absolute left-0 w-full bottom-0 h-[20%] bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5 md:h-auto lg:h-[895px] bg-black px-[3%] pb-[150px]">
        <div className="w-full h-full flex flex-col gap-10 ">
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
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
