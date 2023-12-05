'use client'
import SectionAbout from "./(sections)/section_about";
import SectionContact from "./(sections)/section_contact";
import SectionDetail from "./(sections)/section_detail";
import SectionFaq from "./(sections)/section_faq";
import SectionHero from "./(sections)/section_hero";
import SectionImage from "./(sections)/section_image";
import SectionFullImage  from "./(sections)/section_fullimage"
import SectionAboutNew from './(sections)/section_about_new'
import SectionImageDetail from "./(sections)/section_image_detail";

export default function Home() {

  return (
      <main
        className="w-full overflow-x-hidden"
      >
        <SectionHero />
        {/* <SectionAboutNew /> */}
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
