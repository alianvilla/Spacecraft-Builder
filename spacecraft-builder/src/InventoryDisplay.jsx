import "./InventoryDisplay.css";
import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

const InventoryDisplay = ({ value, handleDelete }) => {
  const { id, name, quantity, purpose } = value;
  const handleDeleteItem = (e) => {
    e.preventDefault();
    handleDelete(id);
  };
  return (
    <div className="inventory-display">
      <ItemCard name={name} quantity={quantity} purpose={purpose} />
      <ItemAction handleDelete={handleDeleteItem} />
    </div>
  );
};

export default InventoryDisplay;
