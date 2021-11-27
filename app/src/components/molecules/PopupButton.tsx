import { ButtonProps } from "@/types"
import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import Button from "../atoms/Button"

const PopupButton = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>,
}) => {

  const props: ButtonProps = {
    text: 'ポップアップ',
    button: true,
    dark: true,
    rounded: true,
    'bg-color': 'bg-sanzaka-dark',
    'hover:bg-color': 'hover:bg-sanzaka-light',
    onClick,
  }

  return (
    <Button { ...props } />
  )
}

export default PopupButton