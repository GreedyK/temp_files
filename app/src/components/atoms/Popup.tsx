import { ButtonProps } from "@/types"

const Button = (props: ButtonProps) => {
  const openPopup = () => {
      setShow(true)
  }

  const button = `
    ${props['bg-color'] || 'bg-sanzaka'}
    ${props['hover:bg-color'] || 'hover:bg-sanzaka-light'}
    ${props.dark ? 'text-pink-50' : 'text-default'}
    ${props.rounded && 'rounded-full'}
    py-3
    px-6
    text-sm
    md:text-base
    md:font-bold
    shadow-xl
  `
  return (
    <a
      className={button}
      href={props.href}
      onClick={openPopup}
    >{props.text}</a>
  )
}

export default Button
