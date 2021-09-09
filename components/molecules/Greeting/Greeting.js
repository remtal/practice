import React from "react";
import Title from "../../atoms/Title";

export default function Greeting({ name }) {
  return <Title>Hello {name.toUpperCase()}!</Title>;
}
