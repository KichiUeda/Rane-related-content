import React from "react";
import { render } from "@testing-library/react";

import Card from "../client/components/Card";

describe("front end tests", () => {
  describe("Card component", () => {
    test("It renders to the screen", () => {
      const { getByLabelText } = render(<Card />);

      expect(getByLabelText(/View/i)).toExist();
    });
  });
});
