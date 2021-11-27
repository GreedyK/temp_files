import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export type ButtonProps = {
  text: string
  href?: string
  form?: string
  button?: boolean
  'bg-color'?: string
  'hover:bg-color'?: string
  dark?: boolean
  rounded?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export type ItemProps = {
  id: string
  content: string
  title?: string
  icon?: string
}

export type FaqProps = {
  id: string
  question: string
  answer: string
}

export type IconProps = {
  className: string
}

export type FeatureContents = {
  sentences: string[]
  functionalSpecs: {
    id: string
    label: string
    value: string
  }[]
}

export type ImageProps = {
  id?: string
  src: string
  alt: string
  title?: string
  width?: string
  hight?: string
}
