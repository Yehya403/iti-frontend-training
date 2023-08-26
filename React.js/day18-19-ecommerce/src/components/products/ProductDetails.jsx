import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../services/product.service';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async (id) => {
    const product = await getProductById(id);
    setProduct(product);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <div className="row">
      {product && (
        <>
          <div className="col-md-6">
            <img src={product.thumbnail} alt="Card image cap" className="img-fluid" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="fw-bold">
              <h1>{product.title}</h1>
              <p>Description: {product.description}</p>
              <p className="fw-bold">Price: {product.price} $</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-success">Add to cart</button>
                <Link to="/Products" className="btn btn-primary">
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
