import React, {useState} from "react";
import shopItems from "../../json/shop.json";
import "./shop.styles.css";

function Shop() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDescriptionClose = () => {
    setSelectedItem(null);
    setQuantity(1);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const price = selectedItem ? selectedItem.price * quantity : 0;

  return (
    <div className="shop-container">
      {selectedItem && (
        <div className="blurContainer" onClick={handleDescriptionClose}></div>
      )}
      <h1>Shop Items</h1>
      <div className="shop-items">
        {shopItems.items.map((item) => (
          <div
            className="shop-item"
            key={item.name}
            onClick={() => handleItemClick(item)}
          >
            <img src={item.imgUrl} alt={item.name} />
            <h2>{item.name}</h2>
            <p>€{item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="description">
          <div className="description-container">
            <img src={selectedItem.imgUrl} alt={selectedItem.name} />
            <h2>{selectedItem.name}</h2>
            <h3>Select your size</h3>
            <form>
              <input type="radio" name="size" id="S" />
              <label htmlFor="S">S</label>
              <br></br>
              <input type="radio" name="size" id="M" />
              <label htmlFor="M">M</label>
              <br></br>
              <input type="radio" name="size" id="L" />
              <label htmlFor="L">L</label>
              <br></br>
              <input type="radio" name="size" id="XL" />
              <label htmlFor="XL">XL</label>
            </form>
            <div className="quantity">
              <label htmlFor="quantity">Quantity</label>
              <br></br>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="99"
                value={quantity}
                onChange={handleQuantityChange}
              ></input>
            </div>
            <p>€{price.toFixed(2)}</p>
            <button>Go to pay</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
