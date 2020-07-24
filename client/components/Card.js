import React from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";

/*
    Cover
    Title - Star
    Platforms - Price
*/

const Card = ({ title, coverImage, platforms, price }) => {
  return (
    <ColWrapper aria-label={`View ${title}`}>
      <CoverWrapper data-testid="cover-image">
        <img src={coverImage} />
      </CoverWrapper>
      <RowWrapper>
        <TitleWrapper data-testid="title-span">{title}</TitleWrapper>
        <IconWrapper data-testid="star-icon">
          <AiOutlineStar />
        </IconWrapper>
      </RowWrapper>
      <RowWrapper>
        <PlatformWrapper data-testid="platforms">{platforms}</PlatformWrapper>
        <PriceWrapper data-testid="price-div">{price}</PriceWrapper>
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

const ColWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
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
