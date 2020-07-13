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

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/sources?apiKey=93f6ad19cd2448c197ff4966baa7d3d6"
    )
      .then((response) => response.json())
      .then((data) => {
        const { sources } = data;
        setSources(sources);
        console.log(sources);
      });
  }, []);

  return (
    <div>
      This is coming from the article page
      {/* {sources} */}
    </div>
  );
};

export default Article;
