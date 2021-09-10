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
  position: relative;
  width: 641px;
  height: 758px;

  border: 1px dashed #7b61ff;
  box-sizing: border-box;
  border-radius: 5px;

  background-color: ${({ theme }) => themes[theme || "light"].body};
  color: ${({ theme }) => themes[theme || "light"].text};
`;
