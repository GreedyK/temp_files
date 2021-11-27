import { ButtonProps } from "@/types"

const Button = (props: ButtonProps) => {
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
    select-none
    cursor-pointer
  `
  return (
    props.href
    ? <a
        className={button}
        href={props.href}
      >{props.text}</a>
    : props.form
      ? <input
          type="submit"
          className={button}
          form={props.form}
        />
      : <button
          className={`${button} focus:outline-none`}
          onClick={props.onClick}
        >{props.text}</button>
  )
}

export default Button