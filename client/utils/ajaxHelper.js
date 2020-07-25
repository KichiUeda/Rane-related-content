import axios from "axios";

const RELATED_EP = "related/";
const RELATED_FE_EP = RELATED_EP + "febits/";

export const getCardData = async () => {
  const API =
    window.location.origin ===
    "http://ec2-54-224-38-115.compute-1.amazonaws.com:3007"
      ? "/"
      : "http://ec2-54-224-38-115.compute-1.amazonaws.com:3007/";
  const product_id = window.location.pathname.replace("/", "");
  let relatedProducts = await axios.get(API + RELATED_EP + product_id);
  let cardData = [];
  relatedProducts = relatedProducts.data;

  for (let i = 0; i < relatedProducts.length; i++) {
    let card = await axios.get(API + RELATED_FE_EP + relatedProducts[i]);

    cardData.push(card.data);
  }

  return cardData;
};
