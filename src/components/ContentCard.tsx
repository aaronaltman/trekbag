import React from "react";
import Header from "./Header";
import PackingList from "./PackingList";

export default function ContentCard() {
  return (
    <section className="flex flex-col bg-slate-50 w-[50rem] ">
      <Header />
      <div className="flex">
        <PackingList />
        <section>Sidebar Goes here</section>
      </div>
    </section>
  );
}
