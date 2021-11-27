import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useCallback, useState } from 'react'
import ContactButton from '@/components/molecules/ContactButton'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Overlay from '@/components/atoms/Overlay'
import PopupButton from '../molecules/PopupButton'

const ContactForm = ({
  show,
  setShow,
}: {
  show: boolean,
  setShow: Dispatch<SetStateAction<boolean>>,
}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')

  /**
   * サブミット時に実行
   */
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.persist()
    e.preventDefault()
    console.log({name, email, content})
  }, [name, email, content])

  /**
   * nameを打ち込んだときに実行
   */
  const handleChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }, [])

  /**
   * emailを打ち込んだときに実行
   */
   const handleChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  /**
   * addressを打ち込んだときに実行
   */
  const handleChangeContent = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }, [])

  return (
    <>
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
          <PopupButton
            onClick={() => setShow(true)}
          />
        </div>
      </section>
      <Overlay
        isShow={show}
        setIsShow={setShow}
      />
      {
        show &&
        <div className="
          fixed
          z-50
          top-1/2
          left-1/2
          bg-white
          w-10/12
          h-10/12
          max-w-xl
          max-h-96
          transform
          -translate-x-1/2
          -translate-y-1/2
          p-5
        ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col contactform"
            method="post"
            id="contact-form"
          >
            <h3>お問い合わせフォーム</h3>
            <h4>気軽にお問い合わせください。</h4>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChangeName}
              value={name}
              placeholder="お名前"
              className="border"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChangeEmail}
              value={email}
              placeholder="メールアドレス"
              className="border"
              required
            />
            <textarea
              name="content"
              id="content"
              onChange={handleChangeContent}
              placeholder="内容"
              value={content}
              className="border"
            />
            <div className="
               mt-16
               mx-auto
               flex
               flex-col
               w-full
               md:w-1/3
               text-center
            ">
              <ContactButton
                setShow={setShow}
              />
            </div>
          </form>
        </div>
      }
    </>
  )
}

export default ContactForm