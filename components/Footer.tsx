import { IoLogoDesignernews, IoLogoCodepen, IoLogoXing } from 'react-icons/io'
import { IoLogoDeviantart, IoLogoPwa } from 'react-icons/io5'

const Footer = () => {
  const GroupLogo = [IoLogoDeviantart, IoLogoPwa, IoLogoDesignernews, IoLogoCodepen]

  return (
    <div className="bg-black w-full pt-[3%] px-[3%] mx-auto">
      <div className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] mx-auto bg-white rounded-full grid place-items-center">
        <IoLogoXing className='w-[90%] h-[90%]' />
      </div>
      <div className="mx-auto w-[80%] h-[1px] bg-white mt-[30px]"></div>
      <div className="mx-auto w-[90%] h-[1px] bg-white mt-[15px]"></div>
      <div className="w-full h-[1px] bg-white mt-[15px]"></div>
      <div className="flex items-center flex-col gap-5 w-full h-[150px] mt-[30px]">
        <div className="flex gap-5 lg:gap-10">
          {
            GroupLogo.map(LogoComponent => {
              return (
                <div className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] bg-white rounded-full grid place-items-center">
                  <LogoComponent className='w-[90%] h-[90%]' />
                </div>
              )
            })
          }
        </div>
        <div className="text-white text-center">
          © 2023. Copyright of  Phayuphat Trilao.
        </div>
      </div>
    </div>
  );
}

export default Footer