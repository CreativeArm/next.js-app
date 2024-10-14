"use client";
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey-100">
      <p className="text-2x1 font-semibold mb-4">
        {" "}
        You Clicked <span className="text-blue-600">{count}</span> times
      </p>

      <div className="flex gap-5">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-no focus:ring-2 focus:ring-red-300"
        >
          Remove
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-no focus:ring-2 focus:ring-blue-300"
        >
          Click to Add
        </button>

        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-no focus:ring-2 focus:ring-blue-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
