"use client";

import React, { useState } from "react";

export default function HeaderForm() {
  interface NumberSelectProps {
    selectedNumber: number;
    onChange: (value: number) => void;
  }

  const NumberSelect: React.FC<NumberSelectProps> = ({
    selectedNumber,
    onChange,
  }) => {
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

    return (
      <select
        value={selectedNumber}
        onChange={(e) => onChange(Number(e.target.value))}
        className="form-select mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {numbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    );
  };

  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  return (
    <div className="flex flex-row px-4 pb-4 pt-4">
      <NumberSelect
        selectedNumber={selectedNumber}
        onChange={setSelectedNumber}
      />
      <input
        type="text"
        placeholder="Add item"
        className="ml-2 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      />
    </div>
  );
}
