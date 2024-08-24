import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Brand} from "../components/Brand";
import {Header} from "../components/Header";
import {Schedules} from "../components/Schedules";
import {CreateButton} from "../components/CreateButton";
import {Modal} from "../components/Modal";

interface Theme {
    colors: {
        background: string
        content_primary: string;
        content_secondary: string;
        content_tertiary: string;
        border_primary: string;
        border_divisor: string;
        content_brand: string;
    },
}

const theme: Theme = {
    colors: {
        background: '#14151d',
        content_primary: '#FFFFFF',
        content_secondary: '#98959D',
        content_tertiary: '#666666',
        border_primary: '#3E3C41',
        border_divisor: '#353339',
        content_brand: '#9282FA',
    },
};

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

    
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Inter', Tahoma, Geneva, Verdana, sans-serif;
  }

  h1 {
    color: white;
  }
`;


export function Home() {

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Brand/>
                <Header/>
                <Schedules period={'morning'}/>
                <Schedules period={'afternoon'}/>
                <Schedules period={'night'}/>

                <CreateButton/>
                <Modal/>
            </>
        </ThemeProvider>
    )
}
