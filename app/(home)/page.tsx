import SectionAbout from "./(sections)/section_about";
import SectionDetail from "./(sections)/section_detail";
import SectionHero from "./(sections)/section_hero"
import SectionImage from "./(sections)/section_image";
export default function Home() {
  return (
    <main className="w-full">
      <SectionHero />
      <SectionAbout />
      <SectionDetail />
      <SectionImage />
    </main>
  );
}
