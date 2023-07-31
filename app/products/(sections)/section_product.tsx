'use client'
import ButtonGray from "@/components/buttons/button";
import clsx from "clsx";
import { AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/navigation";

interface Iprop {
  direction: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
  idx: number;
  len: number;
  bgColor: string
}

const SectionProduct = ({
  direction = "left",
  desc,
  features,
  image,
  title,
  idx,
  len,
  bgColor
}: Iprop) => {

  const router = useRouter()

  const handleClick = () => {
    router.push(`products/${title}`)
  }

  return (
    <div
      className={clsx(
        "flex h-screen w-full rounded-t-3xl px-[3%]",
        bgColor == "black" ? `bg-black` : `bg-white text-black`,
        idx == len - 1 ? `relative` : `sticky top-0`,
        direction == "left"
          ? `flex-col-reverse  lg:flex-row`
          : `flex-col-reverse lg:flex-row-reverse`
      )}
    >
      <div
        className={clsx(
          "basis-2/5 pt-0 lg:pt-20 ",
          direction == "left" ? `lg:pr-4` : `lg:pl-4`
        )}
      >
        <div className="mb-5 whitespace-pre-line text-2xl md:text-6xl text-center lg:text-left">{title}</div>
        <p className="mb-5 md:mb-10 opacity-50 text-center lg:text-left">{desc}</p>
        <ul className="mb-10">
          <div className={clsx("border-b-2 font-normal uppercase pb-3 mb-3", bgColor == 'black' ? `` : `border-black`)}>features</div>
          {features.map((el) => {
            return (
              <li className="flex items-center gap-2 border-b-2 border-[rgb(25,25,25,0.6)] py-2 text-xl md:text-2xl capitalize">
                <AiOutlineCheck color="green" />
                {el}
              </li>
            );
          })}
        </ul>
        <div className="pb-5 lg:pb-0 lg:w-1/2">
          <ButtonGray cb={() => handleClick()}>VIEW MORE</ButtonGray>
        </div>
      </div>
      <div className="basis-3/5 pb-5 pt-3 md:pt-20">
        <div
          className={clsx(
            " mx-auto h-full w-[90%] rounded-2xl",
            bgColor == "black" ? ` bg-white` : `bg-black`
          )}
        ></div>
      </div>
    </div>
  );
};

export default SectionProduct; 