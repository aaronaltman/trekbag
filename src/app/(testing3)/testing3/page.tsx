"use client";
import React, { useState } from "react";

export default function Page() {
  const [items, setItems] = useState([]);

  const onInputChange = (e) => {
    const itemInput = e.target.value;
    setItems(itemInput);
    console.log(items);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    setItems([...items, items]);
    console.log(items);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <section className="flex justify-center">
        <h1 className="text-8xl mt-10 -mb-6 z-0 font-bold text-orange-700/10 tracking-[1rem] lg:tracking-[5rem]">
          TREKBAG
        </h1>
      </section>
      <section className="flex justify-between bg-zinc-100">
        <div className="bg-amber-500/50 w-full">
          <h2 className="text-4xl px-4 py-4 font-bold capitalize">
            Packing list
          </h2>
          <ul className="px-4 py-4">{items}</ul>
        </div>
        <div className="w-full ">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-4xl px-4 py-4 font-bold capitalize">
              Add Items
            </h2>
            <form onSubmit={onInputSubmit} className="flex flex-col px-4 py-4">
              <label htmlFor="name">Item</label>
              <input
                onChange={onInputChange}
                value={items}
                type="text"
                id="name"
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
