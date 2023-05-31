import SectionAbout from "./(sections)/section_about";
import SectionContact from "./(sections)/section_contact";
import SectionDetail from "./(sections)/section_detail";
import SectionFaq from "./(sections)/section_faq";
import SectionHero from "./(sections)/section_hero"
import SectionImage from "./(sections)/section_image";

export default function Home() {
  return (
    <main className="w-full">
      <SectionHero />
      {/* <SectionAbout /> */}
      {/* <SectionDetail /> */}
      {/* <SectionImage /> */}
      {/* <SectionFaq /> */}
      {/* <SectionContact /> */}
    </main>
  );
}
