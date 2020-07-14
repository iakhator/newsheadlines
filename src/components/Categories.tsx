import React from "react";

export interface CategoryProps {
  categories: string[];
}

const Categories = ({ categories }: CategoryProps) => {
  console.log(categories);
  return (
    <div>
      <ul>
        {categories.map((category: string) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
