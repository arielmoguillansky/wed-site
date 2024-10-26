import initTranslations from "../i18n";
import FormComponent from "./form";

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <main className="relative flex items-center justify-center w-screen h-screen pb-12">
      <FormComponent />
    </main>
  );
}
