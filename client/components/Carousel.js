import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { RowWrapper, ColWrapper } from "../GlobalStyles";
import Card from "./Card";

const Carousel = ({ cardData }) => {
  return (
    <CarouselWrapper>
      <SectionHead>Related content</SectionHead>
      <RowWrapper margin="0 70px" data-testid="carousel-component">
        {/* <LeftArrow aria-label="Scroll left">
          <FiChevronLeft />
        </LeftArrow> */}
        {(cardData.length &&
          cardData.map((data, i) => (
            <Card key={data.title + "card"} {...data} />
          ))) || <ReactLoading color="black" type="cylon" />}
        {/* <div aria-label="Scroll right">
          <FiChevronRight />
        </div> */}
      </RowWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;

const LeftArrow = styled.div`
  margin-right: 20px;
`;

const CarouselWrapper = styled.div`
  background-color: #282c34;
  padding: 35px 0;
`;

const SectionHead = styled.h2`
  color: #a1a7b2;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0 15px 70px;
`;
