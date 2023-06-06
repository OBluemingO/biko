"use client";
import { PageWrapper } from "@/components/WraperPage";
import { calcLength, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface IProps {}

const AboutUs: React.FC<IProps> = ({}: IProps): JSX.Element => {
  const pathname = usePathname();

  return (
    <motion.main
      className="h-screen w-full bg-black pt-96 text-white"
    >
      about us test
    </motion.main>
  );
};

export default AboutUs;
