import { ChevronDoubleUpIcon } from '@heroicons/react/solid'
import ConversionButton from "@/components/molecules/ConversionButton"

const usageList: string[] = [
  '事務所に専用機器を設置し、従業員の顔情報を登録していただきます。',
  'クラウドサービスの初期設定として、企業固有の勤務関連設定および従業員情報と顔情報の紐付けを行います。',
  '専用機器で日々の出勤・退勤の打刻を顔認証で行えるようになります。'
]

const UsageContents = (
  list: { [key: number]: string }
) => (
  <ol className="
    list-decimal
    list-inside
    text-lg
    tracking-wide
  ">
    {Object.values(list).map((item, index) => (
      <li key={index}>
        <span className="w-full">{item}</span>
        {
          index === usageList.length - 1
            ? <></>
            : <ChevronDoubleUpIcon className="
                w-10
                h-10
                mx-auto
                my-3
                transform
                rotate-180
                text-asagao
              "/>
        }
      </li>
    ))}
  </ol>
)

const UsageIntroductions = () => (
  <section className="
    bg-white
    shadow-2xl
  ">
    <div className="
      my-10
      py-10
      bg-logo
      bg-white
      bg-center
      bg-no-repeat
      bg-contain
    ">
      <div className="
        w-10/12
        mx-auto
        flex
        flex-col
        justify-center
        items-center
      ">
        <h2 className="
          text-4xl
          font-bold
          tracking-wider
          pb-10
        ">ご使用の流れ</h2>
        <UsageContents {...usageList} />
      </div>
    </div>
    <div className="
      bg-asagao-lightest
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
        <p className="
          text-3xl
          text-asagao-darkest
          tracking-wide
          font-medium
        ">
          ネットショップから商品の注文・お問い合わせを承っております。
        </p>
        <div className="
          mt-16
          flex
          flex-col
          w-full
          md:w-1/3
          text-center
        ">
          <ConversionButton />
        </div>
      </div>
    </div>
  </section>
)

export default UsageIntroductions
