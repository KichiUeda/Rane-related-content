import axios from "axios";

const RELATED_EP = "related/";
const RELATED_FE_EP = RELATED_EP + "febits/";

export const getCardData = async () => {
  const product_id = window.location.pathname.replace("/", "");
  let relatedProducts = await axios.get(RELATED_EP + product_id);
  let cardData = [];
  relatedProducts = relatedProducts.data;

  for (let i = 0; i < relatedProducts.length; i++) {
    let card = await axios.get(RELATED_FE_EP + relatedProducts[i]);

    cardData.push(card.data);
  }

  return cardData;
};
