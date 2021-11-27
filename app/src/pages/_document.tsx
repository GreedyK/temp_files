import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '@/lib/gtag'
const JUICER_COLOR: string = process.env.JUICER_COLOR ?? ''

class MyDocument extends Document {
  render () {
    return (
      <Html lang="ja">
        <Head>
          {/* Juicer */}
          <script src={`//kitchen.juicer.cc/?color=${JUICER_COLOR}=`} async></script>
          {/* Global site tag (gtag.js) - Google Analytics */}
          {GA_TRACKING_ID && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
              <script dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
              `,}}
              />
            </>
          )}
          {
            /* Google Tag Manager */
            <script dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M5KXZ9X');
            `,}} />
        }
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5KXZ9X"
            height="0" width="0" style={{display:'none', visibility: 'hidden', }}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
