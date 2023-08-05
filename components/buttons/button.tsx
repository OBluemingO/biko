interface props {
  children: React.ReactNode;
  cb?: <T>(arg: T) => any;
}

const ButtonGray: React.FC<props> = ({ children, cb }: props): JSX.Element => {
  return (
    <div
      className="relative w-auto cursor-pointer select-none rounded-[60px] 
      border-[1px] border-[#414141] bg-[#212121] px-[20px] py-[10px] 
      text-center text-body 
      md:h-[50px] lg:h-[70px] lg:px-[40px] lg:py-[20px]"
      onClick={cb}
    >
      {children}
    </div>
  );
};

export default ButtonGray 