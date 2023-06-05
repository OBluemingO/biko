import React from 'react'

const AuthInput = ({
  name = "null",
  type = "text",
  place_holder,
}: {
  name: string;
  type: string;
  place_holder?: string;
}) => {
  return (
    <div className="mx-auto mt-4 w-5/6">
      <label htmlFor={name}>
        <p className="mb-2 text-body">{name}</p>
        <input
          className=" w-full rounded-full border-2 bg-white px-4 py-2 focus:outline-none"
          type={type}
          name={name}
          placeholder={place_holder}
        />
      </label>
    </div>
  );
};

export default AuthInput; 