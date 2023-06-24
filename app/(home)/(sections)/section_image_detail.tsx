import { TbWeight } from "react-icons/tb";
const SectionImageDetail = () => {
  return (
    <div className="flex h-[87px] w-full  px-[2.5%]">
      <div className="flex h-full flex-grow items-center justify-around md:border-r-[1px]">
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <TbWeight />
            <p className="">Weight</p>
          </div>
          <h2 className="text-4xl font-semibold">10 kg</h2>
        </div>
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <TbWeight />
            <p className="">Weight</p>
          </div>
          <h2 className="text-4xl font-semibold">10 kg</h2>
        </div>
      </div>
      <div className="hidden md:flex h-full flex-grow  items-center justify-around lg:border-r-[1px]">
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <TbWeight />
            <p className="">Weight</p>
          </div>
          <h2 className="text-4xl font-semibold">10 kg</h2>
        </div>
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <TbWeight />
            <p className="">Weight</p>
          </div>
          <h2 className="text-4xl font-semibold">10 kg</h2>
        </div>
      </div>{" "}
      <div className="hidden lg:flex h-full flex-grow  items-center justify-around border-r-[1px]">
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <TbWeight />
            <p className="">Weight</p>
          </div>
          <h2 className="text-4xl font-semibold">10 kg</h2>
        </div>
        <div className="">
          <div className="flex items-center justify-center gap-2">
            <TbWeight />
            <p className="">Weight</p>
          </div>
          <h2 className="text-4xl font-semibold">10 kg</h2>
        </div>
      </div>{" "}
      <div className="hidden lg:flex h-full lg:w-[300px] lg:px-16 items-center justify-center">
        All the components are made in USA and ansambled in Japan
      </div>{" "}
    </div>
  );
};

export default SectionImageDetail;
