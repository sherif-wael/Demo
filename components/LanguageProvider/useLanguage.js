import React from "react";
import { LanguageContext } from './LanguageProvider';



function useLangauge(){
    const value = React.useContext(LanguageContext);

    return value; // {locale, locales, setLocale, t}
}

export default useLangauge