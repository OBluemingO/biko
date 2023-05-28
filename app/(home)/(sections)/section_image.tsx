import React from 'react'

const SectionImage = () => {
  return (
    <div className='h-[1611px] w-full px-[3%] flex flex-col gap-5'>
      <div className="flex gap-5 h-[873px]">
        <div className='basis-1/2 bg-biko-a bg-cover rounded-[20px]'></div>
        <div className='basis-1/2 bg-biko-b bg-cover rounded-[20px]'></div>
      </div>
      <div className='w-full bg-biko-c bg-cover rounded-[20px] h-[712px]'></div>
    </div>
  );
}

export default SectionImage 