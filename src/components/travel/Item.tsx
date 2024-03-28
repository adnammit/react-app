import { Item } from '../../pages/Travel';

interface Props {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function ItemComponent({ item, onDeleteItem, onToggleItem }: Props) {
  return (
    <li>
      <input
        type="checkbox"
		checked={item.packed}
        // value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
