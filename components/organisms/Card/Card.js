import { CardStyle } from "./styles";
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
      <span>{name}</span>
      <span>{surname}</span>
      <span>{email}</span>
      <span>{dob}</span>
      <img src={profilePicture} />
      <span>{description}</span>
    </CardStyle>
  );
}
