import "./ItemCard.css";

const ItemCard = ({ name, quantity, purpose }) => {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Purpose: {purpose}</p>
    </div>
  );
};

export default ItemCard;
