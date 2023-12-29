import React from "react";
import Header from "./Header";

export default function ContentCard() {
  return (
    <section className="bg-zinc-400 w-[40rem] h-[20rem] -mt-20">
      <Header />
      <div className="flex justify-between">
        <section>Main content with list goes here</section>
        <section>Sidebar Goes here</section>
      </div>
    </section>
  );
}
