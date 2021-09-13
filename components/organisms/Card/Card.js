import {
  CardStyle,
  DOB,
  Description,
  Email,
  Name,
  Picture,
  Surname,
} from "./styles";

import React from "react";

export default function Card({
  name,
  surname,
  email,
  dob,
  profilePicture,
  theme,
  description,
}) {
  return (
    <CardStyle theme={theme}>
      <Picture src={profilePicture} />
      <Name>{name + " " + surname}</Name>
      <Email>{email}</Email>
      <Description>{description}</Description>
      <DOB>{dob}</DOB>
    </CardStyle>
  );
}

/*
Use a React Hook, UseState (selected, setSelected), initial useState is set to normal card by default, 
upon click it changes to Greeting card. Return the normal image, <button onClick> -> setSelected to greeting card.
*/
