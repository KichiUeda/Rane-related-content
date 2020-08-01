import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
//import "../reset.css";
import { RowWrapper, ColWrapper } from "../GlobalStyles";
import Card from "./Card";

const Carousel = ({ cardData }) => {
  return (
    <CarouselWrapper>
      <ColWrapper margin="0">
        <ColWrapper
          justify="flex-start"
          alignItems="flex-start"
          alignContent="flex-start"
          width="1140px"
        >
          <SectionHead>Related content</SectionHead>
          <RowWrapper
            justify-content="flex-start"
            alignContent="flex-start"
            alignItems="flex-start"
            data-testid="carousel-component"
          >
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
        </ColWrapper>
      </ColWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;

const LeftArrow = styled.div`
  margin-right: 20px;
`;

const CarouselWrapper = styled.div`
  font-family: "Sofia Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #282c34;
  width: 100%;
`;

const SectionHead = styled.h2`
  color: #a1a7b2;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  align-self: flex-start;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
`;
