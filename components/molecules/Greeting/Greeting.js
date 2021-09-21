import { GreetingStyle } from "./styles";
import React from "react";

export default function Greeting({ name }) {
  return <GreetingStyle>Hello {name}!</GreetingStyle>;
}
