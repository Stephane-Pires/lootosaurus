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

const members = [
  {
    avatar: './avatar-placeholder.png',
    name: 'Sypsô',
    title: 'Créateur du site',
    links: [
    ]
  },

    {
    avatar: './avatar-placeholder.png',
    name: 'Lio',
    title: 'Guild master',
    links: [
    ]
  },
]

const catsistant = [

          {
    avatar: './avatar-placeholder.png',
    name: 'Nina',
    title: 'Membre',
    links: [
    ]
  },

      {
    avatar: './avatar-placeholder.png',
    name: 'Aukâin',
    title: 'Membre',
    links: [
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
      <VPTeamMembers :members="catsistant" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
