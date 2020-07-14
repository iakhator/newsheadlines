import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import Article from "./Article";
export interface SourcesType {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  country: string;
}
export interface Sources {
  sources: SourcesType;
}

const NewsWrapper = () => {
  const [sources, setSources] = useState([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("general");

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=93f6ad19cd2448c197ff4966baa7d3d6"
    )
      .then((response) => response.json())
      .then((data) => {
        const { sources } = data;
        setSources(sources);
        // console.log(sources);
      });
  }, []);

  useEffect(() => {
    const category = sources.map((data: SourcesType) => {
      return data.category;
    });
    const uniqCategory = category.filter(
      (value, index) => category.indexOf(value) === index
    );
    setCategories(uniqCategory);
  }, [sources]);

  // let handleSelectCategory: handleCategoryChange;
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelectCategory={handleSelectCategory}
      />
      <Article sources={sources} selectedCategory={selectedCategory} />
    </div>
  );
};

export default NewsWrapper;
