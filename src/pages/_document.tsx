import { getCssText } from "@/styles";
import { Html, Head, Main, NextScript } from "next/document";
import igniteFavicon from '../assets/Ignite simbol.png'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      <link rel="shortcut icon" href={igniteFavicon.src} type="image/png" />
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
