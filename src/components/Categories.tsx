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
  useEffect(() => {});

  return (
    <div>
      <ul>
        {categories.map((category: string) => (
          <li key={category} onClick={() => handleSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
