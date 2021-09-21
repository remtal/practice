import { CardLayout, Header } from "./styles";
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

  return (
    <CardLayout>
      <Header>People</Header>
      {data.map((value, index) => {
        return <Card {...value} />;
      })}
    </CardLayout>
  );
}
