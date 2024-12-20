import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";
import "./SpacecraftBuilder.css";
import { useState } from "react";

const SpacecraftBuilder = () => {
  const [inventory, setInvetory] = useState([]);

  const addToInventory = (formData) => {
    const newItem = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...formData,
    };
    setInvetory([...inventory, newItem]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item"))
      setInvetory((prevInvetory) =>
        prevInvetory.filter((item) => item.id !== id)
      );
  };

  return (
    <div className="spacecraft-builder">
      <h1 className="spacecraft-builder-title">Spacecraft Builder</h1>
      <ItemForm addInventory={addToInventory} />
      <h3 className="spacecraft-builder-inventory-title">Inventory</h3>
      {inventory.map((item) => {
        return (
          <InventoryDisplay
            key={item.id}
            value={item}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default SpacecraftBuilder;
