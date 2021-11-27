import { FaqProps } from '@/types'

const faq: FaqProps[] = [{
  id: '1',
  question: '顔の登録はどのように行いますか。',
  answer: '利用開始時に顔写真と従業員情報（従業員番号、氏名）を紐付ける必要があります。専用機器から複数従業員の顔を撮影して顔登録を行った後、クラウドサービスで従業員情報と顔写真を紐付けます。',
}, {
  id: '2',
  question: '専用機器が故障したら修理できますか。',
  answer: '購入から１年間は、メーカー保証として無償で修理・交換いたします。それ以降は、有償にて修理対応いたします。',
}, {
  id: '3',
  question: 'クラウドサービスに機能追加してもらえますか。',
  answer: '朝顔クラウドでは、機能改善・追加を継続的に行いますので、問い合わせ窓口宛てに要望をご連絡ください。複数のお客さまから要望が挙がった機能から優先して対応いたします。',
}, {
  id: '4',
  question: '顔写真のデータは、どのようにセキュリティ対策されていますか。',
  answer: 'お客様のデータは、当社のクラウドサービスで厳重に管理していますので、ご安心ください。具体的には、アクセスログのチェック、セキュリティ診断の実施、ユーザ認証などのセキュリティ対策を講じています。',
}, {
  id: '5',
  question: '解約はどのようにすればよいですか。',
  answer: '解約を希望する月の20日までにご連絡ください。月額利用料は、月単位で発生し、日割りによる返金はいたしません。',
}]

const FAQ = () => (
  <section className="
    py-20
    flex
    flex-col
    justify-center
    align-center
    bg-white
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
        flex
        item-center
        justify-center
        w-full
        tracking-wide
        font-bold
        text-4xl
        pb-4
      ">FAQ</h2>
      <h3 className="
        flex
        item-center
        justify-center
        w-full
        tracking-wide
        font-bold
        text-xl
        pb-10
      ">よくあるご質問</h3>
      <ul>
        {
          faq.map(({
            id,
            question,
            answer
          }) => (
            <li
              key={id}
              className="
                mb-10
                text-xl
                tracking-wider
            ">
              <p className="
                mb-3
                font-bold
              ">
                <span className="
                  text-asagao-dark1
                  text-4xl pr-3
                ">Q.</span>{question}</p>
              <p className="
                text-lg
              ">
                <span className="
                  text-sanzaka
                  text-4xl
                  pr-3
                  font-bold
                ">A.</span>{answer}</p>
            </li>
          ))
        }
      </ul>
    </div>
  </section>
)

export default FAQ
