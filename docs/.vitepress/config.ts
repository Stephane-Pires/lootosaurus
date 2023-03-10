import { defineConfig } from 'vitepress'

const NAVIGATION_LOGIC = [
    {
        text: '📐 Règles',
        items: [{ text: 'Loot', link: '/regles/loot' }],
    },
    {
        text: '📈 Tableaux',
        items: [
            { text: "Vue d'ensemble", link: '/tableaux/ensemble' },
            {
                text: 'Raid 10',
                items: [
                    {
                        text: 'Raid Ulduar 10 : 23/01/23 ',
                        link: '/tableaux/r10-1',
                    },
                    {
                        text: 'Raid Ulduar 10 : 29/01/23 ',
                        link: '/tableaux/r10-2',
                    },
                    {
                        text: 'Raid Ulduar 10 : 5/02/23 ',
                        link: '/tableaux/r10-3',
                    },
                    {
                        text: 'Raid Ulduar 10 : 12/02/23 ',
                        link: '/tableaux/r10-4',
                    },
                ],
            },
            {
                text: 'Raid 25',
                items: [
                    {
                        text: 'Raid Ulduar 25 : 22/01/23',
                        link: '/tableaux/r25-1',
                    },
                    {
                        text: 'Raid Ulduar 25 : 24/01/23 ',
                        link: '/tableaux/r25-2',
                    },
                    {
                        text: 'Raid Ulduar 25 : 26/01/23 ',
                        link: '/tableaux/r25-3',
                    },
                    {
                        text: 'Raid Ulduar 25 : 31/01/23 ',
                        link: '/tableaux/r25-4',
                    },
                    {
                        text: 'Raid Ulduar 25 : 02/02/23 ',
                        link: '/tableaux/r25-5',
                    },
                    {
                        text: 'Raid Ulduar 25 : 07/02/23 ',
                        link: '/tableaux/r25-6',
                    },
                    {
                        text: 'Raid Ulduar 25 : 09/02/23 ',
                        link: '/tableaux/r25-7',
                    },
                    {
                        text: 'Raid Ulduar 25 : 13/02/23 ',
                        link: '/tableaux/r25-8',
                    },
                    {
                        text: 'Raid Ulduar 25 : 16/02/23 ',
                        link: '/tableaux/r25-9',
                    },
                ],
            },
        ],
    },
    {
        text: '👊 The best',
        items: [{ text: 'Team', link: '/team' }],
    },
]

export default defineConfig({
    title: "Les loots d'abords",
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
            copyright: 'Copyright © 2023-present',
        },
        socialLinks: [
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px">    <path d="M 16 4 C 13.633 4 11.351906 4.69 9.3789062 6 L 6 6 L 6 9.3789062 C 4.69 11.351906 4 13.633 4 16 C 4 18.367 4.69 20.648094 6 22.621094 L 6 26 L 9.3789062 26 C 11.351906 27.31 13.633 28 16 28 C 18.367 28 20.648094 27.31 22.621094 26 L 26 26 L 26 22.621094 C 27.31 20.648094 28 18.367 28 16 C 28 13.633 27.31 11.351906 26 9.3789062 L 26 6 L 22.621094 6 C 20.648094 4.69 18.367 4 16 4 z M 16 6 C 18.061 6 20.045281 6.6293594 21.738281 7.8183594 L 21.996094 8 L 24 8 L 24 10.003906 L 24.181641 10.261719 C 25.370641 11.955719 26 13.94 26 16 C 26 18.061 25.370641 20.045281 24.181641 21.738281 L 24 21.996094 L 24 24 L 21.996094 24 L 21.738281 24.181641 C 20.045281 25.370641 18.061 26 16 26 C 13.94 26 11.955719 25.370641 10.261719 24.181641 L 10.003906 24 L 8 24 L 8 21.996094 L 7.8183594 21.738281 C 6.6293594 20.045281 6 18.061 6 16 C 6 13.94 6.6293594 11.955719 7.8183594 10.261719 L 8 10.003906 L 8 8 L 10.003906 8 L 10.261719 7.8183594 C 11.955719 6.6293594 13.94 6 16 6 z M 9 11 L 9.7949219 11.794922 C 9.9299219 11.928922 10.0215 12.098203 10.0625 12.283203 L 11.880859 20.464844 C 11.954859 20.798844 11.853328 21.146672 11.611328 21.388672 L 11 22 L 15 22 L 14.537109 21.072266 L 16 17 L 17.462891 21.072266 L 17 22 L 21 22 L 20.388672 21.388672 C 20.146672 21.146672 20.045141 20.798844 20.119141 20.464844 L 21.9375 12.283203 C 21.9785 12.097203 22.071078 11.928922 22.205078 11.794922 L 23 11 L 19 11 L 19.335938 11.669922 C 19.442937 11.883922 19.468156 12.127375 19.410156 12.359375 L 18.283203 16.867188 L 16 11 L 13.716797 16.867188 L 12.589844 12.359375 C 12.531844 12.127375 12.559016 11.883922 12.666016 11.669922 L 13 11 L 9 11 z"/></svg>',
                },
                link: 'https://classic.warcraftlogs.com/guild/eu/sulfuron/les%20copains%20dabord',
            },
            {
                icon: 'discord',
                link: 'https://discord.gg/rjAvhayg',
            },
        ],

        lastUpdatedText: 'Dernière mise à jour',
    },
})
