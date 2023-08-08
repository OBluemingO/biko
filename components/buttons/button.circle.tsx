import React from 'react'

interface PropFix extends Record<"icon" | "tooltip" | "mock", string>{}
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
type Props = Optional<PropFix ,'tooltip'>

// ! NOTE
// init type { icon : any , tooltip: any }
// passing type into optional ===> type Props = Optional<PropFix ,'tooltip'>
// pick { tooltip? : any }
// omit { icon: any, mock: any }
// & is combining both type { tooltip? : any,  icon: any, mock: any  }


// interface Props extends  PartialBy<'tooltip',> {}
const ButtonCircle = ({ icon, tooltip}: Props) => {
    return <div></div>;
};

export default ButtonCircle 