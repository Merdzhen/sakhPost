import 'app/styles/index.scss';
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const golos_text = localFont({
  src: [
    {
      path: '../app/fonts/golos-text_regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/fonts/golos-text_medium.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../app/fonts/golos-text_demibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-golos'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${golos_text.variable} main`}>
     <Component {...pageProps} />
    </main>
  );
}
