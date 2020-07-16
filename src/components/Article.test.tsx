import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Article from "./Article";

test("renders learn react link", () => {
  const ArticleProps = {
    selectedCategory: "general",
    targetSource: "cnn"
  };

  act(() => {
    render(<Article {...ArticleProps} />);
  });
  // const { getByText } = render(<Article {...ArticleProps} />);
  // const linkElement = getByText(/NewsOrg/i);
  // expect(linkElement).toBeInTheDocument();
});
