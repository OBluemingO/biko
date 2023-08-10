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
            <div className="absolute left-[2.5%] h-[90%] w-[40px] translate-x-0 rounded-full bg-white duration-500 ease-out-circ group-hover:left-[97.5%] group-hover:-translate-x-full grid place-items-center">
                <GrCaretNext color='black' />
            </div>
            {children}
        </button>
    );
};

export default ButtonToggle;
