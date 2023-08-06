'use client'
import React, { useRef } from 'react'
import clsx from 'clsx';
import { UseFormRegister } from "react-hook-form";
import { IContact } from "../../typs/ContactForm";

interface Props {
  name: string;
  type: string;
  className ?: string;
  label: keyof IContact;
  place_holder?: string;
  required?: boolean
  register: UseFormRegister<IContact>;
}

const InputGlobal = ({
  name = "null",
  type = "text",
  place_holder,
  className = '',
  label,
  required = false,
  register
}: Props) => {

  const registerChecked = register ?  register(label, { required }) : {}

  return (
    <div className={clsx(className ? className : "mx-auto mt-4 w-5/6")}>
      <label htmlFor={name}>
        <div className="mb-2 flex gap-1 text-body">
          {name} {required ? <span className="text-red-500">*</span> : <></>}
        </div>
        <input
          className=" w-full rounded-full border-2 bg-white px-4 py-2 focus:outline-none"
          type={type}
          placeholder={place_holder}
          {...registerChecked}
        />
      </label>
    </div>
  );
};

export default InputGlobal; 