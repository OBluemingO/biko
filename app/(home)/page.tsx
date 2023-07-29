'use client'
import SectionAbout from "./(sections)/section_about";
import SectionContact from "./(sections)/section_contact";
import SectionDetail from "./(sections)/section_detail";
import SectionFaq from "./(sections)/section_faq";
import SectionHero from "./(sections)/section_hero";
import SectionImage from "./(sections)/section_image";
import SectionFullImage  from "./(sections)/section_fullimage"
import SectionImageDetail from "./(sections)/section_image_detail";
import { useLayoutEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0 });
  }, []);

  const all = useSession();

  return (
      <main
        className="w-full overflow-x-hidden"
      >
        <SectionHero />
        <SectionAbout />
        <SectionDetail />
        <SectionImage />
        <SectionFaq />
        <SectionFullImage />
        <SectionImageDetail />
        <SectionContact />
      </main>
  );
}
