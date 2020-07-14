import React, { useEffect } from "react";

export interface Sources {
  id: string;
  name: string;
  category: string;
}
export interface CategoryProps {
  categories: string[];
  selectedCategory: string;
  sources: Sources[];
  handleSelectCategory: (category: string) => void;
}

const Categories = ({
  categories,
  selectedCategory,
  sources,
  handleSelectCategory
}: CategoryProps) => {
  useEffect(() => {
    const category = sources.map((data: Sources) => {
      return { category: data.category, id: data.id, name: data.name };
    });
    const uniqCategory = category.filter((value, index) => {
      console.log(category.indexOf(value), index, "value");
    });
    // console.log(uniqCategory, "category");
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

      <select name="" id="">
        <option value=""></option>
      </select>
    </div>
  );
};

export default Categories;
