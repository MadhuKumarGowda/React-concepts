import { useState } from "react";

interface Props {
  productItems: string[];
  onClear: () => void;
}

const Product = ({ productItems, onClear }: Props) => {
  const product_list = productItems.map((item, index) => (
    <li className="list-group-item" key={index}>
      {item}
    </li>
  ));
  return (
    <>
      <h2>Products</h2>
      <ul className="list-group">{product_list}</ul>
      <button className="btn btn-primary mt-2" onClick={onClear}>
        Clear
      </button>
    </>
  );
};

export default Product;
