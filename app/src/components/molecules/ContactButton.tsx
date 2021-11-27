import Button from '@/components/atoms/Button'
import { ButtonProps } from '@/types'
import { Dispatch, SetStateAction } from 'react'

const ContactButton = ({
  setShow,
}: {
  setShow: Dispatch<SetStateAction<boolean>>,
}) => {
  const props: ButtonProps = {
    text: '送信',
    form: 'contact-form',
    dark: true,
    rounded: true,
    'bg-color': 'bg-sanzaka-dark',
    'hover:bg-color': 'hover:bg-sanzaka-light',
    onClick: () => setShow(true)
  }

  return (
    <Button { ...props }/>
  )
}

export default ContactButton