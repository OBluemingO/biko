"use client"
import { AnimatePresence, motion } from "framer-motion";
import InputComponent from "@/components/inputs/input.global"
import { useState } from "react";
import ButtonGlobal from "@/components/buttons/button.global";

export default function Page (){
  const [mapSelected, setMapSelected] = useState({
    id: "id-2",
    isSelect: false,
    text: "text-1",
  });

  return (
    <div className="grid h-auto min-h-mobile w-full bg-black md:min-h-tablet lg:h-screen lg:min-h-desktop lg:grid-cols-2">
      <div className="h-[500px] w-full border-2 pt-[120px] lg:h-full lg:pt-0">
        <motion.div className="relative h-full w-full bg-blue-500">
          {/* <AnimatePresence mode="wait">
            <motion.div
              layoutId={mapSelected.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-0 h-full w-full opacity-0"
            >
              {mapSelected.isSelect ? `text-2` : `text-1`}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {mapSelected.isSelect ? (
              <motion.div
                className="absolute bg-white"
                initial={{
                  right: "0%",
                  bottom: "0%",
                  width: "100%",
                  height: "100%",
                }}
                animate={{
                  right: "10%",
                  bottom: "10%",
                  width: "25%",
                  height: "25%",
                }}
                layoutId={mapSelected.id}
                onClick={() =>
                  setMapSelected((prev) => ({
                    id: "id-2",
                    isSelect: !prev.isSelect,
                    text: !prev.isSelect ? "test-1" : "test-2",
                  }))
                }
                key="test-key"
              >
                {mapSelected.text}
              </motion.div>
            ) : (
              <motion.div
                className="absolute bg-white"
                initial={{
                  right: "0%",
                  bottom: "0%",
                  width: "100%",
                  height: "100%",
                }}
                animate={{
                  right: "10%",
                  bottom: "10%",
                  width: "25%",
                  height: "25%",
                }}
                onClick={() =>
                  setMapSelected((prev) => ({
                    id: "id-2",
                    isSelect: !prev.isSelect,
                    text: !prev.isSelect ? "test-1" : "test-2",
                  }))
                }
                layoutId={mapSelected.id}
                key="test-2-key"
              >
                {mapSelected.text}
              </motion.div>
            )}
          </AnimatePresence> */}
        </motion.div>
      </div>
      <div className="relative flex h-full w-full items-center justify-center border-2 bg-white py-[5%] lg:py-0">
        <div className="w-full lg:px-[5%]">
          <h1 className="mx-auto w-5/6 text-5xl font-semibold capitalize lg:w-full">
            get in touch
          </h1>
          <form className="">
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:pb-4">
              <InputComponent
                {...{
                  name: "Firstname",
                  type: "text",
                  place_holder: "Gail",
                }}
                key="input-firstname"
              />
              <InputComponent
                {...{
                  name: "Lastname",
                  type: "text",
                  place_holder: "Kertzmann",
                }}
                key="input-lastname"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:pb-4">
              <InputComponent
                {...{
                  className: "mx-auto mt-4 lg:mt-0 w-5/6",
                  name: "Email",
                  type: "text",
                  place_holder: "biko_example@gmail.com",
                }}
                key="input-email"
              />
              <InputComponent
                {...{
                  className: "mx-auto mt-4 lg:mt-0 w-5/6",
                  name: "Company / Organization",
                  type: "text",
                  place_holder: "Osinski - Hartmann",
                }}
                key="input-company"
              />
            </div>
            <InputComponent
              className={"mx-auto mt-4 w-5/6 lg:mt-0 lg:w-full"}
              {...{
                name: "Message",
                type: "text",
                place_holder: "Gail",
              }}
              key="input-message"
            />
            <ButtonGlobal
              className="mx-[8%] mt-6 p-0 w-5/6 lg:mx-0 lg:w-full "
              type="submit"
            >
              Send
            </ButtonGlobal>
          </form>
        </div>
      </div>
    </div>
  );
}
