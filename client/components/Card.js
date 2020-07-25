import React from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

import { RowWrapper, ColWrapper } from "../GlobalStyles";

/*
    Cover
    Title - Star
    Platforms - Price
*/

const Card = ({ title, thumbnail, systemIcons, priceData }) => {
  console.log("Rendering a card?");
  return (
    <ColWrapper aria-label={`View ${title}`}>
      <CoverWrapper data-testid="cover-image">
        <img src={thumbnail} />
      </CoverWrapper>
      <RowWrapper>
        <TitleWrapper data-testid="title-span">{title}</TitleWrapper>
        <IconWrapper data-testid="star-icon">
          <AiOutlineStar />
        </IconWrapper>
      </RowWrapper>
      <RowWrapper>
        <PlatformWrapper data-testid="platforms">
          {systemIcons.platforms[0]}
        </PlatformWrapper>
        <PriceWrapper data-testid="price-div">{priceData.price}</PriceWrapper>
      </RowWrapper>
    </ColWrapper>
  );
};

export default Card;

const TitleWrapper = styled.span`
  font-size: 1.2rem;
`;

const CoverWrapper = styled.div`
  width: 100%;
`;

const IconWrapper = styled.div`
  font-size: 1.2rem;
`;

const PlatformWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const PriceWrapper = styled.div`
  font-size: 1.4rem;
`;
