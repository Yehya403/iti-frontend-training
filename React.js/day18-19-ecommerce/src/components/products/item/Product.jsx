import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img
          src={product.thumbnail}
          alt=""
          className="card-img-top"
          style={{ height: '60%', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h1 className="card-title font-semibold">{product.title}</h1>
          <p className="card-text pt-3 text-xs">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-xs">{product.price + '$'}</span>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`details/${product.id}`)}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
