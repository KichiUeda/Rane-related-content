import React, { useEffect, useState } from "react";

import { GlobalStyles } from "../GlobalStyles";
import Carousel from "./Carousel";

import { getCardData } from "../utils/ajaxHelper";

const App = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getCardData();
      console.log(data.length);
      setCardData(data);
    };

    console.log("test");

    getData();
  }, []);
  return (
    <div>
      <GlobalStyles />
      <div>
        <Carousel cardData={cardData} />
      </div>
    </div>
  );
};

export default App;
