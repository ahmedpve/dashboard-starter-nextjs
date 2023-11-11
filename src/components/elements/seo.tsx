import Head from "next/head";
import { appConfig } from "../../config";

type SeoProps = {
  title: string;
};

export default function Seo({ title }: SeoProps) {
  return (
    <>
      <Head>
        <title>{`${title} | ${appConfig.title}`}</title>
      </Head>
    </>
  );
}
