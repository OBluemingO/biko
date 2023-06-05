import { AiFillStar } from "react-icons/ai";

interface Props {
  rate: number;
  name: string;
  body: string;
  image: string;
}

const Card: React.FC<Props> = ({ rate, body, name, image }: Props) => {
  return (
    <div className="p-[30px] relative  h-full rounded-[20px] bg-[#141415] text-white">
      <div className="header mb-5 flex gap-5 items-center">
        <div className="avatar rounded-full w-[72px] h-[72px] bg-white "></div>
        <div className="flex flex-col gap-2">
          <div className="name text-xl font-semibold">{name}</div>
          <div className="rate flex items-center">{Array(rate).fill(0).map(( el,idx ) => <AiFillStar color='yellow' key={`star-${idx}`}/>)}<p className="px-2">{rate}</p></div>
        </div>
      </div>
      <div className="body text-body pb-[50px] lg:pb-0">{body}</div>
      <div className="footer absolute bottom-[30px] left-[30px] flex gap-2">
        <div className="avatar rounded-full w-[35px] h-[35px] bg-white "></div>
        <div className="avatar rounded-full w-[35px] h-[35px] bg-white "></div>
        <div className="avatar rounded-full w-[35px] h-[35px] bg-white "></div>
      </div>
    </div>
  );
};

export default Card;
