import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false)

  // State for cart management
  const [cart, setCart] = useState([])

  // State for category filtering
  const [category, setCategory] = useState('all')

  // Function to add item to cart
  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart(prev => [...prev, product])
    }
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} addToCart={addToCart} />

      <Cart cart={cart} />
    </div>
  )
}

export default App