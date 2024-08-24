import {FloatButton} from "./style.ts";
import {useModal} from "../../hooks/useModal.tsx";

export function CreateButton() {

  const {openModal} = useModal();

  return (
      <FloatButton onClick={openModal} >NOVO AGENDAMENTO</FloatButton>
  )
}
