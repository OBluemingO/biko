import { useMenuBarStore, useModalStore } from "@/stores/store";
import { usePathname, useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  idx: number;
  name: string;
  setCurrentHover: Dispatch<SetStateAction<number>>;
}

const EachSelectMenu = ({ name, setCurrentHover, idx }: IProps) => {

  const action_modal_auth = useModalStore((state) => state.action_modal_auth);
  const action_show_menu = useMenuBarStore((state) => state.action_show_menu);
  const router = useRouter()

  const handleClick = () => {
    if(name == 'Login'){
      action_modal_auth(true)
    }
    else{
      const path_name = name == 'Home' ? `/` : `/${name}`
      action_show_menu(false)
      router.push(path_name.toLocaleLowerCase());
    }
  }

  return (
    <div
      className="w-1/4 cursor-pointer capitalize border-l-[1px]"
      onMouseOver={() => setCurrentHover(idx)}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default EachSelectMenu;
