import SectionProduct from "./(sections)/section_product";

interface IProps {}

const AboutUs: React.FC<IProps> = ({}: IProps): JSX.Element => {

  const mock_data = [
    {
      title: "mock",
      desc: "mock",
      image: "mock",
      features: ["mock", "mock", "mock", "mock"],
      direction: "left",
    },
    {
      title: "mock",
      desc: "mock",
      image: "mock",
      features: ["mock", "mock", "mock", "mock"],
      direction: "right",
    },
  ];

  return (
    <main className="w-full bg-black px-[3%] text-white">
      {
        mock_data.map((el, idx) => {
          return (
            <SectionProduct
              {...Object.assign(el, { idx })}
              key={`product_biko_${idx}`}
            />
          );
        })
      }
    </main>
  );
};

export default AboutUs;
