import React, { useEffect, useState } from "react";
//import "../reset.css";
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
      <Carousel cardData={cardData} />
    </div>
  );
};

export default App;
