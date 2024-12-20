import "./ItemAction.css";

const ItemAction = ({ handleDelete }) => {
  return (
    <div className="item-action">
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ItemAction;
