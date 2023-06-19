import React from "react";
import Card from "./Card";
import cake from "./cardItems";

export default function Cards() {
  return (
    <div  id="shop" >
      <h1 className="mt-4 text-4xl font-semibold leading-none text-center text-rose-800">Our Menu</h1>
      {/* <img className="w-64"  src="https://www.clipartmax.com/png/middle/231-2311562_writing-decorative-line-of-hearts.png"></img> */}
    <div className="containers mx-auto gap-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-10">
      {cake.map((cardItem) => {
        return (  
          <Card
            img={cardItem.img}
            name={cardItem.name}
            key={cardItem.index}
            size={cardItem.size}
            price={cardItem.price}
          />
        );
      })}
    </div>
    </div>
  );
}
