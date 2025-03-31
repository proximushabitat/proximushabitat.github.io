



import { dict, defaultLang, showDefaultLang, languages } from './dict';
import defineConfig from  'astro.config.mjs';
import { getCollection, getEntry, render } from 'astro:content';

export function getLangFromUrl(url: URL) {
  //////////////////console.log.log("url");
  //////////////////console.log.log(url);
  const [, lang] = url.pathname.split('/');
  //////////////////console.log.log("lang");
  //////////////////console.log.log(lang);

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
    ////////////////////////////////console.log.log("");
    ////////////////////////////////console.log.log("cat, key");
    ////////////////////////////////console.log.log(cat+", "+key);
    ////////////////////////////////console.log.log("maybeArray");
    ////////////////////////////////console.log.log(maybeArray);
    if(Array.isArray(maybeArray)){
      justAWord = maybeArray[Math.floor(Math.random() * maybeArray.length)];
    } else {
      justAWord = maybeArray;
    }
    ////////////////////////////////console.log.log("justAWord");
    ////////////////////////////////console.log.log(justAWord);
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

export async function translatePath(url: object){
  //get locales from config file
  const locales = defineConfig.i18n.locales;

  //get parts of path
  ////////////console.log.log(url.pathname);
  const pathSplitRaw = url.pathname.split('/');
  const pathSplit = pathSplitRaw.filter(path => path !== "");


  const locale = pathSplit[0];
  const sectionRaw = pathSplit[1];
  const contentRaw = pathSplit[2];

  //////////////console.log.log("pathSplit");
  //////////////console.log.log(pathSplit);
  //////////////console.log.log("locale: "+locale);
  ////////////console.log.log("sectionRaw: "+sectionRaw);
  ////////////console.log.log("contentRaw: "+contentRaw);


  //get the section
  const sections = await getCollection('sections');
  const sectionObject = sections.filter(section => {
    ////////////console.log.log("section");
    ////////////console.log.log(section);
    return section.id === sectionRaw;
  })[0];

  ////////////console.log.log("sectionObject");
  ////////////console.log.log(sectionObject);

  var sectionName = "";
  var sectionAllLangs = [];
  var collection = [];
  var contentObject = [];
  var contentName = "";
  var contentAllLangs = [];

  var paths = [];
  //section name is in the filePath
  if(pathSplit.length > 1){
    sectionName = sectionObject.filePath.split('/')[sectionObject.filePath.split('/').length-1].split('.')[0];
    sectionAllLangs = sections.filter(section => {
      return section.filePath.split('/')[section.filePath.split('/').length-1].split('.')[0] === sectionName;
    });
  }

  if(pathSplit.length > 2){
    ////////////console.log.log('doing 2+')
    //get the collection by name taken from section
    collection = await getCollection(sectionName);
    contentObject = collection.filter(content => {
      return content.id === contentRaw;
    })[0];
    ////////////console.log.log("contentObject");
    ////////////console.log.log(contentObject);
    if(contentObject){
      contentName = contentObject.filePath.split('/')[contentObject.filePath.split('/').length-1].split('.')[0];
      contentAllLangs = collection.filter(content => {
        return content.filePath.split('/')[content.filePath.split('/').length-1].split('.')[0] === contentName;
      });
    }
  }
  
  for(let i = 0; i < locales.length; i++){
    ////////////////console.log.log(" ");
    ////////////////console.log.log("now doing: "+locales[i]);
    var path = "";
    path += locales[i];

    if(pathSplit.length > 1){
      const sectionThisLang = sectionAllLangs.filter(section => {
        return section.filePath.split('/')[section.filePath.split('/').length-2] === locales[i];
      })[0];
      if(sectionThisLang){
        path += "/";
        path += sectionThisLang.data.slug;
      }else{
        path = undefined;
      }
    }

    if(pathSplit.length > 2){
      const contentThisLang = contentAllLangs.filter(content => {
        return content.filePath.split('/')[content.filePath.split('/').length-2] === locales[i];
      })[0];
      if(contentThisLang){
        path += "/";
        path += contentThisLang.data.slug;
      }else{
        path += "/";
        path += contentRaw;
      }
    }
    ////////////////console.log.log("path: "+path);
    path += "/";
    const thisLocale = locales[i];
    paths[i] = { locale: thisLocale, path: path };
  }
  //////////////console.log.log("paths");
  //////////////console.log.log(paths);
  return paths;
}
