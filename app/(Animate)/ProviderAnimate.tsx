"use client"
import { AnimatePresence } from "framer-motion";
const ProviderAnimate = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

export default ProviderAnimate;
