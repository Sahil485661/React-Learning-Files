import React, { useState, useEffect } from 'react';

function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // 1. API से डेटा फेच करने का लॉजिक यहाँ लिखें
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())            
            .then(json=>console.log(json))
  }, []);

  // 2. सर्च और कैटेगरी के आधार पर प्रोडक्ट्स को फिल्टर करने का लॉजिक
  const filteredProducts = products.filter((product) =>{ product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    // अपना फिल्टर लॉजिक यहाँ लिखें
    return true; 
  });

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Dashboard</h2>
      
      {/* सर्च इनपुट */}
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />

      {/* कैटेगरी ड्रॉपडाउन */}
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ padding: '5px' }}
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>

      {/* प्रोडक्ट्स की लिस्ट */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
            <h4>{product.title}</h4>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDashboard;