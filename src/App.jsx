
import { useState, useEffect } from "react";
import "./App.css";

function Header({ quantity }) {
  return (
    <header className="header">
      <div>
        <h1>Amazon Product Store</h1>
        <p>Simple shopping, easy checkout</p>
      </div>
      <div className="cart">
        🛒 <span>{quantity}</span>
      </div>
    </header>
  );
}

function ProductCard({
  name,
  price,
  quantity,
  color,
  city,
  setColor,
  setCity,
  addToCart,
  removeOne,
  resetCart
}) {
  return (
    <section className="product-card">
      <div className={`product-image ${color.toLowerCase()}`}>
        <div className="mouse">🖱️</div>
        <h3>Wireless Mouse</h3>
        <p>Wireless • Lightweight • Easy to use</p>

        <div className="color-options">
          <span className="dot black" title="Black"></span>
          <span className="dot blue" title="Blue"></span>
          <span className="dot white" title="White"></span>
        </div>
      </div>

      <div className="product-details">
        <span className="tag">BEST SELLER</span>
        <h2>{name}</h2>
        <h3 className="price">₹{price}</h3>

        <label htmlFor="color">Choose Colour</label>
        <select
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>

        <p className="selected">
          Selected Colour: <strong>{color}</strong>
        </p>

        <label htmlFor="city">Delivery City</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter delivery city"
        />

        <p className="selected">
          📍 Delivery to: <strong>{city || "Enter a city"}</strong>
        </p>

        <div className="buttons">
          <button className="add" onClick={addToCart}>
            🛒 Add to Cart
          </button>

          <button
            className="remove"
            onClick={removeOne}
            disabled={quantity === 0}
          >
            − Remove One
          </button>

          <button className="reset" onClick={resetCart}>
            ↻ Reset Cart
          </button>
        </div>

        <div className="summary">
          <div className="summary-row">
            <h3>Quantity: {quantity}</h3>
            <h3>Total: ₹{quantity * price}</h3>
          </div>

          <p className={quantity === 0 ? "empty" : "success"}>
            {quantity === 0
              ? "Cart is empty"
              : "✓ Product added to cart!"}
          </p>
        </div>

        {quantity > 0 && (
          <div className="order-details">
            <h3>📦 Order Details</h3>

            <div className="detail-row">
              <span>Product</span>
              <strong>{name}</strong>
            </div>

            <div className="detail-row">
              <span>Selected Colour</span>
              <strong>{color}</strong>
            </div>

            <div className="detail-row">
              <span>Delivery City</span>
              <strong>{city || "Not entered"}</strong>
            </div>

            <div className="detail-row">
              <span>Quantity</span>
              <strong>{quantity}</strong>
            </div>

            <div className="detail-row total-row">
              <span>Total Amount</span>
              <strong>₹{quantity * price}</strong>
            </div>

            <p className="order-success">
              ✓ Your cart has been updated!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Amazon Product Store</p>
    </footer>
  );
}

export default function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  useEffect(() => {
    console.log("Amazon Product Store mounted");
  }, []);

  return (
    <div className="app">
      <Header quantity={quantity} />

      <main>
        <button
          className="toggle"
          onClick={() => setShowProduct((show) => !show)}
        >
          {showProduct ? "Hide Product" : "Show Product"}
        </button>

        {showProduct && (
          <ProductCard
            name="Wireless Mouse"
            price={499}
            quantity={quantity}
            color={selectedColor}
            city={deliveryCity}
            setColor={setSelectedColor}
            setCity={setDeliveryCity}
            addToCart={() => setQuantity((q) => q + 1)}
            removeOne={() =>
              setQuantity((q) => Math.max(0, q - 1))
            }
            resetCart={() => setQuantity(0)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
