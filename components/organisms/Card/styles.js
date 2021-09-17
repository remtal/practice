import styled from "styled-components";

const themes = {
  dark: {
    body: "#000",
    text: "#fff",
  },
  light: {
    body: "#fff",
    text: "#000",
  },
};

export const CardStyle = styled.div`
  height: 335px;
  width: 280px;
  font-family: "Roboto", sans-serif;

  border-radius: 15px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin: 25px 15px 75px;

  display: grid;
  grid-template-columns: [col1] 130px [col2] auto [col3] 50px;
  grid-template-rows: [row1-start] 150px [row1-end] 25px [row2-start] 8px [row2-end] 110px [last-line] 50px;
  justify-items: center;
  grid-template-areas:
    "picture picture picture picture"
    "name-surname name-surname name-surname name-surname"
    "email email email email"
    "description description description description"
    "dob dob dob dob";

  background-color: ${({ theme }) => themes[theme || "light"].body};
  color: ${({ theme }) => themes[theme || "light"].text};
`;

export const Name = styled.span`
  font-size: 18px;
  grid-area: name-surname;
  grid-row: row1-end;
`;

export const Email = styled.span`
  font-size: 10px;
  color: grey;
  grid-area: email;
  grid-row: row2-start;
`;

export const DOB = styled.p`
  align-self: start;
  font-size: 10px;
  margin: 15px;
  color: grey;
  grid-area: dob;
  grid-row: last-line;
  grid-column: col1;
`;

export const Description = styled.p`
  font-size: 10px;
  text-align: center;
  padding-left: 60px;
  padding-right: 60px;
  grid-area: description;
  grid-row: row2-end;
`;

export const Picture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 20px;
  object-fit: cover;
  grid-area: picture;
  grid-row: row1-start;
`;
