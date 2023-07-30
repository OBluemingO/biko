'use client'
import ButtonGray from "@/components/buttons/button";
import clsx from "clsx";
import { AiOutlineCheck } from "react-icons/ai";

interface Iprop {
  direction: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
  idx: number
}

const SectionProduct = ({
  direction = "left",
  desc,
  features,
  image,
  title,
  idx,
}: Iprop) => {

  const handleClick = () => {
    console.log('first')
  }

  return (
    <div
      className={clsx(
        "flex h-screen w-full  bg-black",
        idx != 0 ? `relative` : `sticky top-0 pt-24`,
        direction == "left"
          ? `md:flex-col-reverse  lg:flex-row`
          : `md:flex-col-reverse lg:flex-row-reverse`
      )}
    >
      <div
        className={clsx(
          "basis-2/5 border-2 border-white pt-20",
          direction == "left" ? `lg:pr-4` : `lg:pl-4`
        )}
      >
        <div className="text-6xl">{title}</div>
        <p className="mb-10 opacity-50">{desc}</p>
        <ul className="mb-10">
          <div className="border-b-2 font-light uppercase">features</div>
          {features.map((el) => {
            return (
              <li className="flex items-center gap-2 border-b-2 border-[rgb(25,25,25,0.6)] py-2 text-2xl capitalize">
                <AiOutlineCheck color="green" />
                {el}
              </li>
            );
          })}
        </ul>
        <div className="lg:w-1/2">
          <ButtonGray cb={() => handleClick()}>VIEW MORE</ButtonGray>
        </div>
      </div>
      <div className="basis-3/5 border-2 border-white pb-5 pt-20">
        <div className=" mx-auto h-full w-[90%] rounded-2xl bg-white"></div>
      </div>
    </div>
  );
};

export default SectionProduct; 