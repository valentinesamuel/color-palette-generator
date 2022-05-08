import styled from "styled-components";

export const ColorFrame = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  background-color: ${({ theme }) => theme.colorFrameBgColor};
  height: max-content;
  width: auto;
  text-align: center;
  margin: 20px;
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  }
`;
