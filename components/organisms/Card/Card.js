import React from "react";
import Title from "../../atoms/Title";

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
    <Title>
      <div>
        <span>{name}</span>
        <span>{surname}</span>
        <span>{email}</span>
        <span>{dob}</span>
        <img src={profilePicture} />
        <span>{theme}</span>
        <span>{description}</span>
      </div>
    </Title>
  );
}
