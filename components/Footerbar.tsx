import React from 'react'

const Footerbar = () => {
  return (
    <>
      <div className='fixed h-[80px] bottom-[30px] w-[80px] bg-white right-[3%] z-50 rounded-full'></div>
      <div className='fixed flex justify-center items-center bottom-0 bg-black w-full h-[140px]'>
        <div className="border-2 rounded-full border-white  z-50 w-[calc(100vw-30%)] h-[80px] transition-all bg-[#141415]"></div>
      </div>
    </>
  );
}

export default Footerbar