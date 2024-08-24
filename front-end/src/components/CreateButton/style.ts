import styled from "styled-components";

export const FloatButton = styled.button`
   
  width: 218px;
  height: 48px;  
  position: fixed;
  bottom: 33px;
  right: 30px;
  background-color: ${props => props.theme.colors.content_brand};
  color: #050505;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
    
  font-weight: bold;
  font-size: 16px;  

  &:hover {
    background-color: #0056b3;
  }
`;
