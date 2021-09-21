import React, { useState } from "react";

import { CardStyle } from "./styles";
import Default from "./Default";
import Greeting from "../../molecules/Greeting/Greeting";

function getFormattedDate(dob) {
  const date = new Date(dob);
  const formattedDate =
    date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
  return formattedDate;
}

export default function Card({
  name,
  surname,
  email,
  dob,
  profilePicture,
  theme,
  description,
}) {
  const [selected, setSelected] = useState();
  return (
    <CardStyle button onClick={() => setSelected(!selected)} theme={theme}>
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
