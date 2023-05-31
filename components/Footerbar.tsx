const Footerbar = () => {
  return (
    <div className="bg-black w-full px-[3%] mx-auto">
      <div className="w-[75px] h-[75px] mx-auto bg-white rounded-full"></div>
      <div className="mx-auto w-[80%] h-[1px] bg-white mt-[30px]"></div>
      <div className="mx-auto w-[90%] h-[1px] bg-white mt-[15px]"></div>
      <div className="w-full h-[1px] bg-white mt-[15px]"></div>
      <div className="flex items-center flex-col gap-5 w-full h-[150px] mt-[30px]">
        <div className="flex gap-10">
          <div className="w-[75px] h-[75px] bg-white rounded-full"></div>
          <div className="w-[75px] h-[75px] bg-white rounded-full"></div>
          <div className="w-[75px] h-[75px] bg-white rounded-full"></div>
          <div className="w-[75px] h-[75px] bg-white rounded-full"></div>
        </div>
        <div className="text-white">
          © 2023. Copyright of  Phayuphat Trilao.
        </div>
      </div>
    </div>
  );
}

export default Footerbar