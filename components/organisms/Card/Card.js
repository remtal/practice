import { CardStyle, DOB, Description, Email, Name, Picture } from "./styles";

import React from "react";

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
  return (
    <CardStyle theme={theme}>
      <Picture src={profilePicture} />
      <Name>{name + " " + surname}</Name>
      <Email>{email}</Email>
      <Description>{description}</Description>
      <DOB>Bdate {getFormattedDate(dob)} 🎉</DOB>
    </CardStyle>
  );
}

/*
Use a React Hook, UseState (selected, setSelected), initial useState is set to normal card by default, 
upon click it changes to Greeting card. Return the normal image, <button onClick> -> setSelected to greeting card.
*/
