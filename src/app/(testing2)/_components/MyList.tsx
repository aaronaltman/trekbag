"use client";
import React, { useState } from "react";

export default function MyList({}) {
  return (
    <div>
      <h2 className="py-3 px-10">My List</h2>
      <ul className="px-10 pb-10">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
    </div>
  );
}
