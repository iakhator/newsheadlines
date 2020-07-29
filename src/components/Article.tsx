import React, { useEffect, useState } from "react";
export interface Sources {
  id: string;
  name: string;
}

export interface ArticleProps {
  selectedCategory: string;
  targetSource: string;
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

const Article = ({ selectedCategory, targetSource }: ArticleProps) => {
  const [selectedSources, setSelectedSources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unmounted = false;
    setLoading(true);
    let url = targetSource
      ? `https://newsapi.org/v2/top-headlines?sources=${targetSource}&apiKey=93f6ad19cd2448c197ff4966baa7d3d6`
      : `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=93f6ad19cd2448c197ff4966baa7d3d6`;

    const fetchArticles = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (!unmounted) {
            console.log(data.articles);
            setSelectedSources(data.articles);
            setLoading(false);
          }
        })
        .catch((error) => {
          if (!unmounted) {
            console.error(error);
            setLoading(false);
          }
        });
    };
    fetchArticles();
    return () => {
      unmounted = true;
    };
  }, [selectedCategory, targetSource]);

  return (
    <div className="news__wrapper-article">
      <div className="cards-list">
        {loading ? (
          <div className="loading">Loading....</div>
        ) : (
          selectedSources.map((source: Article, idx) => (
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
                <div className="card_footer">
                  <p>{source.author}</p>
                  <p>Time posted</p>
                </div>
              </div>
            </div>
          ))
        )}
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
