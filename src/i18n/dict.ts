export const languages = {
    de: 'Deutsch',
    fr: 'Français',
    en: 'English',
  };

  export const localeOrderForSlugs = {"de":"","fr":"","en":""};
  
  export const defaultLang = 'de';
  export const showDefaultLang = true;
  
  export const dict = {
    nav:{
      en: {
        'index': 'Home',
        'about': 'About',
        'news': 'News',
        'translation': 'change language',
      },
      fr: {
        'index': 'Accueil',
        'about': 'À propos',
        'news': 'Nouvelles',
        'translation': 'langues',
      },
      de: {
        'index': 'Start',
        'about': 'Über uns',
        'news': 'Aktuelles',
        'translation': 'Andere Sprachen',
      },
    },
    phrases:{
      en: {
        'readMore': 'Read more',
      },
      fr: {
        'readMore': 'En savoir plus',
      },
      de: {
        'readMore': [
          'Mehr erfahren',
          'weiterlesen',
        ]
      },
    },
    members: {
      en: {
        'founder': 'founder',
      },
      fr: {
        'founder': 'fondateur',
      },
      de: {
        'founder': 'Gründer',
      },
    },
    translation: {
      en: {
        'missing.header': 'Sorry',
        'missing.text': 'not available in your language, maybe in another?'
      },
      fr: {
        'missing.header': 'aie',
        'missing.text': 'pas disponible en cette langue, ....?'
      },
      de: {
        'missing.header': 'excusi',
        'missing.text': 'gits no nid i dere sprache, villich ire angere?'
      }
    },
    title: {
      en: {
        'start': 'Title - ',
        'news': 'news'
      },
      fr: {
        'start': 'Titre - ',
        'news': 'nouvelles'
      },
      de: {
        'start': 'Titel - ',
        'news': 'neues'
      },
    }
  } as const;
