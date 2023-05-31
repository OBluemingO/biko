
const SectionContact: React.FC = (): JSX.Element => {
  return (
    <div className="mt-[150px]  h-[500px] grid place-items-center w-full px-[3%] mx-auto bg-black rounded-t-3xl">
      <div className=" flex justify-around w-full h-3/4  items-center ">
        <div className="w-[45%] text-5xl  font-bold uppercase text-white border-r-2 border-b-2 px-8 py-4">
          <div className="w-full flex justify-between">
            {" "}
            <span>ipsum sit.</span> <span>Lipsum.</span>{" "}
          </div>
          <div className="w-full flex justify-between">
            {" "}
            <span>Lor, biko.</span> <span>##</span>{" "}
          </div>
          <div className="w-full flex justify-between">Lorem, ipsr ipsum.</div>
          <div className="w-full flex justify-between">
            {" "}
            <span>iosipousasd.</span> <span>biko.</span>{" "}
          </div>
        </div>
        <div className="w-1/3 h-1/2 flex flex-col justify-center gap-10 items-center">
          <button className="group relative overflow-hidden before:-left-full before:mix-blend-difference hover:before:left-0 before:transition-all before:duration-500 before:top-0 capitalize font-semibold text-2xl w-2/3 h-1/4 bg-white  before:content-[' '] before:absolute before:w-full before:h-full before:bg-white">
            contact us
            <div className="absolute h-full z-50 transition-all delay-100 group-hover:top-0 w-[4px] -top-full left-0 bg-red-500"></div>
            <div className="absolute h-full z-50 transition-all delay-100 group-hover:delay-500 group-hover:top-0 w-[4px] top-full right-0 bg-red-500"></div>
            <div className="absolute h-[4px] z-50 transition-all duration-500 group-hover:delay-100 top-0 w-full -right-full group-hover:right-0 bg-red-500"></div>
            <div className="absolute h-[4px] z-50 transition-all duration-500 group-hover:delay-100 bottom-0 w-full right-full group-hover:right-0 bg-red-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionContact