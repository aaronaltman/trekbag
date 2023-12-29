"use client";

import React, { useState } from "react";
import Header from "./Header";
import PackingList from "./PackingList";
import Sidebar from "./Sidebar";

let items = "";

export default function ContentCard() {
  const [theItems, setTheItems] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submit action
    setTheItems((prevItems) => [...prevItems, items]); // Add new item to the list
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    items = e.target.value;
  };

  // return
  return (
    <section className="flex flex-col bg-slate-50 w-[50rem]">
      <Header />
      <div className="flex justify-between px-10 py-10">
        <div className="flex-1">
          <PackingList theItems={theItems} />
        </div>
        <div className="w-64">
          <Sidebar
            theItems={theItems}
            handleSubmit={handleSubmit}
            items={items}
          />
        </div>
      </div>
    </section>
  );
}
