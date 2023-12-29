import React from "react";

const listofitems = ["shirts", "shorts", "socks", "shoes", "underwear"];

export default function PackingList() {
  return (
    <section className="x-4 py-4 mr-10">
      <h2 className="text-2xl">Packing List</h2>
      <p>Filter Your list</p>
      <ul className="flex flex-col justify-center gap-3">
        {listofitems.map((item, index) => {
          return (
            <label className="flex gap-2 border border-black/10" key={index}>
              <input type="checkbox" />
              {item}
            </label>
          );
        })}
      </ul>
    </section>
  );
}
