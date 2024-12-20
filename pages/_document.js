import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Laura & Ariel</title>
        <meta
          name="description"
          content="Vas a encontrar toda la información necesaria para el gran día."
        />
        <meta
          property="og:title"
          content="Nos casamos! Laura & Ariel"
          key="title"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
