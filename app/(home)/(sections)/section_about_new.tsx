import React from 'react'

const sectionAboutNew = () => {

  const text = `Lorem ipsum dolor sit amet  consectetur \n adipisicing elit. Ea`
  const text_card = `Lorem ipsum, dolor sit amet consectetur \n adipisicing elit. Veritatis, numquam  elit\n Veritatis, numquam.`;
  return (
      <div className="flex h-screen w-full flex-col bg-white">
          <div className="flex h-1/2 w-full items-end justify-center bg-blue-800">
              <h1 className="whitespace-pre-line text-center text-8xl">
                  {text}
              </h1>
          </div>
          <div className="flex h-1/2 w-full bg-green-200">
              <div className="relative flex h-full basis-4/12 flex-col bg-purple-700">
                  <div className="flex w-full flex-1 bg-black">
                      <div className="flex-1 bg-green-200 gap-4 flex flex-col">
                          <h1 className="text-4xl">Lorem, ipsum.</h1>
                          <p className='whitespace-pre-line'>
                            {text_card}
                          </p>
                      </div>
                      <div className="flex-1 bg-green-200"></div>
                  </div>
                  <div className="h-[300px] w-full rounded-2xl bg-white"></div>
              </div>
              <div className="relative h-full basis-8/12  bg-red-500"></div>
          </div>
      </div>
  );
}

export default sectionAboutNew; 