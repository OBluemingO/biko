import ButtonGray from "@/components/buttons/button";
import HeroBackground from '@/public/images/hero-section.png'

const SectionHero = () => {
  return (
    <div className="h-screen w-full bg-hero-section bg-cover bg-[center_-4rem] relative px-[3%]">
      <div className="flex relative z-10 flex-col justify-end h-full w-full pb-[70px]">
        <div className="text-8xl text-white ">Marathon bike</div>
        <div className="line h-[1px] w-full bg-[#414141] mt-[25px] mb-[35px]"></div>
        <div className="w-full flex justify-between items-center">
          <div className="w-1/2 text-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus saepe
            fugit quibusdam porro sit. Veniam ullam alias, blanditiis quo
          </div>
          <ButtonGray>DISCOVER THE BENEFITES</ButtonGray>
        </div>
      </div>
      <div className="absolute left-0 w-full bottom-0 h-[40%] bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default SectionHero;
