import { GreetingStyle } from "./styles";
import React from "react";

interface Props {
  name: string;
}
export default function Greeting({ name }: Props) {
  return <GreetingStyle>Hello {name}!</GreetingStyle>;
}
