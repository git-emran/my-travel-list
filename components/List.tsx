"use Cl"

import React, {useState} from 'react'
import { initialItems, Item } from '@/lib/data';

export default function List() {
    const [items, setItems] = useState();
 
   



  return (
    <div className="w-full flex-row flex gap-40 items-center mt-20 justify-center h-full">
      {initialItems.map((item: Item) => (
        <div key={item.id} className="flex items-center space-x-4">
          <span className={`text-lg ${item.packed ? 'line-through': ""}`}>
            {item.quantity} {item.description}
          </span>
          <button>❌</button>
        </div>
      ))}
    </div>
  );
}
