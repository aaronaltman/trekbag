import React from "react";

export default function Form() {
  return (
    <form className="flex flex-col py-6 px-8 gap-3 bg-slate-50">
      <input type="text" className="border-2 border-gray-400" />
      <button className="border-2 border-gray-400">Submit</button>
    </form>
  );
}
