import { FeatureContents, ImageProps } from '@/types'
import ConversionButton from '@/components/molecules/ConversionButton'
import { ChevronDoubleUpIcon } from '@heroicons/react/solid'

const featureContents: FeatureContents = {
  sentences: [
    'タイムカードリーダーの代わりに小さな専用端末を使用します。',
    'クラウドサービスを活用することで日々の管理が便利でスムーズになります。',
    'Wi-Fi版、Wi-Fi + SIM版の2種類をご用意しております。お好きな通信方式をご選択下さい。'
  ],
  functionalSpecs: [{
    id: 'monitor-size',
    label: '画面サイズ',
    value: '7インチ',
  },{
    id: 'monitor',
    label: '液晶',
    value: 'タッチパネル付き液晶',
  },{
    id: 'size',
    label: '全体サイズ',
    value: '縦19.5cm/横22.0cm/奥行9.5cm',
  },{
    id: 'weight',
    label: '重量',
    value: '1kg',
  },{
    id: 'camera',
    label: 'カメラ画素数',
    value: '5M画素',
  },{
    id: 'sensor',
    label: 'センサ',
    value: '超音波センサ',
  },{
    id: 'source',
    label: '電源容量',
    value: '5V/3A',
  },{
    id: 'method',
    label: '通信方式',
    value: 'Wi-Fi版、またはWi-Fi + SIM版',
  },],
}

const featurePhotos: ImageProps[] = [{
  id: 'front',
  src: '/images/device/front.png',
  alt: '朝顔端末の全面写真',
  title: '朝顔端末の全面'
}, {
  id: 'left',
  src: '/images/device/left.png',
  alt: '朝顔端末の側面写真（左）',
  title: '朝顔端末の側面（左）',
}, {
  id: 'right',
  src: '/images/device/right.png',
  alt: '朝顔端末の側面写真（右）',
  title: '朝顔端末の側面（右）',
}, {
  id: 'back',
  src: '/images/device/back.png',
  alt: '朝顔端末の背面写真',
  title: '朝顔端末の背面',
}]

const FunctionalSpecs = ({
  functionalSpecs
}: FeatureContents) => (
  <section className="
    w-full
    lg:w-1/2
    flex
    flex-col
    justify-center
    items-center
  ">
    <h4 className="
      text-3xl
      font-semibold
      tracking-wide
      mb-8
    ">機能スペック</h4>
    <ul className="
      list-square
      list-inside
    ">
      {
        functionalSpecs.map(({
          id,
          label,
          value
        }) => (
          <li
            key={id}
            className="
              text-lg
              tracking-widest
              mb-2
          ">{label}: <span className="text-base">{value}</span>
          </li>
        ))
      }
    </ul>
  </section>
)

const Feature = () => (
  <section className="
    py-20
    bg-opacity-70
    bg-black
    flex
    flex-col
    justify-center
    align-center
    text-blue-50
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
        font-bold
        text-4xl
        tracking-wider
        pb-10
      ">特徴</h2>
      <div className="
        flex
        flex-wrap
        items-center
        justify-center
        pb-10
        lg:max-w-screen-xl
      ">
        <div className="
          w-full
          flex
          flex-wrap
          items-center
          justify-center
        ">
          <ul className="
            lg:w-max
            text-xl
            list-disc
            list-inside
            tracking-widest
          ">
            {
              featureContents.sentences.map(item => (
                <li key={item} className="mb-3">{item}</li>
              ))
            }
          </ul>
        </div>
        <div className="
          w-full
          flex
          items-center
          justify-center
          py-5
          md:py-10
        ">
          <div className="
            bg-blue-50
            p-2
            md:p-10
            flex
            items-center
            justify-center
          ">
            <img
              src="/images/figure/cloud_service.svg"
              title="クラウドサービス"
              alt="クラウドサービスの説明図"
              width="800"
            />
          </div>
        </div>
        <div className="
          w-full
          lg:w-1/2
          flex
          flex-wrap
          justify-center
          items-center
          py-5
        ">
          {
            featurePhotos.map(props => (
              <div
                key={props.id}
                className="
                  flex
                  items-center
                  justify-center
                  w-1/2
                ">
                <img
                  {...props}
                  width="200"
                  className="flex-full"
                />
              </div>
            ))
          }
        </div>
        <FunctionalSpecs {...featureContents} />
      </div>
      <div className="
        flex
        flex-col
        w-full
        md:w-1/3
        text-center
      ">
        <ConversionButton />
      </div>
      <div className="
        flex
        flex-col
        items-center
        justify-center
        mt-8
        text-2xl
        font-bold
        tracking-widest
      ">
        <ChevronDoubleUpIcon className="
          w-10
          h-10
          animate-bounce
        "/>価格はショップをご確認ください
      </div>
    </div>
  </section>
)

export default Feature
