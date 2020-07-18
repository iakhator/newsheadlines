import React from "react";
// import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode, render } from "react-dom";
import NewsWrapper from "./NewsWrapper";

// beforeAll(() => jest.spyOn(window, "fetch"));

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders learn react link", async () => {
  const sources = [
    {
      category: "general",
      country: "us",
      description:
        "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
      id: "abc-news",
      language: "en",
      name: "ABC News",
      url: "https://abcnews.go.com"
    }
  ];

  jest.spyOn(global, "fetch").mockImplementation(
    (): Promise<any> =>
      Promise.resolve({
        json: () => Promise.resolve(sources)
      })
  );

  await act(async () => {
    await render(<NewsWrapper />, container);
  });

  expect(window.fetch).toHaveBeenCalledTimes(2);
  expect(window.fetch).toHaveBeenCalledWith(
    "https://newsapi.org/v2/sources?apiKey=93f6ad19cd2448c197ff4966baa7d3d6"
  );
});
