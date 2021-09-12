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
    <div>
      <CardStyle theme={theme}>
        <img src={profilePicture} />
        <Name>{name}</Name>
        <Surname>{surname}</Surname>
        <Email>{email}</Email>
        <Description>{description}</Description>
        <DOB>{dob}</DOB>
      </CardStyle>
    </div>
  );
}
