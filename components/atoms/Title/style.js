import styled from "styled-components";

export const TitleStyle = styled.span`
  color: ${() => {
    if (1 === 2) return "red";
    else return "blue";
  }};

  font-size: 1.5rem;
`;
