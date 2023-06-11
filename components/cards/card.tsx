import { AiFillStar } from "react-icons/ai";
import { FcGoogle, FcVip, FcReddit } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";

interface Props {
  rate: number;
  name: string;
  body: string;
  image: string;
  logo_brands?: { logo_brand: string }[];
}

const Card: React.FC<Props> = ({ rate, body, name, image, logo_brands }: Props) => {
  return (
    <div className="p-[30px] relative  h-full rounded-[20px] bg-[#141415] text-white">
      <div className="header mb-5 flex gap-5 items-center">
        <div className="avatar relative rounded-full w-[72px] h-[72px] overflow-hidden bg-white">
          <Image className="absolute" src={image} fill alt='avatar' />
        </div>
        <div className="flex flex-col gap-2">
          <div className="name text-xl font-semibold">{name}</div>
          <div className="rate flex items-center">{Array(rate).fill(0).map(( el,idx ) => <AiFillStar color='yellow' key={`star-${idx}`}/>)}<p className="px-2">{rate}</p></div>
        </div>
      </div>
      <div className="body text-body pb-[50px] lg:pb-0">{body}</div>
      <div className="footer absolute bottom-[30px] left-[30px] flex gap-2">
        <div className="avatar rounded-full w-[35px] h-[35px] bg-white "><FcGoogle className="w-full h-full" /></div>
        <div className="avatar rounded-full w-[35px] h-[35px] bg-white grid place-items-center"><BsFacebook className="w-[90%] h-[90%]" fill="blue"  /></div>
        <div className="avatar rounded-full w-[35px] h-[35px] bg-white "><FcReddit className="w-full h-full" /></div>
      </div>
    </div>
  );
};

export default Card;
