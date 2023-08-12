'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { UseFormRegister } from 'react-hook-form'
import { IContact } from "../../typs/Form";

interface ILabel extends Pick<IContact, 'message'>{
}

interface Props {
  name: string;
  label: keyof ILabel;
  place_holder: string;
  className: string;
  required?: boolean;
  register: UseFormRegister<IContact>;
}

const InputTextarea: React.FC<Props> = ({
  name,
  label,
  place_holder,
  className,
  required,
  register,
}: Props) => {
  const registerChecked = register ? register(label, { required }) : {};

  return (
    <div className="mx-auto mt-4 w-5/6 lg:mt-0 lg:w-full">
      <label htmlFor={name}>
        <p className="mb-2 flex gap-1 text-body">
          {name} {required ? <span className="text-red-500">*</span> : <></>}
        </p>
        <textarea
          className={twMerge(
            " w-full rounded-2xl border-2 bg-white px-6 py-2 focus:outline-none",
            className
          )}
          placeholder={place_holder}
          {...registerChecked}
        />
        
      </label>
    </div>
  );
};

export default InputTextarea 