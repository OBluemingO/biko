"use client"
import AuthInput from "@/components/inputs/auth.input"
import { useEffect, useMemo, useState } from "react";

export default function Page (){
  const [matchScreen, setMatchScreen] = useState<boolean | null>(null);
  useEffect(() => {
    console.log(document.readyState)
    const handleResize = () => {
      setMatchScreen(window.matchMedia("(min-width: 1023px)").matches);
    };
    window.addEventListener("DOMContentLoaded", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("DOMContentLoaded", handleResize);
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    console.log(document.readyState)
  },[document.readyState])

  return (
    <div className="grid h-screen min-h-mobile w-full lg:grid-cols-2 bg-black md:min-h-tablet lg:min-h-desktop">
      <div className="h-full w-full border-2 pt-[120px] lg:pt-0"> <div className="w-full h-full bg-blue-500"></div></div>
      <div className="relative h-full w-full border-2 bg-white">
        <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-0 top-1/2 -translate-y-1/2 px-[5%]">
          <h1 className="text-5xl font-semibold capitalize">get in touch</h1>
          <form className="">
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:pb-4">
              <AuthInput
                {...{
                  name: "FIRSTNAME",
                  type: "text",
                  place_holder: "Gail",
                }}
                key="input-firstname"
              />
              <AuthInput
                {...{
                  name: "LASTNAME",
                  type: "text",
                  place_holder: "Kertzmann",
                }}
                key="input-firstname"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-4 lg:pb-4">
              <AuthInput
                {...{
                  name: "FIRSTNAME",
                  type: "text",
                  place_holder: "Gail",
                }}
                key="input-firstname"
              />
              <AuthInput
                {...{
                  name: "LASTNAME",
                  type: "text",
                  place_holder: "Kertzmann",
                }}
                key="input-firstname"
              />
            </div>
            <AuthInput
              className={matchScreen ? 'mt-0' : ''}
              {...{
                name: "FIRSTNAME",
                type: "text",
                place_holder: "Gail",
              }}
              key="input-firstname"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
