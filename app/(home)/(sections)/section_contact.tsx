
const SectionContact: React.FC = (): JSX.Element => {
  return (
    <div className="mx-auto mt-[150px] grid h-[300px] w-full place-items-center rounded-t-3xl bg-black px-[3%] md:h-[400px] lg:h-[500px]">
      <div className=" flex h-full w-full flex-col items-center lg:h-3/4 lg:flex-row  lg:justify-around ">
        <div className="mt-10 w-full overflow-hidden border-b-2 border-r-2 px-8  py-4 text-footer-header font-bold uppercase text-white lg:w-[45%] lg:text-5xl">
          <div className="flex w-full justify-between">
            {" "}
            <span>ipsum sit.</span> <span>Lipsum.</span>{" "}
          </div>
          <div className="flex w-full justify-between">
            {" "}
            <span>Lor, biko.</span> <span>##</span>{" "}
          </div>
          <div className="flex w-full justify-between">Lorem, ipsr ipsum.</div>
          <div className="flex w-full justify-between">
            {" "}
            <span>iosipod.</span> <span>biko.</span>{" "}
          </div>
        </div>
        <div className="flex h-1/2 w-full flex-col items-center justify-center gap-10 lg:w-1/3">
          <button className="before:content-[' '] group relative h-1/4 w-2/3 overflow-hidden bg-white text-footer-header font-semibold capitalize before:absolute before:-left-full before:top-0 before:h-full before:w-full  before:bg-white before:mix-blend-difference before:transition-all before:duration-500 hover:before:left-0 lg:text-2xl">
            contact us
            <div className="absolute -top-full left-0 z-50 h-full w-[4px] bg-red-500 transition-all delay-100 group-hover:top-0"></div>
            <div className="absolute right-0 top-full z-50 h-full w-[4px] bg-red-500 transition-all delay-100 group-hover:top-0 group-hover:delay-500"></div>
            <div className="absolute -right-full top-0 z-50 h-[4px] w-full bg-red-500 transition-all duration-500 group-hover:right-0 group-hover:delay-100"></div>
            <div className="absolute bottom-0 right-full z-50 h-[4px] w-full bg-red-500 transition-all duration-500 group-hover:right-0 group-hover:delay-100"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionContact