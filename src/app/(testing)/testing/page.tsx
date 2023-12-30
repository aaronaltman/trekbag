"use client";

import Header from "@/components/Header";
import React, { useState } from "react";

export default function Page() {
  const [items, setItems] = useState([]); // This will hold the list of items
  const [newItem, setNewItem] = useState(""); // This will hold the new item input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form from refreshing the page
    if (newItem.trim() !== "") {
      setItems([...items, newItem]); // Adds the new item to the list of items
      setNewItem(""); // Resets the input field
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="relative text-center text-6xl my-8">TREKBAG APP</h1>
        <div className="container max-w-4xl relative">
          <Header />
        </div>
      </div>
      <section className="container max-w-4xl relative mx-auto bg-slate-50 p-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:max-w-1/2 w-full">
            <h2 className="text-3xl font-bold text-center mb-4">
              Packing List
            </h2>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            id="sidebar"
            className="flex flex-col lg:max-w-1/2 w-full bg-slate-900 p-10 text-white"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
              <label>Add A New Item</label>
              <input
                type="text"
                placeholder="Enter Item"
                className="rounded text-black"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <button
                type="submit"
                className="bg-red-700 text-white rounded-xl"
              >
                Add a new item
              </button>
            </form>
            {/* ...other buttons... */}
          </div>
        </div>
      </section>
    </>
  );
}
