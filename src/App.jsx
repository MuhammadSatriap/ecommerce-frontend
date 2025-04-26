import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products') // Memanggil API produk dari backend
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h1>Daftar Produk</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <h3>{p.name}</h3>
            <p>Harga: Rp {parseInt(p.price).toLocaleString()}</p>
            <img src={p.image_url} alt={p.name} width="150" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
