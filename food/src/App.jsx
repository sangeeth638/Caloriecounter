import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const restaurants = [
    {
      id: 1,
      name: 'Italian Bistro',
      image: 'https://via.placeholder.com/300?text=Restaurant+1',
      rating: 4.5,
      cuisine: 'Italian',
    },
    {
      id: 2,
      name: 'Sushi World',
      image: 'https://via.placeholder.com/300?text=Restaurant+2',
      rating: 4.8,
      cuisine: 'Japanese',
    },
  ];

  const menuItems = [
    { id: 1, name: 'Pizza Margherita', price: 12, image: 'https://via.placeholder.com/150?text=Pizza' },
    { id: 2, name: 'Sushi Rolls', price: 15, image: 'https://via.placeholder.com/150?text=Sushi' },
    { id: 3, name: 'Pasta Carbonara', price: 14, image: 'https://via.placeholder.com/150?text=Pasta' },
    { id: 4, name: 'Ramen', price: 13, image: 'https://via.placeholder.com/150?text=Ramen' },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">Food Delivery</div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/">Restaurants</a>
          <a href="/">Cart ({cart.length})</a>
        </nav>
      </header>

      <section className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <div className="restaurant-info">
              <h3>{restaurant.name}</h3>
              <p>{restaurant.cuisine}</p>
              <div className="rating">
                <span>{restaurant.rating}</span> ★
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="menu-list">
        {menuItems.map((item) => (
          <div className="menu-item-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      {cart.length > 0 && (
        <section className="cart-section">
          <div className="cart">
            <h2>Cart</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span>${item.price}</span>
                  </div>
                  <button className="remove-item-btn" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total: ${cart.reduce((total, item) => total + item.price, 0)}</h3>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <p>&copy; 2025 Food Delivery, All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
