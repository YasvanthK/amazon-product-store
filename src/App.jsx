
import { useState, useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1>Amazon Product Store</h1>
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
      <h2>{name}</h2>
      <h3>Price: ₹{price}</h3>

      <label>Colour: </label>
      <select
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="Black">Black</option>
        <option value="Blue">Blue</option>
        <option value="White">White</option>
      </select>

      <p>Selected Colour: {color}</p>

      <label>Delivery City: </label>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <p>Delivery to: {city}</p>

      <div className="buttons">
        <button onClick={addToCart}>Add to Cart</button>
        <button onClick={removeOne} disabled={quantity === 0}>
          Remove One
        </button>
        <button onClick={resetCart}>Reset Cart</button>
      </div>

      <h3>Quantity: {quantity}</h3>
      <h3>Total: ₹{quantity * price}</h3>

      <p className={quantity === 0 ? "empty" : "success"}>
        {quantity === 0
          ? "Cart is empty"
          : "Product added to cart"}
      </p>
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
      <Header />

      <main>
        <button
          className="toggle-button"
          onClick={() => setShowProduct(!showProduct)}
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
            addToCart={() => setQuantity(q => q + 1)}
            removeOne={() => setQuantity(q => Math.max(0, q - 1))}
            resetCart={() => setQuantity(0)}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}