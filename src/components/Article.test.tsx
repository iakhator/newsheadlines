import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Article from "./Article";

test("renders learn react link", () => {
  const ArticleProps = {
    selectedCategory: "general",
    targetSource: "fox-news"
  };

  const fakeArticles = {
    source: {
      id: "fox-news",
      name: "Fox News"
    },
    author: "Brie Stimson",
    title:
      "Black Lives Matter sculpture erected in UK town removed after 1 day - Fox News",
    description:
      "A sculpture of a Black Lives Matter protester installed in an English city without authorization on the site where a monument to a 17th-century parliamentarian and slave trader was ripped down by protesters last month was taken down by the city after just one…",
    url:
      "https://www.foxnews.com/world/black-lives-matter-sculpture-erected-in-uk-town-without-authorization-taken-down-after-1-day",
    urlToImage:
      "https://static.foxnews.com/foxnews.com/content/uploads/2020/07/AP20198194598284.jpg",
    publishedAt: "2020-07-16T09:42:38Z",
    content:
      "A sculpture of a Black Lives Matter protester installed without authorization on the site where a monument to a 17th-century parliamentarian and slave trader was ripped down by protesters last month … [+2283 chars]"
  };

  jest.spyOn(global, "fetch").mockImplementation(
    (): Promise<any> =>
      Promise.resolve({
        json: () => Promise.resolve(fakeArticles)
      })
  );

  render(<Article {...ArticleProps} />);
  // const { getByText } = render(<Article {...ArticleProps} />);
  // const linkElement = getByText(/NewsOrg/i);
  // expect(linkElement).toBeInTheDocument();
});
