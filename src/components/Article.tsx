import React, { useEffect, useState, FunctionComponent } from "react";

interface Sources {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  country: string;
}

const Article: FunctionComponent = () => {
  const [sources, setSources] = useState<Sources[]>([]);
  const [category, setCategory] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=93f6ad19cd2448c197ff4966baa7d3d6"
    )
      .then((response) => response.json())
      .then((data) => {
        const { sources } = data;
        setSources(sources);
      });
  }, []);

  useEffect(() => {
    const category = sources.map((data) => data.category);
    const uniqCategory = category.filter(
      (value, index) => category.indexOf(value) === index
    );
    setCategory(uniqCategory);
    console.log(uniqCategory, "cats");
  }, [sources]);

  return (
    <div>
      This is coming from the article page
      {/* {sources} */}
    </div>
  );
};

export default Article;
