import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Offers() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/with-count"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading === true ? (
        <p>en cours de chargement ...</p>
      ) : (
        <div>
          {data.offers.map((offer, index) => {
            return <Card offer={offer}></Card>;
          })}
        </div>
      )}
    </div>
  );
}

export default Offers;
