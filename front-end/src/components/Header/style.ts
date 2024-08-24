import styled from "styled-components";

export const HeaderContainer = styled.header`
    
    margin: auto;
    display: flex;
    justify-content: center;
    
`

export const HeaderTexts = styled.div`
   display: flex;
   flex-direction: column; 
`

export const HeaderFilter = styled.div`
    
    display: flex;
    flex-direction: row;
    
    width: 172px;
    height: 48px;
   
    margin-left: 42px;
    margin-top: 16px;
    
    align-items: center;
    
   border-color: ${({ theme }) => theme.colors.border_primary};
   border-radius: 8px;
   border-style: solid; 
    
   &:hover {
       cursor: pointer;
   } 
`

export const HeaderTitle = styled.h1`
  
  font-size: 32px;
  font-weight: bold;  
  color: ${({ theme }) => theme.colors.content_primary};
  line-height: 0;  
    
`

export const HeaderDescription = styled.h2`
  font-size: 14px;
  font-weight: 20;
  line-height: 24px;  
  color: ${({ theme }) => theme.colors.content_secondary};
    
`

export const CalenderIcon = styled.img`
    margin-left: 12px;
    width: 20px;
    height: 20px;
`

export const CalenderText = styled.span`
    
  margin-left: 8px;  
  color: ${({ theme }) => theme.colors.content_secondary};
  font-weight: 16;
  font-size: 16px;  
  line-height: 150%;

`

export const ArrowBackIcon = styled.img`
   width: 20px;
   height: 20px;
   margin-left: 8px; 
`
