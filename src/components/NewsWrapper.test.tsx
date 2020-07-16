import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewsWrapper from "./NewsWrapper";

beforeAll(() => jest.spyOn(window, "fetch"));

// afterEach(() => {
//   global.fetch.mockClear();
// })

test("renders learn react link", async () => {
  // const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  // const mockFetchPromise = Promise.resolve({
  //   json: () => mockJsonPromise
  // });
  // jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  render(<NewsWrapper />);

  expect(window.fetch).toHaveBeenCalledTimes(2);
  expect(window.fetch).toHaveBeenCalledWith(
    "https://newsapi.org/v2/sources?apiKey=93f6ad19cd2448c197ff4966baa7d3d6"
  );

  // await act(() => mockFetchPromise);
  // expect(linkElement).toBeInTheDocument();
});
