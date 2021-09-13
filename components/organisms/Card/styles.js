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
  height: 335px;
  width: 280px;
  font-family: "Roboto", sans-serif;
  padding: "20";

  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin: 25px 50px 75px;

  background-color: ${({ theme }) => themes[theme || "light"].body};
  color: ${({ theme }) => themes[theme || "light"].text};

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  font-size: 18px;

  white-space: nowrap;
  margin-right: 8px;
`;

export const Email = styled.p`
  font-size: 10px;
`;

export const DOB = styled.p`
  align-self: start;
  font-size: 10px;
`;

export const Description = styled.p`
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

export const Picture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  left: 16.86%;
  right: 9.8%;
  top: 1.84%;
  bottom: 57.29%;
  object-fit: cover;
`;
