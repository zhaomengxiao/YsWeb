import React from 'react';

const ProductList: React.FC = () => {
  return (
    <section className="product-list">
      <h2>产品展示</h2>
      <div className="grid-container grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Product Items Here */}
        <div className="product-item">产品 1</div>
        <div className="product-item">产品 2</div>
        <div className="product-item">产品 3</div>
      </div>
    </section>
  );
};

export default ProductList;
