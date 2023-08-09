import clsx from 'clsx';
import React from 'react'
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode
}

const ButtonToggle = ({children}: Props) => {
  return (
      <span
          className={clsx(
              `relative border-2 border-black px-10 py-3 capitalize`
          )}
      >
          <motion.span
              className={clsx(
                  "absolute left-0 top-0 h-full w-[45px] border-2 border-black"
              )}
              
          ></motion.span>
          {children}
      </span>
  );
}

export default ButtonToggle 