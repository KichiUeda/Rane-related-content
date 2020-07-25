import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

import { RowWrapper, ColWrapper } from "../GlobalStyles";

/*
    Cover
    Title - Star
    Platforms - Price
*/

const Card = ({ title, thumbnail, platforms, os, priceData, product_id }) => {
  const [price, setPrice] = useState(`$${priceData.price}.00`);
  const [hovering, setHovering] = useState(false);
  const handleMouseOver = () => {
    setPrice("BUY");
    setHovering(true);
  };
  const handleMouseLeave = () => {
    setPrice(`$${priceData.price}.00`);
    setHovering(false);
  };
  const handleClick = () => {
    document.location.pathname = "/" + product_id;
  };
  return (
    <ColWrapper
      alignItem="flex-start"
      width="270px"
      margin="0 20px 0 0"
      cursor="pointer"
      aria-label={`View ${title}`}
      onClick={handleClick}
    >
      <CoverWrapper data-testid="cover-image">
        <img src={thumbnail} />
      </CoverWrapper>
      <RowWrapper
        height="53px"
        padding="10px"
        justify="space-between"
        width="100%"
        backgroundColor="#FFFFFF"
      >
        <TitleWrapper data-testid="title-span">{title}</TitleWrapper>
        <IconWrapper data-testid="star-icon">
          <AiOutlineStar style={{ fontSize: "16px" }} />
        </IconWrapper>
      </RowWrapper>
      <RowWrapper
        backgroundColor="#F9F9F9"
        width="100%"
        justify="space-between"
        height="50px"
        padding="10px"
      >
        <PlatformWrapper data-testid="platforms">
          {platforms &&
            platforms.map((plat) => (
              <IconWrapper key={title + plat}>
                <img src={plat} />
              </IconWrapper>
            ))}
          |
          {os &&
            os.map((op) => (
              <IconWrapper key={title + op}>
                <img src={op} />
              </IconWrapper>
            ))}
        </PlatformWrapper>
        <PriceWrapper
          data-testid="price-div"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <CartIconWrapper visible={hovering}>
            <FaShoppingCart />
          </CartIconWrapper>
          {price}
        </PriceWrapper>
      </RowWrapper>
    </ColWrapper>
  );
};

export default Card;

const TitleWrapper = styled.span`
  font-size: 1.2rem;
  width: 227px;
`;

const CoverWrapper = styled.div`
  img {
    width: 270px;
    height: auto;
  }
`;

const IconWrapper = styled.div`
  height: 17px;
  img {
    height: 17px;
    width: auto;
  }
`;

const PlatformWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-size: 1rem;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  color: #3b3e48;
  padding-top: 4px;
  height: 28px;
  width: 65px;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    background-color: #97b147;
    color: #ffffff;
    content: "Buy";
    text-transform: uppercase;
  }
  cursor: pointer;
`;

const CartIconWrapper = styled.div`
  display: ${({ visible }) => (visible ? "inline-block" : "none")};
  margin-right: 3px;
`;
