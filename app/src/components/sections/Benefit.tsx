import { ItemProps } from '@/types'
import BenefitItem from '@/components/molecules/BenefitItem'

const items: ItemProps[] = [{
  id: '1',
  title: 'デジタル化',
  content: '毎月の月締め後の集計や紙のタイムカードの準備が不要に！',
  icon: 'desktop-computer',
},{
  id: '2',
  title: '残業時間管理',
  content: '従業員の残業時間が日々自動集計され、所定残業時間超過を事前に回避！',
  icon: 'clock',
},{
  id: '3',
  title: '最新状況把握',
  content: '管理者の方は、従業員の出勤状況をリアルタイムに把握でき、業務運営がスムーズに！',
  icon: 'clipboard-check',
},{
  id: '4',
  title: 'なりすまし防止',
  content: '顔認証なのでICカードの発行は不要となり、なりすましを防止！顔写真のログもしっかり保存！',
  icon: 'badge-check',
},{
  id: '5',
  title: 'スマホ参照',
  content: '従業員は各自のスマホからご自身の勤務情報を会社・自宅のどこからでも確認が可能！',
  icon: 'device-mobile',
},{
  id: '6',
  title: '衛生的',
  content: '機器の超音波センサーに手をかざすと撮影されるので、打刻の際は非接触で衛生的！',
  icon: 'hand',
},]

const Benefit = () => (
  <section className="
    flex
    flex-col
    justify-center
    align-center
    shadow-2xl
  ">
    <div className="
      balloon
      bg-white
      w-full
      flex
      flex-col
      items-center
      justify-center
    ">
      <div className="
        w-10/12
        relative
        py-10
        md:pt-16
      ">
        <h2
          className="
            flex
            item-center
            justify-center
            text-white
            bg-sanzaka-dark
            font-bold
            tracking-widest
            text-xs
            w-max
            mx-auto
            mb-5
            px-5
            py-1
            md:py-2
            md:absolute
            md:transform
            md:-rotate-12
            md:translate-y-1/2
            md:-translate-x-1/2
            md:-top-2
            md:right-1/2
            md:text-lg
            shadow-xl
        ">ご安心ください！</h2>
        <h3 className="
          flex
          flex-col
          items-center
          justify-center
          tracking-widest
          text-default
          text-2xl
          font-semibold
        ">
          <span className="
            tracking-wide
            flex
            flex-wrap
            justify-center
            items-center
          ">顔認証で行える<span>勤怠管理</span>クラウドサービス
          </span>
          <span className="
            flex
            flex-wrap
            items-center
            justify-center
            mt-8
            text-center
          ">
            <img
              src="/images/logo/asagao/logo_mark.png"
              title="朝顔"
              alt="朝顔のロゴマーク"
              width="200"
              className="m-3"
            />を使えば......
          </span>
        </h3>
      </div>
    </div>
    <div className="bg-asagao-lightest pt-10">
      <div className="w-10/12 py-20 mx-auto relative">
        <h4 className="
          text-4xl
          text-asagao-darkest
          font-bold
          pb-8
          tracking-widest
          text-center
          flex
          flex-wrap
          justify-center
          md:block
        "><span className="line-mark">6つのメリット</span>
        </h4>
        <div
          className="
            flex
            flex-wrap
            justify-center
            max-w-screen-md
            mx-auto
        ">{ items.map(item => <BenefitItem {...item} key={item.id} />) }
        </div>
      </div>
    </div>
  </section>
)

export default Benefit
