import { useEffect, useState } from "react";

import Axios from "axios";
import { GreetingStyle } from "./styles";

interface Props {
  name: string;
}

export default function Greeting({ name }: Props) {
  const [greeting, setGreeting] = useState([]);

  Axios.post("https://dummy-api.deta.dev/greeting", {
    name: name,
  }).then((response) => {
    setGreeting(response.data);
  });

  return <GreetingStyle>{greeting}</GreetingStyle>;
}
