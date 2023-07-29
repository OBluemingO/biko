"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import SectionHero from "./(sections)/section_hero";

interface IProps {}

const AboutUs: React.FC<IProps> = ({}: IProps): JSX.Element => {
  const pathname = usePathname();

  return (
    <motion.main className="w-full bg-black px-[3%] text-white">
      <SectionHero />
    </motion.main>
  );
};

export default AboutUs;
