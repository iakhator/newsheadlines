import React, { useEffect } from "react";

export interface CategoryProps {
  categories: string[];
  selectedCategory: string;
  handleSelectCategory: (category: string) => void;
}

const Categories = ({
  categories,
  selectedCategory,
  handleSelectCategory
}: CategoryProps) => {
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=93f6ad19cd2448c197ff4966baa7d3d6`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="news__wrapper-category">
      <ul>
        {categories.map((category: string) => (
          <li
            className={`${selectedCategory === category ? "active" : " "}`}
            key={category}
            onClick={() => handleSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
