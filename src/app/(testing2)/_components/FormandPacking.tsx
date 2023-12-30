import React, { useState } from "react";
import Form from "./Form";
import MyList from "./MyList";

export default function FormandPacking() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formText = e.target.value;
    setInputValue(formText);
  };
  return (
    <div>
      <Form
        handleFormSubmit={handleFormSubmit}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
      <MyList inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}
