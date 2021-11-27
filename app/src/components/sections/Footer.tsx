const Footer = () => (
  <footer className="
    w-full
    h-20
    border-t
    border-gray-200
    flex
    justify-center
    items-center
    shadow-inner
  ">
    <a href={process.env.BASE_URL ?? ''}>
      <img
        className="mr-5"
        src="/images/logo/company/logo_mark.png"
        title="sanzaka"
        alt="sanzakaのロゴ"
        width="120"
      />
    </a>
  </footer>
)

export default Footer
