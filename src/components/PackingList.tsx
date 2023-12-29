import React from "react";

export default function PackingList({ items }: any) {
  return (
    <section className="x-4 py-4 mr-10">
      <h2 className="text-2xl">Packing List</h2>
      <p>Filter Your list</p>
      <ul className="flex flex-col justify-center gap-3">
        {
          <label>
            <input type="checkbox" />
            {items}
          </label>
        }
      </ul>
    </section>
  );
}
