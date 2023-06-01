"use client"
import axios from "axios";
// import { useEffect, useLayoutEffect } from "react";
import SectionAbout from "./(sections)/section_about";
import SectionContact from "./(sections)/section_contact";
import SectionDetail from "./(sections)/section_detail";
import SectionFaq from "./(sections)/section_faq";
import SectionHero from "./(sections)/section_hero"
import SectionImage from "./(sections)/section_image";

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

export default async function Home() {
  // const data = await getData()

  return (
    <main className="w-full overflow-x-hidden">
      <SectionHero />
      <SectionAbout />
      <SectionDetail />
      <SectionImage />
      <SectionFaq />
      <SectionContact />
    </main>
  );
}
