import { OverlayProps } from '@/types'
import { useCallback } from 'react'

const Overlay = ({
  className,
  isShow,
  setIsShow,
}: OverlayProps) => {

  const onClickHandler = useCallback(() => {
    setIsShow(false)
  }, [])

  return (
    isShow ?
    <div
      onClick={onClickHandler}
      className={className ?? `
        fixed
        top-0
        left-0
        right-0
        bottom-0
        bg-black
        opacity-60
        z-50
    `}></div>
    : <></>
  )
}

export default Overlay