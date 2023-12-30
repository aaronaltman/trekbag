"use client";
import { ChangeEvent, FormEvent } from "react";

type FormProps = {
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
};

export default function Form({
  handleFormSubmit,
  handleInputChange,
  inputValue,
}: FormProps) {
  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col py-6 px-8 gap-3 bg-slate-50"
    >
      <input
        onChange={handleInputChange}
        type="text"
        className="border-2 border-gray-400"
        value={inputValue}
      />
      <button className="border-2 border-gray-400">Submit</button>
    </form>
  );
}
