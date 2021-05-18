import { GlobalStyle } from "../styles";
import { LanguageProvider } from "../components/LanguageProvider";

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

export default MyApp
