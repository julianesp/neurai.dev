import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">

      <Head>
        <meta charSet='UTF-8' />
        <link rel='manifest' href='/manifest.json' />
        <link rel="apple-touch-icon" href='/icon.png' />
        <meta name='theme-color' content='#fff' />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3332683017412148"
          crossorigin="anonymous">
            
          </script>
      </Head>

      <body>

        <Main />
        <NextScript />

      </body>

    </Html>
  )
}
