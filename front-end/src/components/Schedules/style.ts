import styled from "styled-components";

export const SchedulesContainer = styled.section`

    margin: 32px auto auto;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 700px;
    height: auto; + 140px;
    background-color: #2E2C30;
    
    padding-bottom: 20px;

    border-radius: 10px;

`

export const ScheduleHeader = styled.div`
    
   display: flex;
    align-items: center;
    justify-content: space-between;
    
    
   width: 100%;
   height: 48px;
    
   border-bottom-style: solid; 
   border-bottom-color: ${({ theme }) => theme.colors.border_divisor};
   border-bottom-width: thin; 
    
`

export const ScheduleTimeContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;  
  padding: 12px;  
`

export const ScheduleTimeIcon = styled.img`
  width: 20px;
  height: 20px;  
  margin-left: 20px;  
`

export const ScheduleTimeText = styled.p`
    
  font-size: 16px;
  font-weight: bold;
  
  margin-left: 12px; 
    
  color: ${({ theme }) => theme.colors.content_primary};
`

export const ScheduleHourText = styled.p`
    
  font-size: 16px;
  font-weight: bold;
  
  margin-right: 20px; 
    
  color: ${({ theme }) => theme.colors.content_secondary};
`


export const ScheduleNamesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ScheduleServiceContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ScheduleTableDataTime = styled.p`
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;

    padding-top: 12px;
    margin-left: 32px;

    color: ${({ theme }) => theme.colors.content_primary};
`

export const ScheduleTableDataPet = styled.p`
    font-size: 12px;
    line-height: 24px;
    
    color: ${({ theme }) => theme.colors.content_primary};
`

export const ScheduleTableDataPetOwner = styled.span`
    font-size: 12px;
    line-height: 24px;


    color: ${({ theme }) => theme.colors.content_secondary};
`

export const ScheduleTableDataService = styled.p`
    font-size: 12px;
    line-height: 24px;
    padding-right: 120px;
    
    color: ${({ theme }) => theme.colors.content_secondary};
`

export const ScheduleTableDataAction = styled.p`
    font-size: 12px;
    line-height: 24px;

    margin-right: 40px;
    padding-top: 12px;

    color: ${({ theme }) => theme.colors.content_tertiary};
    
    &:hover {
        cursor: pointer;
    }
    
`

export const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #333;
  overflow: hidden;  
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 16px 0;
  font-weight: bold;
  color: #fff;
`;

export const TableCell = styled.td`
  text-align: left;
  color: #ccc;

  padding-left: 32px;
`;

export const TableInfoHour = styled.td`
  text-align: left;
  padding-left: 32px;

    font-size: 14px;
    font-weight: bold;
    line-height: 24px;

    color: ${({ theme }) => theme.colors.content_primary};  

`;

export const TablePetInfo = styled.td`
  text-align: left;
  padding-left: 12px;  
  color: #ccc;
  white-space: nowrap;  

`;

export const TablePetService = styled.td`
  text-align: left;
  color: #ccc;
  padding-left: 70px;  
  overflow: hidden;
`;

export const TablePetAction = styled.td`
  text-align: left;
  color: #ccc;
  padding-left: 108px;  
  overflow: hidden;
  white-space: nowrap;  


`;

export const TablePetOwnerName = styled.td`
  text-align: left;
  color: #ccc;

  padding-left: 32px;
`;

export const ActionLink = styled.a`
    font-size: 12px;
    line-height: 24px;

    margin-right: 40px;
    padding-top: 12px;
    text-decoration: none;

    color: ${({ theme }) => theme.colors.content_tertiary};

    &:hover {
        cursor: pointer;
    }
`;


