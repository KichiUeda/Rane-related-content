import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { RowWrapper, ColWrapper } from "../GlobalStyles";
import Card from "./Card";

const Carousel = ({ cardData }) => {
  return (
    <>
      <RowWrapper data-testid="carousel-component">
        <div aria-label="Scroll left">
          <FiChevronLeft />
        </div>
        {cardData &&
          cardData.map((data, i) => <Card key={data.product_id} {...data} />)}
        <div aria-label="Scroll right">
          <FiChevronRight />
        </div>
      </RowWrapper>
    </>
  );
};

export default Carousel;
