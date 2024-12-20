import { useState } from "react";
import "./ItemForm.css";

const ItemForm = ({ addInventory }) => {
  const INITIAL_VALUE = {
    name: "",
    quantity: 0,
    purpose: "",
  };
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckBoxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) {
      alert("Please, check the Terms");
      return;
    }
    const { name, quantity, purpose } = formData;
    if (!name || !quantity || !purpose) {
      alert("All fields are required");
      return;
    }
    addInventory(formData);
    setIsChecked(false);
    setFormData(INITIAL_VALUE);
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <h3>Add an Item to the Inventory</h3>
      <input
        className="item-form-input"
        id="name"
        name="name"
        type="text"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        className="item-form-input"
        type="number"
        name="quantity"
        id="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        min={1}
        max={10}
        required
      />
      <textarea
        className="item-form-input"
        type="text"
        name="purpose"
        id="purpose"
        placeholder="Purpose"
        value={formData.purpose}
        onChange={handleChange}
        rows={5}
        maxLength={250}
        required
      />
      <label htmlFor="isCheck" className="item-form-input">
        <input
          type="checkbox"
          name="isCheck"
          id="isCheck"
          onChange={handleCheckBoxChange}
          checked={isChecked}
        />
        Agree to Terms
      </label>
      <div className="item-form-aux">
        <button className="item-form-btn">Add</button>
      </div>
    </form>
  );
};

export default ItemForm;
