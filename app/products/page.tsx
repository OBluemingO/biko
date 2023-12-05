"use client"
import SectionProduct from "./(sections)/section_product";
import ImageProuctFirst from '../../public/images/bike-with-bg-black-1.png'
import ImageProuctSeconde from '../../public/images/bike-with-bg-white-1.png'
import ImageProuctThrid from '../../public/images/bike-with-bg-white-2.png'
import Image from "next/image";
import ImageSectionTop from "../../public/images/product-section-top.jpg";
interface IProps {}

const AboutUs: React.FC<IProps> = ({}: IProps): JSX.Element => {

  const mock_data = [
    {
      title: "More of what \n you do  want.",
      desc: "Less of what you don’t.",
      image: ImageProuctFirst,
      features: [
        "Ergonomic Steel Table",
        "Gorgeous Plastic Towels",
        "Handcrafted Fresh Shirt",
        "Rustic Steel Chicken",
      ],
      direction: "left",
      bgColor: "black",
    },
    {
      title: "More of what \n you do  want.",
      desc: "Less of what you don’t.",
      image: ImageProuctSeconde,
      features: [
        "Ergonomic Steel Table",
        "Gorgeous Plastic Towels",
        "Handcrafted Fresh Shirt",
        "Rustic Steel Chicken",
      ],
      direction: "right",
      bgColor: "white",
    },
    {
      title: "More of what \n you do  want.",
      desc: "Less of what you don’t.",
      image: ImageProuctThrid,
      features: [
        "Ergonomic Steel Table",
        "Gorgeous Plastic Towels",
        "Handcrafted Fresh Shirt",
        "Rustic Steel Chicken",
      ],
      direction: "left",
      bgColor: "black",
    },
  ];

  return (
    <main className="w-full bg-white text-white">
      <div className="relative flex h-screen w-full items-end justify-end">
        <Image 
          src={ImageSectionTop} 
          alt="bike-mock" 
          objectFit="contain"
          fill 
        />
        <h1 className="relative z-[5] mb-10 mr-20 rounded-xl bg-black/50 p-4 text-center text-3xl backdrop-blur-sm md:text-7xl">
          Lorem ipsum <br />
          dolor sit.
        </h1>
      </div>
      {mock_data.map((el, idx, ele) => {
        return (
          <SectionProduct
            {...Object.assign(el, { idx, len: ele.length })}
            key={`product_biko_${idx}`}
          />
        );
      })}
    </main>
  );
};

export default AboutUs;
