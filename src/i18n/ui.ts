export const languages = {
    de: 'Deutsch',
    fr: 'Français',
    en: 'English',
  };
  
  export const defaultLang = 'de';
  export const showDefaultLang = true;
  
  export const ui = {
    en: {
      'nav.index': 'Home',
      'nav.about': 'About',
      'nav.news': 'News',
    },
    fr: {
      'nav.index': 'Accueil',
      'nav.about': 'à propos',
      'nav.news': 'nouvelles',
    },
    de: {
      'nav.index': 'Start',
      'nav.about': 'über uns',
      'nav.news': 'Neuigkeiten',
    },
    
  } as const;

  export const mem = {
    en: {
      'mem.founder': 'founder',
    },
    fr: {
      'mem.founder': 'fondateur',
    },
    de: {
      'mem.founder': 'Gründer',
    },
  } as const;