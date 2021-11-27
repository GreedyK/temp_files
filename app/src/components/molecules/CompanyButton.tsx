import { ButtonProps } from '@/types'
import Button from '@/components/atoms/Button'

const CompanyButton = () => {
  const button: ButtonProps = {
    text: '製造販売元の公式サイトはこちら',
    href: process.env.BASE_URL ?? '',
    dark: true,
    rounded: true,
    'bg-color': 'bg-sanzaka-dark',
    'hover:bg-color': 'hover:bg-sanzaka-light'
  }
  return <Button {...button} />
}

export default CompanyButton
