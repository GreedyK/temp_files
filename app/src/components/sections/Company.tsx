import CompanyButton from "@/components/molecules/CompanyButton"

const Company = () => (
  <section className="
    bg-gray-200
  ">
    <div className="
      w-10/12
      mx-auto
      py-20
      flex
      flex-col
      justify-center
      items-center
    ">
      <h2 className="text-4xl font-bold tracking-wide mb-10">製造販売元について</h2>
      <p className="text-xl flex flex-wrap items-center justify-center">
        大阪に本社のあるsanzaka株式会社が開発、製造販売およびサポートまで行っています。
      </p>
      <div className="
        mt-16
        flex
        flex-col
        w-full
        md:w-1/3
        text-center
      ">
        <CompanyButton />
      </div>
    </div>
  </section>
)

export default Company
