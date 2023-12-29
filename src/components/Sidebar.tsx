import React, { useState } from "react";
import { Button } from "./ui/button";

export default function Sidebar({ handleSubmit, theItems, items }: any) {
  return (
    <section className="flex flex-col bg-slate-100">
      <h2>Add Item to Packing List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add item to pack"
          className="border border-black/10 p-1.5 px-3"
          onChange={(e) => (items = e.target.value)}
          value={items}
        />
        <Button asChild>
          <button type="submit">Add Item to list</button>
        </Button>
      </form>
      {
        <ul className="flex flex-col justify-center gap-3">
          {theItems.map((item: any) => (
            <li key={item}>
              <label>
                <input type="checkbox" />
                {item}
              </label>
            </li>
          ))}
        </ul>
      }
    </section>
  );
}
