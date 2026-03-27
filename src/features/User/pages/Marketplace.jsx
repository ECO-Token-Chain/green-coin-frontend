import React from 'react';
import useAdmin from '../../Admin/hooks/useAdmin';
import '../../Admin/styles/marketplace.style.scss'; // Reuse Admin Marketplace styling

function Marketplace() {
  const { marketProducts, isLoading } = useAdmin();

  if (isLoading) {
    return <div className="loading-state">Loading Marketplace...</div>;
  }

  return (
    <div className='marketplace-page'>
      <div className="marketplace-header">
        <div className="title-section">
          <h2>Green Coin</h2>
          <h2 className="highlight">Marketplace.</h2>
        </div>
        <p className="subtitle">Redeem your tokens for available products.</p>
      </div>

      {/* ALL PRODUCTS GRID */}
      <div className="all-products-section" style={{ marginTop: '0' }}>
        <div className="section-header">
          <h3>Available Products</h3>
          <span className="badge">{marketProducts?.length || 0} Items</span>
        </div>

        <div className="products-grid">
          {marketProducts && marketProducts.length > 0 ? (
            marketProducts.map((product) => (
              <div className="product-card" key={product._id || product.id}>
                <div className="product-image-container">
                  <img
                    src={product.imageUrl || product.image || 'https://via.placeholder.com/300?text=No+Image'}
                    alt={product.name}
                    className="product-img"
                  />
                  <div className="price-tag">
                    {product.price} GC
                  </div>
                </div>
                <div className="product-details">
                  <h4 className="product-name">{product.name}</h4>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>No products available right now. Check back later!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;
