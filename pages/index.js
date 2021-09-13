import React, { useEffect, useState } from "react";

import Axios from "axios";
import Card from "../components/organisms/Card";

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
    //justifyContent: "space-between",
  };
  return (
    <div style={cardDisplay}>
      {data.map((value, index) => {
        return <Card {...value} />;
      })}
    </div>
  );
}
