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
  const [targetSource, setTargetSource] = useState("");

  useEffect(() => {
    (() => {
      fetch(
        "https://newsapi.org/v2/sources?apiKey=93f6ad19cd2448c197ff4966baa7d3d6"
      )
        .then((response) => response.json())
        .then((data) => {
          setSources(data.sources);
        })
        .catch((error) => console.error(error));
    })();
  }, []);

  useEffect(() => {
    const getCategories = () => {
      const category: string[] = sources.map((data: SourcesType) => {
        return data.category;
      });

      const uniqCategory = category.filter(
        (value, index) => category.indexOf(value) === index
      );
      setCategories(uniqCategory);
    };

    getCategories();
  }, [sources]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setTargetSource("");
  };

  const handleChange = (e: any) => {
    setTargetSource(e.target.value);
  };

  return (
    <div className="news__wrapper">
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelectCategory={handleSelectCategory}
        handleChange={handleChange}
        sources={sources}
      />
      <Article
        selectedCategory={selectedCategory}
        targetSource={targetSource}
      />
    </div>
  );
};

export default NewsWrapper;
