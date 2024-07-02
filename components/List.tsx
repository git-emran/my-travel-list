"use Cl"

import React from 'react'
import { initialItems, Item } from '@/lib/data';

export default function List() {
  return (
    <div className="w-full flex-row flex gap-40 items-center  justify-center h-full">
      {initialItems.map((item: Item) => (
        <ul
          key={item.id}
          className=" flex-row flex mt-14 items-center text-center justify-center"
        >
          <li className='flex font-bold text-xl px-4'>
            {" "}
            {item.quantity} {item.description} {item.packed}
          </li>
          <button>❌</button>
         
        </ul>
      ))}
    </div>
  );
}
