import { ItemProps } from "@/types"
import SituationItem from "@/components/molecules/SituationItem"

const items: ItemProps[] = [{
  id: '1',
  content: '勤務時間の集計や紙のタイムカードの準備が大変！',
}, {
  id: '2',
  content: '気がついたら所定残業時間を超過していた！',
}, {
  id: '3',
  content: '従業員の出勤状況をリアルタイムに把握できない！',
}, {
  id: '4',
  content: '打刻のなりすましを防止したい！',
}]

const Situation = () => (
  <section className="
    py-20
    flex
    flex-col
    justify-center
    align-center
    bg-asagao-lightest
    shadow-2xl
  ">
    <div className="
      w-10/12
      mx-auto
      flex
      flex-wrap
      justify-center
      items-center
    ">
      <h2 className="
        w-full
        text-4xl
        font-bold
        text-default
        pb-10
        tracking-wide
        text-center
        md:block
        flex
        flex-wrap
        flex-col
        justify-center
      ">紙のタイムカードだと、<span>こんなお困りは</span>ありませんか？
      </h2>
      <div
        className="
          flex
          flex-wrap
          justify-center
          items-center
      ">{ items.map(item => <SituationItem {...item} key={item.id} />) }
      </div>
    </div>
  </section>
)

export default Situation
