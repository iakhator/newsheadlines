import React, { useEffect, useState } from "react";

export interface Sources {
  id: string;
  name: any;
}
export interface CategoryProps {
  categories: string[];
  selectedCategory: string;
  sources: Sources[];
  handleSelectCategory: (category: string) => void;
  handleChange: (e: any) => void;
}

const Categories = ({
  categories,
  selectedCategory,
  sources,
  handleSelectCategory,
  handleChange
}: CategoryProps) => {
  const [catObj, setCatObj] = useState<Sources[]>([]);

  useEffect(() => {
    const category = sources.map((data: Sources) => {
      return { id: data.id, name: data.name };
    });
    setCatObj(category);
  }, [sources]);

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

      <select onChange={handleChange}>
        <option value="general">Select source</option>
        {catObj.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
