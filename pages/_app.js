import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      messages={pageProps.messages}
      locale={router.locale}
      timeZone="America/Argentina/Buenos_Aires"
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
