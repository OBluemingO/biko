"use client"
import { motion } from "framer-motion";
import SectionAbout from "./(sections)/section_about";
import SectionContact from "./(sections)/section_contact";
import SectionDetail from "./(sections)/section_detail";
import SectionFaq from "./(sections)/section_faq";
import SectionHero from "./(sections)/section_hero";
import SectionImage from "./(sections)/section_image";
import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons/button.auth";
import { PageWrapper } from "@/components/WraperPage";
import { usePathname } from "next/navigation";
// import { PageWrapper } from "@/components/WraperPage";

// ? NOTE: data fetch in server component
// async function getData() {
//   const { data } = await axios.get(
//     "https://dummyapi.io/data/v1/comment?limit=",
//     {
//       headers: { "app-id": "6478c77f760dea7ba66aba29" },
//     }
//   );

//   return data
// }

export default function Home() {

  const pathname = usePathname()
  return (
      <motion.main
        className="w-full overflow-x-hidden"
      >
        <SectionHero />
        <SectionAbout />
        <SectionDetail />
        <SectionImage />
        <SectionFaq />
        <SectionContact />
      </motion.main>
  );
}
