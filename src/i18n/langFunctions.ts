



import { dict, defaultLang, showDefaultLang, languages } from './dict';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');

  if (lang in languages) return lang as keyof typeof dict;
  return defaultLang;
}

export function getSlugNoLangFromUrl(url: URL) {
  const [, , slug] = url.pathname.split('/');
  if (slug in dict) return slug as keyof typeof dict;
  return slug;
}

export function useTranslations(lang: keyof typeof dict) {
  return function t( cat: string | number, key: string) {
    const maybeArray = dict[cat][lang][key] || dict[cat][defaultLang][key];
    var justAWord;
    //////////console.log("");
    //////////console.log("cat, key");
    //////////console.log(cat+", "+key);
    //////////console.log("maybeArray");
    //////////console.log(maybeArray);
    if(Array.isArray(maybeArray)){
      justAWord = maybeArray[Math.floor(Math.random() * maybeArray.length)];
    } else {
      justAWord = maybeArray;
    }
    //////////console.log("justAWord");
    //////////console.log(justAWord);
    return justAWord;
  }
}

export function useTranslatedPath(lang: keyof typeof dict) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}

/*export const LOCALES = languages as Record<string, LocaleConfig>;
type LocaleConfig = {
  readonly label: string;
  readonly lang?: string;
  readonly dir?: "ltr" | "rtl";
};*/