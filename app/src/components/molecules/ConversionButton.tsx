import { ButtonProps } from '@/types'
import Button from '@/components/atoms/Button'

const ConversionButton = () => {
  const button: ButtonProps = {
    text: 'ショップはこちら',
    href: process.env.SHOP_URL ?? '',
    dark: true,
    rounded: true,
  }
  return <Button {...button} />
}

export default ConversionButton
