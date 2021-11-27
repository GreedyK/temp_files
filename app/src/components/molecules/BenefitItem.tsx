import { IconProps, ItemProps } from '@/types'
import {
  BadgeCheckIcon,
  ClipboardCheckIcon,
  ClockIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  HandIcon,
} from '@heroicons/react/outline'

const Icon = ({
  icon
}: {
  icon?: string
}) => {
  const iconProps: IconProps = {
    className: `
      h-28
      w-28
      text-asagao-darkest
    `
  }
  return icon === 'desktop-computer'
    ? <DesktopComputerIcon {...iconProps} />
    : icon === 'clipboard-check'
      ? <ClipboardCheckIcon {...iconProps} />
      : icon === 'clock'
        ? <ClockIcon {...iconProps} />
        : icon === 'badge-check'
          ? <BadgeCheckIcon {...iconProps} />
          : icon === 'device-mobile'
            ? <DeviceMobileIcon {...iconProps} />
            : icon === 'hand'
              ? <HandIcon {...iconProps} />
              : <></>
}

const BenefitItem = (
  props: ItemProps
) => (
  <section className="
    w-full
    lg:w-96
    md:px-5
    md:py-10
    mt-5
  ">
    <div className="
      flex
      flex-col
      items-center
      border-8
      border-asagao-darkest
      text-asagao-darkest
      p-10
      h-full
      text-xl
      tracking-wider
      leading-10
      shadow-lg
      relative
    ">
      <h3 className="
        py-2
        px-10
        text-2xl
        w-max
        tracking-wider
        font-bold
        text-asagao-darkest
        md:text-blue-50
        md:bg-asagao-darkest
        md:absolute
        md:top-0
        md:left-1/2
        md:transform
        md:-translate-x-1/2
        md:-translate-y-1/2
        md:shadow-md
      ">
        { props.title }
      </h3>
      <Icon icon={props.icon} />
      <span className="pt-5">
        {props.content}
      </span>
    </div>
  </section>
)

export default BenefitItem
