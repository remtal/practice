import React, { useState } from "react";

import { CardStyle } from "./styles";
import Default from "./Default";
import Greeting from "../../molecules/Greeting/Greeting";

function getFormattedDate(dob: string) {
  const date = new Date(dob);
  const formattedDate =
    date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
  return formattedDate;
}
interface Props {
  name: string;
  surname: string;
  email: string;
  dob: string;
  theme: string;
  description: string;
  profilePicture: string;
}
export default function Card({
  name,
  surname,
  email,
  dob,
  profilePicture,
  theme,
  description,
}: Props) {
  const [selected, setSelected] = useState<boolean>();
  return (
    <CardStyle onClick={() => setSelected(!selected)} theme={theme}>
      {selected ? (
        <Greeting {...{ name }} />
      ) : (
        <Default
          {...{
            name,
            surname,
            email,
            dob,
            profilePicture,
            description,
          }}
        />
      )}
    </CardStyle>
  );
}
