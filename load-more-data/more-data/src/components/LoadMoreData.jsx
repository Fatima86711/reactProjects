import React, { useEffect, useState } from "react";
import "./LoadMoreData.css";
const LoadMoreData = () => {
  const [loading, setloading] = useState(false);
  const [products, setproduct] = useState([]);
  const [count, setcount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  async function fetchProducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setproduct((prevData) => [...prevData, ...result.products]);
        setloading(false);
      }
    } catch (e) {
      setloading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length == 100) setDisableButton(true);
  }, [products]);
  if (loading) {
    return <div>Loading data ! Please wait.</div>;
  }
  return (
    <div className="load-more-data-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>

      <div className="button-container">
        <button disabled={disableButton} onClick={() => setcount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
