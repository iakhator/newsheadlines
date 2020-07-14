import React, { useEffect, useState } from "react";
export interface Sources {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  country: string;
}

export interface ArticleProps {
  sources: Sources[];
  selectedCategory: string;
}

const Article = ({ sources, selectedCategory }: ArticleProps) => {
  const [selectedSources, setSelectedSources] = useState(sources);

  useEffect(() => {
    const selected = sources.filter(
      (data) => data.category === selectedCategory
    );
    setSelectedSources(selected);
  }, [selectedCategory, sources]);

  return (
    <div>
      {selectedSources.map((source) => (
        <div key={source.id}>
          <h1>{source.id}</h1>
        </div>
      ))}
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
