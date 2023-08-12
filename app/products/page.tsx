"use client"
import SectionProduct from "./(sections)/section_product";
interface IProps {}

const AboutUs: React.FC<IProps> = ({}: IProps): JSX.Element => {

  const mock_data = [
    {
      title: "More of what \n you do  want.",
      desc: "Less of what you don’t.",
      image: "mock",
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
      image: "mock",
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
      image: "mock",
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
    <main className="w-full bg-black text-white">
      <div className="flex h-screen w-full items-end justify-center">
        <h1 className="mb-20 text-center text-3xl md:text-7xl">
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
