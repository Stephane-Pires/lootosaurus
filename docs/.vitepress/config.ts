import { defineConfig } from 'vitepress'


const NAVIGATION_LOGIC = [
  {
    text: '📐 Règles',
    items: [
        {text: 'règles', link: '/regles/regles'}]
  },
  {
    text: '📈 Tableaux',
    items: [
      { text: 'Vue d\'ensemble', link: '/tableaux/ensemble' },
      { text: 'Raid Ulduar 25 : 22/01/23', link: '/tableaux/r25-1' },
      { text: 'Raid Ulduar 10 : 23/01/23 ', link: '/tableaux/r10-1' },
      { text: 'Raid Ulduar 25 : 24/01/23 ', link: '/tableaux/r25-2' },
    ]
  },
  {
    text: '👊 The best',
    items: [
      { text: 'Team', link: '/team' },
    ]
  }
]

export default defineConfig({
  title: 'Les loots d\'abords',
  description: 'Un site, pour savoir à qui le tour ?',
  lastUpdated: true,
  base: '/lootosaurus/',

  themeConfig: {
    // Type is `DefaultTheme.Config`s
    outline: 'deep',
    logo: '/logo.png',
    nav: NAVIGATION_LOGIC,
    sidebar: NAVIGATION_LOGIC,
    footer: {
      message: 'Made with ❤️ by Stéphane Pires (a.k.a: Sypsô)',
      copyright: 'Copyright © 2023-present'
    },

    lastUpdatedText: 'Dernière mise à jour'
  }
})