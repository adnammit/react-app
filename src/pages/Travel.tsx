import { useState } from 'react';
import Form from '../components/travel/Form';
import '../styles/Travel.css';
import PackingList from '../components/travel/PackingList';
import Navigation from '../components/Navigation';

export interface Item {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
}

export default function Travel() {
  const [items, setItems] = useState<Item[]>([]);

  function handleAddItem(item: Item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?',
    );

    if (confirmed) setItems([]);
  }

  return (
    <>
      <Navigation />
      <div className="app">
        <h1>🏝️ Far Away 🧳</h1>
        <Form onAddItem={handleAddItem} />
        <PackingList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearList={handleClearList}
        />
        {/* <Stats items={items} /> */}
      </div>
    </>
  );
}
