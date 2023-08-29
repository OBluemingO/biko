"use client"
import { AnimatePresence, motion } from "framer-motion";
import InputComponent from "@/components/inputs/input.global"
import { useState } from "react";
import ButtonGlobal from "@/components/buttons/button.global";
import InputTextarea from "@/components/inputs/input.textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { TRegisterGroup } from "@/typs/Form";



export default function Page (){

  const { handleSubmit:formHook,  formState: { errors }, watch, register } = useForm<TRegisterGroup>()
  const [mapSelected, setMapSelected] = useState({
    id: "id-2",
    isSelect: false,
    text: "text-1",
  });
  
  const handleSubmit: SubmitHandler<TRegisterGroup> = async(data) => {
        console.log(data);
        // e.preventDefault();
        // const user_login_info = new FormData(e.target as HTMLFormElement);
        // const form_data_into_object = Object.fromEntries(
        //   user_login_info.entries()
        // );
        // console.log(form_data_into_object,'====== form data')
        // const { data } = await loginAuth(form_data_into_object); 
        // console.log(data);

  }

  return (
    <div className="grid h-auto overflow-hidden relative min-h-mobile w-full bg-black md:min-h-tablet lg:h-auto lg:min-h-desktop lg:grid-cols-2">
      <div className="h-[500px] w-full pt-[120px] lg:h-full lg:pt-0">
        <motion.div className="relative h-full w-full bg-get-in-touch bg-top ">
        </motion.div>
      </div>
      <div className="relative flex h-full w-full items-center justify-center border-2 bg-white py-[5%] lg:py-[7.5vw]">
        <div className="w-full lg:px-[5%]">
          <h1 className="mx-auto w-5/6 text-5xl font-semibold capitalize lg:w-full">
            get in touch
          </h1>
          <form onSubmit={formHook(handleSubmit)}>
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:pb-4">
              <InputComponent
                {...{
                  name: "Firstname",
                  label: "first_name",
                  type: "text",
                  place_holder: "Gail",
                  required: true,
                  register,
                  isError: (errors as any)?.first_name ? true : false,
                }}
                key="input-firstname"
              />
              <InputComponent
                {...{
                  register,
                  name: "Lastname",
                  label: "last_name",
                  type: "text",
                  place_holder: "Kertzmann",
                  required: true,
                  isError: (errors as any)?.last_name ? true : false,
                }}
                key="input-lastname"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:pb-4">
              <InputComponent
                {...{
                  register,
                  className: "mx-auto mt-4 lg:mt-0 w-5/6",
                  name: "Email",
                  label: "email",
                  type: "email",
                  place_holder: "biko_example@gmail.com",
                }}
                key="input-email"
              />
              <InputComponent
                {...{
                  register,
                  className: "mx-auto mt-4 lg:mt-0 w-5/6",
                  name: "Company / Organization",
                  label: "company",
                  type: "text",
                  place_holder: "Osinski - Hartmann",
                }}
                key="input-company"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:pb-4">
              <InputComponent
                {...{
                  register,
                  className: "mx-auto mt-4 lg:mt-0 w-5/6",
                  name: "Phone",
                  label: "phone_number",
                  type: "tel",
                  place_holder: "0-123-3456789",
                }}
                key="input-phone"
              />
              <InputComponent
                {...{
                  register,
                  className: "mx-auto mt-4 lg:mt-0 w-5/6",
                  name: "Country / Region",
                  label: "country",
                  type: "text",
                  place_holder: "Heard Island and McDonald Islands",
                }}
                key="input-company"
              />
            </div>
            <InputTextarea
              className={"scrollbar mx-auto h-44 resize-none lg:w-full"}
              {...{
                register,
                type: "text",
                name: "Message",
                label: "message",
                place_holder:
                  "Earum saepe officia sit sunt optio labore voluptates. Quaerat omnis et quisquam doloribus. Magnam in recusandae sunt neque et exercitationem est. Impedit voluptate ipsum et sunt quam.",
                required: true,
                isError: (errors as any)?.message ? true : false,
              }}
              key="input-message"
            />
            <ButtonGlobal
              className="mx-[8%] mt-6 w-5/6 p-0 lg:mx-0 lg:w-full "
              type="submit"
            >
              Send
            </ButtonGlobal>
          </form>
        </div>
      </div>
      <div className="w-full h-[50px] bg-black col-span-2"></div>
    </div>
  );
}
