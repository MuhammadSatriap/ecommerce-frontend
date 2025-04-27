import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="container">
      <h1 className="main-title">Daftar Produk</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image_url}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">Rp {parseInt(product.price).toLocaleString()}</p>
              <button className="buy-button">Beli Sekarang</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
