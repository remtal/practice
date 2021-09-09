import Card from "../components/organisms/Card";
import Greeting from "../components/molecules/Greeting";
import React from "react";

export default function Home() {
  const name = "Talha",
    surname = "Samin";

  return (
    <div>
      <Card name={name} surname={surname} />
    </div>
  );
}
