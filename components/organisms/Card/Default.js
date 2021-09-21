import { CardStyle, DOB, Description, Email, Name, Picture } from "./styles";

import React from "react";

function getFormattedDate(dob) {
  const date = new Date(dob);
  const formattedDate =
    date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
  return formattedDate;
}
export default function Default({
  name,
  surname,
  email,
  dob,
  profilePicture,
  description,
}) {
  return (
    <>
      <Picture src={profilePicture} />
      <Name>{name + " " + surname}</Name>
      <Email>{email}</Email>
      <Description>{description}</Description>
      <DOB>Bdate {getFormattedDate(dob)} 🎉</DOB>
    </>
  );
}
