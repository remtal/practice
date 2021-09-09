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
      {name +
        " " +
        surname +
        " " +
        email +
        " " +
        dob +
        " " +
        profilePicture +
        " " +
        theme +
        " " +
        description}
    </Title>
  );
}
