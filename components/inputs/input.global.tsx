'use client'
import React, { useRef } from 'react'
import clsx from 'clsx';
import { Props } from "../../typs/Form";

const InputGlobal = ({
  name = "null",
  type = "text",
  place_holder,
  className = '',
  label,
  required = false,
  register,
  isError = false,
  notMark = false
}: Props) => {

  const registerChecked = register ?  register(label, { required }) : {}
  return (
    <div className={clsx(className ? className : "mx-auto mt-4 w-5/6")}>
      <label htmlFor={name}>
        <div className={clsx("mb-2 flex gap-1 text-body")}>
          {name} {required && notMark == false ? <span className="text-red-500">*</span> : <span></span>}
        </div>
        <input
          className={clsx("w-full rounded-full border-2  px-4 py-2 focus:outline-none", isError ? `bg-red-200 border-red-400 placeholder:text-red-400`: `bg-white`)}
          type={type}
          placeholder={place_holder}
          {...registerChecked}
        />
      </label>
    </div>
  );
};

export default InputGlobal; 