'use client'
import ButtonGray from "@/components/buttons/button";
import clsx from "clsx";
import { AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'
import Image from "next/image";
import { StrictMode } from "react";

interface Iprop {
  direction: string;
  title: string;
  desc: string;
  features: string[];
  // image: string;
  image: any;
  idx: number;
  len: number;
  bgColor: string
}

const start_animate = 1

const group_text_animate = {
  hidden: {
    y: 0,
  },
  visible: {
    y: 0,
    transition: {
      duration: start_animate,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const line_animate = {
  hidden: { width: "0%" },
  visible: { width: "100%", transition: { duration: start_animate } },
};

const each_text_animate = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const SectionProduct = ({
  direction = "left",
  desc,
  features,
  image,
  title: titles,
  idx,
  len,
  bgColor,
}: Iprop) => {
  // const router = useRouter();

  const title = titles.split("\n");

  const handleClick = () => {
    // router.push(`products/${title}`);
  };

  return (
    <div
      className={clsx(
        "flex h-screen min-h-[677px] w-full rounded-t-3xl px-[3%] md:min-h-[1180px] lg:min-h-[798px]",
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
        <motion.div
          variants={group_text_animate}
          initial="hidden"
          whileInView="visible"
          className="mb-5 whitespace-pre-line text-center text-2xl md:text-6xl lg:text-left"
        >
          {title.map((el, idx) => (
            <motion.div className="overflow-hidden" key={`section-product-${idx}`}>
              <motion.span
                variants={each_text_animate}
                className="inline-block "
              >
                {el}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
        <p className="mb-5 text-center opacity-50 md:mb-10 lg:text-left">
          {desc}
        </p>
        <ul className="mb-10">
          <div
            className={clsx(
              "mb-2 overflow-hidden pb-2 font-normal uppercase",
              bgColor == "black" ? `` : `border-black`
            )}
          >
            <motion.span
              variants={each_text_animate}
              initial="hidden"
              whileInView="visible"
              className=" flex items-center gap-2 "
            >
              features
            </motion.span>
          </div>
          <motion.div
            variants={line_animate}
            initial="hidden"
            whileInView="visible"
            className="h-[2px] w-full bg-[rgb(100,100,100)]"
          ></motion.div>
          {features.map((el, idx) => {
            return (
              <StrictMode key={`product-feature-${idx}`}>
                <li className="overflow-hidden py-2 text-xl capitalize md:text-2xl">
                  <motion.span
                    variants={each_text_animate}
                    initial="hidden"
                    whileInView="visible"
                    className=" flex items-center gap-2"
                  >
                    <AiOutlineCheck color="green" />
                    {el}
                  </motion.span>
                </li>
                <motion.div
                  variants={line_animate}
                  initial="hidden"
                  whileInView="visible"
                  className="h-[2px] w-full bg-[rgb(100,100,100)]"
                ></motion.div>
              </StrictMode>
            );
          })}
        </ul>
        <div className="pb-5 lg:w-1/2 lg:pb-0">
          <ButtonGray cb={() => handleClick()}>VIEW MORE</ButtonGray>
        </div>
      </div>
      <div className="basis-3/5 pb-5 pt-3 md:pt-20">
        <div
          className={clsx(
            " mx-auto h-full w-[90%] rounded-2xl overflow-hidden grid place-items-end relative",
            bgColor == "black" ? ` bg-white` : `bg-black`
          )}
        >
          <Image
            src={image}
            alt={`image_product_bike_${titles}`}
            objectPosition="center"
            objectFit="contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default SectionProduct; 