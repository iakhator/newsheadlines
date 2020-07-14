import React, { useEffect, useState } from "react";
export interface Sources {
  id: string;
  name: string;
}

export interface ArticleProps {
  sources: Sources[];
  selectedCategory: string;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Sources;
  title: string;
  url: string;
  urlToImage: string;
}

const Article = ({ sources, selectedCategory }: ArticleProps) => {
  const [selectedSources, setSelectedSources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=93f6ad19cd2448c197ff4966baa7d3d6`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.articles, "title");
        setSelectedSources(data.articles);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <div className="news__wrapper-article">
      <div className="cards-list">
        {selectedSources.map((source: Article, idx) => (
          <div className="card 1" key={idx}>
            <div className="card_image">
              {" "}
              <img src={source.urlToImage} alt="articleimg" />{" "}
            </div>
            <div className="card_desc">
              <div className="card_title title-white">
                <p>
                  <a href={source.url}>{source.title}</a>
                </p>
              </div>
              {/* <div className="card_description">
                {source.description.slice(0, 25)}...
              </div> */}
              <div className="card_footer">
                <p>{source.author}</p>
                <p>Time posted</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;

// interface PaginProps {
//   postsPerPage: number,
//   totalPosts: number,
//   paginate: (arg: number) => void
// }

// const Pagin: React.FC<PaginProps> = ({ postsPerPage, totalPosts, paginate }) => {

//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const pageNum = pageNumbers.map(number => {
//     return <div className='a page-item' key={number}><a className='a' onClick={() => paginate(number)} href="!#">{number}</a>
//     </div>
//   })

//   return (<div className='pagin'>{pageNum}</div>)
// }

// export default Pagin;
