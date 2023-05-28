interface props {
  children: React.ReactNode
}

const ButtonGray: React.FC<props> = ({children}:props):JSX.Element => {
  return (
    <div className="bg-[#212121] text-center rounded-[60px] border-[1px] border-[#414141] text-body h-[70px] w-auto px-[40px] py-[20px]">
      {children}
    </div>
  );
}

export default ButtonGray 