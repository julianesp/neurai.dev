import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet='UTF-8'/>
        <link rel='manifest' href='/manifest.json'/>
        <link rel="apple-touch-icon" href='/icon.png'/>
        <meta name='theme-color' content='#fff'/>

        {/* <Script id='script' async src="https://www.googletagmanager.com/gtag/js?id=G-7M5FNVD515"></Script>
        <Script id='script' dangerouslySetInnerHTML={{
          __html: ` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-7M5FNVD515');`
        }}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}
