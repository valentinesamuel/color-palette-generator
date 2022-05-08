import styled from "styled-components";


export const Toggle = styled.button`
  cursor: pointer;
  height: max-content;
  width: max-content;
  border-radius: 50%;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgColor};
  border: none;
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;
    
    
    // color: ${({ theme }) => theme.pageBackground};