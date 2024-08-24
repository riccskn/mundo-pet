import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home} from "./pages/Home.tsx";
import {ModalProvider} from "./contexts/ModalContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
    <Home />
    </ModalProvider>
  </StrictMode>,
)
