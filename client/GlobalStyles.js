import React from "react";
import styled from "styled-components";

export const ColWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  justify-content: ${({ justify }) => (justify ? justify : "normal")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  align-content: ${({ aligncontent }) =>
    aligncontent ? aligncontent : "center"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "none"};
  cursor: ${({ cursor }) => (cursor ? cursor : "arrow")};
  font-family: "Sofia Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  justify-content: ${({ justify }) => (justify ? justify : "normal")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  align-content: ${({ aligncontent }) =>
    aligncontent ? aligncontent : "center"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "none"};
  cursor: ${({ cursor }) => (cursor ? cursor : "arrow")};
  font-family: "Sofia Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
