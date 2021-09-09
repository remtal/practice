import React, { useEffect, useState } from "react";

import Axios from "axios";
import Card from "../components/organisms/Card";
import Greeting from "../components/molecules/Greeting";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://dummy-api.deta.dev/user").then((resp) => {
      setData(resp.data);
    });
  }, []);

  return (
    <div>
      {/* <Card name={name} surname={surname} /> */}
      {/* {JSON.stringify(data)} */}
      {data.map((value, index) => {
        return <Card {...data} />;
      })}
    </div>
  );
}
