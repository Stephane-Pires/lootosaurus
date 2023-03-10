---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
} from 'vitepress/theme'

 const WOW_SVG_STRING = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" width="32px" height="32px">    <path d="M 16 4 C 13.633 4 11.351906 4.69 9.3789062 6 L 6 6 L 6 9.3789062 C 4.69 11.351906 4 13.633 4 16 C 4 18.367 4.69 20.648094 6 22.621094 L 6 26 L 9.3789062 26 C 11.351906 27.31 13.633 28 16 28 C 18.367 28 20.648094 27.31 22.621094 26 L 26 26 L 26 22.621094 C 27.31 20.648094 28 18.367 28 16 C 28 13.633 27.31 11.351906 26 9.3789062 L 26 6 L 22.621094 6 C 20.648094 4.69 18.367 4 16 4 z M 16 6 C 18.061 6 20.045281 6.6293594 21.738281 7.8183594 L 21.996094 8 L 24 8 L 24 10.003906 L 24.181641 10.261719 C 25.370641 11.955719 26 13.94 26 16 C 26 18.061 25.370641 20.045281 24.181641 21.738281 L 24 21.996094 L 24 24 L 21.996094 24 L 21.738281 24.181641 C 20.045281 25.370641 18.061 26 16 26 C 13.94 26 11.955719 25.370641 10.261719 24.181641 L 10.003906 24 L 8 24 L 8 21.996094 L 7.8183594 21.738281 C 6.6293594 20.045281 6 18.061 6 16 C 6 13.94 6.6293594 11.955719 7.8183594 10.261719 L 8 10.003906 L 8 8 L 10.003906 8 L 10.261719 7.8183594 C 11.955719 6.6293594 13.94 6 16 6 z M 9 11 L 9.7949219 11.794922 C 9.9299219 11.928922 10.0215 12.098203 10.0625 12.283203 L 11.880859 20.464844 C 11.954859 20.798844 11.853328 21.146672 11.611328 21.388672 L 11 22 L 15 22 L 14.537109 21.072266 L 16 17 L 17.462891 21.072266 L 17 22 L 21 22 L 20.388672 21.388672 C 20.146672 21.146672 20.045141 20.798844 20.119141 20.464844 L 21.9375 12.283203 C 21.9785 12.097203 22.071078 11.928922 22.205078 11.794922 L 23 11 L 19 11 L 19.335938 11.669922 C 19.442937 11.883922 19.468156 12.127375 19.410156 12.359375 L 18.283203 16.867188 L 16 11 L 13.716797 16.867188 L 12.589844 12.359375 C 12.531844 12.127375 12.559016 11.883922 12.666016 11.669922 L 13 11 L 9 11 z"/></svg>'

const members = [
  {
    avatar: './avatar/sypso.png',
    name: 'Sypsô',
    title: 'Créateur du site',
    links: [ {
icon: {
    svg: WOW_SVG_STRING
  },
  link: 'https://classic.warcraftlogs.com/character/eu/sulfuron/syps%c3%b4',
    }
    ]
  },

    {
    avatar: './avatar/lio.JPG',
    name: 'Lio',
    title: 'Guild master',
    links: [ {
icon: {
    svg: WOW_SVG_STRING
  },
  link: 'https://classic.warcraftlogs.com/character/EU/Sulfuron/L%C3%AF%C3%B8',
    }
    ]
  },

      {
    avatar: './avatar-placeholder.png',
    name: 'Arenwell',
    title: 'Officier',
    links: [ {
icon: {
    svg: WOW_SVG_STRING
  },
  link: 'https://classic.warcraftlogs.com/character/eu/sulfuron/arenwel',
    }
    ]
  },

        {
    avatar: './avatar/vashallait.PNG',
    name: 'Vachallait',
    title: 'Officier',
    links: [ {
icon: {
    svg: WOW_SVG_STRING
  },
  link: 'https://classic.warcraftlogs.com/character/EU/Sulfuron/Vash%C3%A2llait',
    }
    ]
  },
]

const Membres = [

          {
    avatar: './avatar-placeholder.png',
    name: 'Nina',
    title: 'Membre',
    links: [ {
icon: {
    svg: WOW_SVG_STRING
  },
  link: 'https://classic.warcraftlogs.com/character/eu/sulfuron/n%c3%aen%c3%a2',
    }
    ]
  },

      {
    avatar: './avatar/aukain.png',
    name: 'Aukain',
    title: 'Membre',
    links: [ {
icon: {
    svg: WOW_SVG_STRING
  },
  link: 'https://classic.warcraftlogs.com/character/EU/Sulfuron/Aukain',
    }
    ]
  },

        {
    avatar: './avatar/cochon.png',
    name: 'cochonhalouf',
    title: 'Membre',
    links: [ {
icon: {
    svg: WOW_SVG_STRING
  },
  link: 'https://classic.warcraftlogs.com/character/eu/sulfuron/cochonhalouf',
    }
    ]
  },


]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      La dream team
    </template>
    <template #lead>
      Membres de la guildes, familles, cousins, oncles, etc...
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
  <VPTeamPageSection>
    <template #title>Membres</template>
    <template #lead>Listes des personnes sans qui on ne raiderait pas</template>
    <template #members>
      <VPTeamMembers :members="Membres" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
