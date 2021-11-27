const HeadLine = () => (
  <div className="
    flex
    flex-wrap
    justify-center
    items-center
    headlineWrapper
  ">
    <h2 className="
      font-bold
      text-default
      tracking-widest
      text-3xl
      w-full
      md:w-10/12
    ">
      <span className="
        flex
        flex-wrap
        justify-center
        lg:justify-start
        items-end
        mb-5
        md:mb-8
      ">御社の
        <span className="
          md:text-7xl
          text-asagao-dark1
        ">紙</span>の
        <span className="
          md:text-5xl
          md:mt-8
        ">タイムレコーダー</span>
      </span>
      <span className="
        flex
        flex-wrap
        justify-center
        lg:justify-end
        items-end
      ">
        <span className="
          md:text-6xl
          text-sanzaka
        ">デジタル化</span>
        しませんか？
      </span>
    </h2>
  </div>
)
const SubTitle = () => (
  <div className="lg:w-1/2">
    <h3 className="
      order-1
      text-asagao
      text-md
      md:text-3xl
      tracking-wide
      font-medium
    ">
      <span className="
        flex
        justify-center
        mb-3
      ">顔認証で行える</span>
      <span className="
        flex
        justify-center
      ">勤怠管理クラウドサービス</span>
    </h3>
  </div>
)
const FirstView = () => (
  <section>
    <div className="
      min-h-screen
      bg-white
      pt-20
      pb-20
      md:pb-52
      flex
      flex-col
      justify-center
      items-center
      relative">
      <div className="
        order-2
        flex
        flex-col
        justify-center
        items-center
        py-10
        md:py-16
        px-5
        w-full
        bg-asagao-lightest
      ">
        <div className="
          lg:flex
          w-full
          lg:max-w-screen-xl
        ">
          <HeadLine />
          <div className="
            lg:relative
            w-full
            lg:transform
            lg:-translate-x-10
            flex
            justify-center
            items-center
            mt-10
            lg:mt-0
          ">
            <img
              className="lg:absolute lg:-top-3/4"
              src="/images/device/first_view.png"
              title="朝顔の端末"
              alt="朝顔の端末の写真"
              width="480"
            />
          </div>
        </div>
      </div>
      <div className="
        order-1
        py-5
        md:py-10
        w-full
        md:max-w-screen-xl
      ">
        <SubTitle />
      </div>
      <div className="
        order-3
        flex
        items-center
        justify-center
        mt-10
        md:absolute
        md:bottom-0
        md:left-1/2
        md:transform
        md:-translate-x-1/2
        md:translate-y-1/2
      ">
        <img
          src="/images/device/admin_monitor.png"
          title="管理画面"
          alt="管理画面の写真"
          width="400"
        />
      </div>
    </div>
    <div className="
      bg-opacity-70
      bg-black
      text-gray-50
      pt-20
      md:pt-40
      pb-20
    ">
      <div className="
        w-10/12
        mx-auto
        flex
        flex-wrap
        justify-center
        items-center
      ">
        <h4 className="
          flex
          flex-wrap
          items-center
          justify-center
          font-normal
          text-center
          text-4xl
          tracking-widest
          w-full
          mb-8
        ">
          <img
            src="/images/logo/asagao/logo_mark.png"
            title="朝顔"
            alt="朝顔のロゴマーク"
            width="200"
            className="m-3"
          />
          は顔認証勤怠サービスです
        </h4>
        <div className="
          w-full
          flex
          flex-wrap
          flex-col
          items-center
          justify-center
          lg:flex-row
          lg:justify-around
          lg:w-8/12
        ">
          <p className="
            order-2
            md:w-1/2
            flex
            flex-col
            items-center
            justify-between
            tracking-widest
            text-lg
          ">かさばる紙のタイムカードをなくし、リアルタイムな勤怠管理が行えます。
          </p>
          <div className="
            order-1
            flex
            items-center
            justify-center
            md:w-1/2
          ">
            <img
              src="/images/device/device_with_photo.png"
              title="朝顔の端末"
              alt="朝顔の端末の写真"
              width="250"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FirstView
