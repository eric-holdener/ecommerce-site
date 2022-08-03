import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react';

export default function CategoryCard(props) {
  const [category, setCategory] = useState(props.category);
  const [className, setClassName] = useState("");

  useEffect(() => {
    if (category === "men's clothing") {
      setClassName("mensclothing")
    } else if (category === "women's clothing") {
      setClassName("womensclothing")
    } else {
      setClassName(category)
    }
  }, [])
  
  return(
    <Link to={`/products/${category}`} className="categoryLink">
      <div className={`categoryCard-${className}`}>
        <h2 className="categoryName">{category}</h2>
      </div>
    </Link>
  );
}