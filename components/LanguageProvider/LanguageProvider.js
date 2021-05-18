import React from "react";
import { useRouter } from "next/router";
import langs from "../../locales";


export const LanguageContext = React.createContext();


function LanguageProvider({children}){
    const router = useRouter();
    const {locale, locales} = router;
    const lng = langs[locale];

    const t = React.useCallback(
        (title) => {
            return lng[title].trim();
        }, 
        [locale]
    );

    const setLocale = React.useCallback(
        (l) => router.push(router.pathname, router.pathname, {locale: l}),
        [router.pathname]
    );

    const value = {t, locale, locales, setLocale};

    return (
        <LanguageContext.Provider value={value}>
            <div style={{direction: lng.direction}}>
                {children}
            </div>
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;