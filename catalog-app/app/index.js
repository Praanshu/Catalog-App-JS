import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function ProductCatalog() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(selectedCategory ? data.filter(p => p.categoryId === selectedCategory.value) : data);
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  return (
    <div>
      <Select options={categories} onChange={handleCategoryChange} />
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
