import {
    ActionLink,
    ScheduleHeader,
    ScheduleHourText,
    SchedulesContainer, ScheduleTable, ScheduleTableDataPet, ScheduleTableDataPetOwner, ScheduleTableDataService,
    ScheduleTimeContainer,
    ScheduleTimeIcon,
    ScheduleTimeText, TableInfoHour, TablePetAction, TablePetInfo, TablePetService, TableRow
} from "./style.ts";
import MorningImage from '../../assets/morning_icon.png'
import AfternoonImage from '../../assets/afternoon.png'
import NightImage from '../../assets/night.png'

interface Props {
    period: 'morning' | 'afternoon' | 'night',
}

const periodInfo = {
    morning: {
        title: "Manhã",
        period: "09h - 12h",
        icon: MorningImage
    },
   afternoon: {
        title: "Tarde",
        period: "13h - 18h",
        icon: AfternoonImage
   },
   night: {
        title: "Noite",
        period: "19h - 20h",
        icon: NightImage
   }
}

export function Schedules({period}: Props): JSX.Element {
    return (
        <SchedulesContainer>
          <ScheduleHeader>
            <ScheduleTimeContainer>
                <ScheduleTimeIcon src={periodInfo[period]["icon"]} />
                <ScheduleTimeText>{periodInfo[period]["title"]}</ScheduleTimeText>
            </ScheduleTimeContainer>
             <ScheduleHourText>{periodInfo[period]["period"]}</ScheduleHourText>
          </ScheduleHeader>

            <ScheduleTable>
                <tbody>
                <TableRow>
                    <TableInfoHour>09:30</TableInfoHour>
                    <TablePetInfo><ScheduleTableDataPet>Mel <ScheduleTableDataPetOwner>/ Julia</ScheduleTableDataPetOwner></ScheduleTableDataPet></TablePetInfo>
                    <TablePetService><ScheduleTableDataService>Tosa</ScheduleTableDataService></TablePetService>
                    <TablePetAction><ActionLink href="#">Remover agendamento</ActionLink></TablePetAction>
                </TableRow>

                <TableRow>
                    <TableInfoHour>10:20</TableInfoHour>
                    <TablePetInfo><ScheduleTableDataPet>Thor <ScheduleTableDataPetOwner>/ Pedro</ScheduleTableDataPetOwner></ScheduleTableDataPet></TablePetInfo>
                    <TablePetService><ScheduleTableDataService>Vacina</ScheduleTableDataService></TablePetService>
                    <TablePetAction><ActionLink href="#">Remover agendamento</ActionLink></TablePetAction>
                </TableRow>

                <TableRow>
                    <TableInfoHour>13:00</TableInfoHour>
                    <TablePetInfo><ScheduleTableDataPet>Lulu <ScheduleTableDataPetOwner>/ Gabrielle</ScheduleTableDataPetOwner></ScheduleTableDataPet></TablePetInfo>
                    <TablePetService><ScheduleTableDataService>Higienização</ScheduleTableDataService></TablePetService>
                    <TablePetAction><ActionLink href="#">Remover agendamento</ActionLink></TablePetAction>
                </TableRow>

                </tbody>
            </ScheduleTable>


        </SchedulesContainer>
    )
}
