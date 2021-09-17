import React, { useEffect, useState } from "react";

import Axios from "axios";
import Card from "../components/organisms/Card";
import { GridLayout } from "../components/organisms/Card/styles";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://dummy-api.deta.dev/user").then((resp) => {
      setData(resp.data);
    });
  }, []);
  const cardDisplay = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  };
  return (
    <div style={cardDisplay}>
      {data.map((value, index) => {
        return <Card {...value} />;
      })}
    </div>
  );
}
