import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
import {GrCaretNext} from 'react-icons/gr'

interface Props {
    children: React.ReactNode;
}

const ButtonToggle = ({ children }: Props) => {
    return (
        <button
            className={clsx(
                `bg-gray-little-light group relative flex h-[45px] 
                w-[180px] items-center justify-center
                overflow-hidden rounded-full border-[1px] 
                border-gray-light text-center 
                capitalize text-body
               `
            )}
        >
            <div className="left-0 w-0 mix-blend-difference group-hover:w-full ease-out-circ duration-[800ms] bg-white absolute h-full"></div>
            <div className="mix-blend-difference left-[5%] ease-out-circ duration-700 group-hover:left-[75%] w-[35px] h-[35px] bg-white rounded-full absolute grid place-items-center">
                <GrCaretNext className="translate-x-[2px]" color='black' />
            </div>
            {children}
        </button>
    );
};

export default ButtonToggle;
