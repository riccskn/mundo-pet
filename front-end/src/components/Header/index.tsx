import {
    ArrowBackIcon,
    CalenderIcon,
    CalenderText,
    HeaderContainer,
    HeaderDescription,
    HeaderFilter,
    HeaderTexts,
    HeaderTitle
} from "./style.ts";
import CalenderImage from "../../assets/calender_btn.png"
import ArrowBackImage from "../../assets/arrow_back.png"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderTexts>
             <HeaderTitle>Sua agenda</HeaderTitle>
             <HeaderDescription>Aqui você pode ver todos os clientes e serviços agendados para hoje.</HeaderDescription>
            </HeaderTexts>

            <HeaderFilter>
              <CalenderIcon src={CalenderImage} alt="Calender Icon" />
              <CalenderText>10/01/2024</CalenderText>
              <ArrowBackIcon src={ArrowBackImage} alt="Arrow back Icon" />
            </HeaderFilter>
        </HeaderContainer>
    )
}
