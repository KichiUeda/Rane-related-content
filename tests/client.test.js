import React from "react";
import { render } from "@testing-library/react";

import Card from "../client/components/Card";

describe("front end tests", () => {
  describe("Card component", () => {
    /*
        View <title>
            Cover
            Title - Star
            Platforms - Price
    */
    test("It renders to the screen", () => {
      const { getByLabelText, getByTestId } = render(<Card />);

      expect(getByLabelText(/View/i)).toBeTruthy();
      expect(getByTestId("cover-image")).toBeTruthy();
      expect(getByTestId("title-span")).toBeTruthy();
      expect(getByTestId("star-icon")).toBeTruthy();
      expect(getByTestId("platforms")).toBeTruthy();
      expect(getByTestId("price-div")).toBeTruthy();
    });
  });
});
