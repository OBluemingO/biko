"use client";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={clsx("relative wraper-page", className)}>
    <AnimatePresence mode="wait">
      {/* <motion.div
        initial={{ left: "100%" }}
        animate={{
          left: "-100%",
          transition: {
            duration: 2,
          },
        }}
        className="absolute top-0 z-[6000] h-full w-full bg-green-200"
      ></motion.div> */}
      {children}
    </AnimatePresence>
  </div>
);
