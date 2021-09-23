import { DOB, Description, Email, Name, Picture } from "./styles";

import React from "react";

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
  description: string;
  profilePicture: string;
}

export default function Default({
  name,
  surname,
  email,
  dob,
  profilePicture,
  description,
}: Props) {
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
