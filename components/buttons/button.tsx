interface props {
  children: React.ReactNode
}

const ButtonGray: React.FC<props> = ({children}:props):JSX.Element => {
  return (
    <div className="bg-[#212121] hover:bg-[#474747] select-none cursor-pointer text-center md:h-[50px] rounded-[60px] border-[1px] border-[#414141] text-body lg:h-[70px] w-auto px-[20px] py-[10px] lg:px-[40px] lg:py-[20px]">
      {children}
    </div>
  );
}

export default ButtonGray 