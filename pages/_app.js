import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      messages={pageProps.messages}
      locale={router.locale}
      timeZone="America/Argentina/Buenos_Aires"
    >
      <Head>
        <title>Laura y Ariel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
