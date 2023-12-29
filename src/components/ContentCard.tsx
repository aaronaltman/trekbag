"use client";

import React, { useState } from "react";
import Header from "./Header";
import PackingList from "./PackingList";
import Sidebar from "./Sidebar";

export default function ContentCard() {
  const [theItems, setTheItems] = useState<string[]>([]);
  const [currentItem, setCurrentItem] = useState(""); // New state for input

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentItem.trim() !== "") {
      setTheItems((prevItems) => [...prevItems, currentItem]);
      setCurrentItem(""); // Clear the input field after submission
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentItem(e.target.value);
  };

  return (
    <section className="flex flex-col bg-slate-50 w-full md:w-2/3 mx-auto shadow-lg rounded-lg overflow-hidden">
      <Header />
      <div className="flex flex-col md:flex-row justify-between p-10">
        <div className="flex-1 md:mr-4">
          <PackingList theItems={theItems} />
        </div>
        <div className="flex-1 md:ml-4 mt-4 md:mt-0">
          <Sidebar
            theItems={theItems}
            handleSubmit={handleSubmit}
            currentItem={currentItem} // pass the currentItem as prop
            handleInputChange={handleInputChange}
          />
        </div>
      </div>
    </section>
  );
}
