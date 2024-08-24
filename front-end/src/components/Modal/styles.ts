import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
    
    backdrop-filter: blur(2px);   
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;  
  align-items: center;  
`

export const ModalContent = styled.div`
  width: 470px;
  height: 620px;  
  background-color: #23242C;
    
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h1`
  font-weight: bold;
  font-size: 24px;  
  color: ${({ theme }) => theme.colors.content_primary};
    
    
`

export const ModalDescription = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin-top: -10px;

    color: ${({ theme }) => theme.colors.content_secondary};

    /* Inside auto layout */
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;

`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #2e2c30;
  border-radius: 8px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #fff;
  margin-bottom: 8px;
  display: block;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #3b3a3e;
  border-radius: 8px;
  padding: 10px;
  color: #a385d3;

  svg {
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  padding: 10px;
  font-family: 'Arial', sans-serif;

  ::placeholder {
    color: #666;
  }
`;

export const FormGroupSide = styled.div`
 display: flex;
 justify-content: space-between;   
    
`

export const CloseModalIcon = styled.svg`
  width: 13px;
  height: 13px;
  
  &:hover{
    cursor: pointer;  
  }  
    
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 48px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: #2E2C30;
  color: #ccc;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #444;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23ccc" viewBox="0 0 24 24"%3E%3Cpath d="M7 10l5 5 5-5H7z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #aaa;
  }

  option {
    background-color: #2E2C30;
    color: #ccc;
    font-size: 16px;
    padding: 12px;
  }
`;

export const SelectWithIcon = styled.div`
  display: flex;
  align-items: center;
  background-color: #2E2C30;
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;
  height: 48px;
  border: 1px solid #444;

  svg {
    margin-right: 8px;
    fill: #8a00ff;
  }

  select {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    color: #ccc;
    font-size: 16px;
    font-weight: bold;
    appearance: none;
  }
`;

export const ButtonSubmit = styled.button`
    width: 100%;
    background-color: #A385D3;
    color: #050505;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: -5px;
`


