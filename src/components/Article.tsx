import React, { useEffect, useState } from "react";
export interface Sources {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  country: string;
}
const Article = (props: any) => {
  // console.log(props);
  // const [selectedSources, setSelectedSources] = useState<Sources[]>([]);
  // const [selectedCategory, setSelectedCategory] = useState("general");

  // useEffect(() => {
  //   fetch(
  //     "https://newsapi.org/v2/sources?apiKey=93f6ad19cd2448c197ff4966baa7d3d6"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const { sources } = data;
  //       setSources(sources);
  //     });
  // }, []);

  // useEffect(() => {
  //   const selected = sources.filter(
  //     (data) => data.category === selectedCategory
  //   );
  //   setSelectedSources(selected);
  //   // console.log(selectedSources);
  // }, [selectedCategory, sources]);

  // useEffect(() => {
  //   const category = sources.map((data) => data.category);
  //   const uniqCategory = category.filter(
  //     (value, index) => category.indexOf(value) === index
  //   );
  //   setCategory(uniqCategory);
  // }, []);

  return (
    <div>
      This is coming from the article page
      {/* {sources} */}
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
