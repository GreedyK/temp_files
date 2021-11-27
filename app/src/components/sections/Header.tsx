import ConversionButton from '@/components/molecules/ConversionButton'
const Header = () => (
  <header className="
    h-20
    fixed
    flex
    align-center
    w-full
    top-0
    border-b
    bg-white
    z-50
    shadow-sm
  ">
    <div className="
      w-11/12
      m-auto
      flex
      align-center
      justify-between
    ">
      <h1 className="flex">
        <img
          className="mr-3"
          src="/images/logo/asagao/logo_mark.png"
          title="朝顔"
          alt="朝顔ロゴ"
          width="150"
        />
      </h1>
      <ConversionButton />
    </div>
  </header>
)

export default Header
