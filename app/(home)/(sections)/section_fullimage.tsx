"use client"

import { useScroll, motion, useTransform } from "framer-motion"

const SectionFullImage = () => {
  const { scrollYProgress } = useScroll();
  const a = useTransform(scrollYProgress, [0,1], ['200px','0px'])
  return (
    <div className="w-full h-[300px] lg:h-screen p-[2.5%] overflow-hidden">
      <motion.div style={{backgroundPositionY: a}} initial={{backgroundSize: '130%'}} className="w-full h-full rounded-3xl bg-biko-d bg-cover bg-top lg:bg-center"></motion.div>
    </div>
  )
}

export default SectionFullImage 