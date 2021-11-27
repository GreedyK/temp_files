import '@/styles/tailwind.scss'
import '@/styles/index.scss'
import '@/styles/tailwind-util.scss'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import { useEffect } from 'react'
import { GA_TRACKING_ID, pageview } from '@/lib/gtag'

const baseUrl: string = `${process.env.BASE_URL ?? '/'}landing_page`
const title: string = '朝顔 | 顔認証勤怠サービス'
const description: string = '貴社の紙のタイムレコーダーをデジタル化しませんか？ 「朝顔」は顔認証で行える勤怠管理クラウドサービスです。'
const previewImage: string = `${baseUrl}/images/device/ogimage.png`

const MyApp = ({
  Component,
  pageProps
}: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    if (!GA_TRACKING_ID) return
    const handleRouteChange = (url: string) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:image:alt" content={title} key="ogimagealt" />
        <meta property="og:site_name" content={title} key="ogsitename" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon/android-chrome-192x192.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
