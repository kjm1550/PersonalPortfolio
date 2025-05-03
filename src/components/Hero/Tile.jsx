// ---
// export interface Props {
//   index: number;
// }

// const { index } = Astro.props;
// const tileClass = `tile-${index}`;
// ---
// <span class={`${tileClass} relative before:cursor-pointer before:bg-gray-950 before:content-[''] before:inset-0.5 before:absolute before:opacity-100`}>
// </span>


import React, {useState} from "react";

const Tile = ({}) =>{
  const [opacity, setOpacity] = useState(true);

  const handleClick = () => {
    console.log("hit it!")
    setOpacity((prevOpacity) => (prevOpacity ? false : true));
  };

  return (
    <span
      className={`before:transition-opacity before:opacity-${opacity} ${opacity ? 'before:opacity-100' : 'before:opacity-0'} relative before:cursor-pointer before:bg-gray-950 before:content-[''] before:inset-0.5 before:absolute `}
      onClick={handleClick}
    >
    </span>
  );
};

export default Tile;