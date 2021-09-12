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
  width: 500px;
  height: 700px;
  text-align: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 335px;
  width: 280px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;

  background-color: ${({ theme }) => themes[theme || "light"].body};
  color: ${({ theme }) => themes[theme || "light"].text};

  img {
    width: 205.35px;
    height: 160.9px;
    border-radius: 50%;
    left: 16.86%;
    right: 9.8%;
    top: 1.84%;
    bottom: 57.29%;
  }
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

export const Surname = styled.span`
  right: 100;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

export const Email = styled.p`
  left: 25%;
  right: 25%;
  top: 47.76%;
  bottom: 48.66%;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
`;

export const DOB = styled.p`
  left: 8.21%;
  right: 58.21%;
  top: 91.34%;
  bottom: 5.07%;
  text-align: left;

  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
`;

export const Description = styled.p`
  left: 17.5%;
  right: 17.14%;
  top: 56.72%;
  bottom: 14.03%;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

// export const Picture = styled.img`
//   width: 400px;
//   height: auto;
//   border-radius: 50%;
// `;
