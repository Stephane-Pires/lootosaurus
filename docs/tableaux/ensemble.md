<script setup>

const MEMBERS = {
    AUKAIN: {
        10:{
            raid: 3,
        loot: 5,
        },
        25:{
            raid: 9,
        loot: 6,
        },
        
    },
        ARCHMAELLE: {
        10:{
            raid:1,
        loot: 2,
        },
        25:{
            raid: 5,
        loot: 4,
        },
        
    },

            FWALL: {
        10:{
            raid:0,
        loot: 0,
        },
        25:{
            raid: 3,
        loot: 1,
        },
        
    },

        BLADESIN: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
            raid: 2,
        loot: 1,
        },
        
    },
    
    ERINA: {
        10:{
            raid: 1,
        loot: 2,
        },
        25:{
            raid: 7,
        loot: 4,
        },
        
    },
    NINA: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
            raid: 9,
        loot: 7,
        },
        
    },
    ADAWAME: {
        10:{
            raid: 3,
        loot: 7,
        },
        25:{
            raid: 8,
        loot: 2,
        },
        
    },
    LIO: {
        10:{
            raid: 2,
        loot: 5,
        },
        25:{
            raid: 9,
        loot: 6,

        },
        
    },
    CHATOUNETTE: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
            raid: 9,
        loot: 3,
        },
        
    },

        NEWIZ: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
            raid: 6,
        loot: 5,
        },
        
    },
            MYTHIOS: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
            raid: 2,
        loot: 2,
        },
        
    },
    VOLHANIO: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
        raid: 8,
        loot: 7,
        },
        
    },
    CHATCHOUM: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
            raid: 6,
        loot: 6,
        },
        
    },
    
    SYPSO: {
        10:{
            raid: 4,
        loot: 3,
        },
        25:{
            raid: 9,
        loot: 4,
        },
        
    },

    MASSATOMIK: {
        10:{
            raid: 3,
        loot: 6,
        },
        25:{
            raid: 9,
        loot: 6,
        },
    },

        JILUMINER: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
            raid: 4,
        loot: 1,
        },
    },
    NEOZX: {
        10:{
        raid: 0,
        loot: 0,
        },
        25:{
        raid: 6,
        loot: 2,
        }, 
    },
        ZIPETTES: {
        10:{
        raid: 0,
        loot: 0,
        },
        25:{
        raid: 7,
        loot: 3,
        }, 
    },
    AEVINEE: {
        10:{
        raid: 0,
        loot: 0,
        },
        25:{
        raid: 3,
        loot: 1,
        }, 
    },
    GAL: {
        10:{
            raid: 3,
        loot: 4,
        },
        25:{
            raid: 9,
        loot: 9,
        },
        
    },
    NERONEMESIS: {
        10:{
            raid: 3,
        loot: 4,
        },
        25:{
            raid: 7,
        loot: 4,
        },
        
    },
    TIINO: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
            raid: 4,
        loot: 7,
        },
        
    },

        XZHOT: {
        10:{
            raid: 1,
        loot: 0,
        },
        25:{
            raid: 5,
        loot: 2,
        },
        
    },
    AZROKH: {
        10:{
            raid: 3,
        loot: 4,
        },
        25:{
            raid: 7,
        loot: 4,
        },
    },
    SATU: {
        10:{
            raid: 4,
        loot: 3,
        },
        25:{
        raid: 9,
        loot: 5,
        },
        
    },
    TRYNN: {
        10:{
            raid: 4,
        loot: 3,
        },
        25:{
        raid: 8,
        loot: 4,
        },
        
    },
    VASHALLAIT: {
        10:{
            raid: 3,
        loot: 2,
        },
        25:{
            raid: 9,
        loot: 10,
        },
        
    },

            ORENWEL: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
        raid: 7,
        loot: 6,
        },
        
    },
            SKILETTE: {
        10:{
            raid: 0,
        loot: 0,
        },
        25:{
        raid: 7,
        loot: 6,
        },
        
    },
    
}

const calculRatio = (nbLoot, nbRaid) => {

    const RATIO = Number(nbLoot / nbRaid).toFixed(1) 
    return isNaN(RATIO) ? 0 : RATIO
    }
</script>

## Raid 25

### Tableau

| Nom         |                                         Classes                                         |           Nombre de loot           |    Nombre de jour de pr??sences     |                                     Ratio                                     |
| ----------- | :-------------------------------------------------------------------------------------: | :--------------------------------: | :--------------------------------: | :---------------------------------------------------------------------------: |
| Auk??in      |    <img title="chaman" alt="Alt text" src="/classes/shaman.png" width=50 height=50 >    |   {{ MEMBERS.AUKAIN[25].loot }}    |   {{ MEMBERS.AUKAIN[25].raid }}    |      {{ calculRatio(MEMBERS.AUKAIN[25].loot, MEMBERS.AUKAIN[25].raid) }}      |
| Archmaelle  |    <img title="chaman" alt="Alt text" src="/classes/shaman.png" width=50 height=50 >    | {{ MEMBERS.ARCHMAELLE[25].loot }}  | {{ MEMBERS.ARCHMAELLE[25].raid }}  |  {{ calculRatio(MEMBERS.ARCHMAELLE[25].loot, MEMBERS.ARCHMAELLE[25].raid) }}  |
| Fwall       |    <img title="chaman" alt="Alt text" src="/classes/shaman.png" width=50 height=50 >    |    {{ MEMBERS.FWALL[25].loot }}    |    {{ MEMBERS.FWALL[25].raid }}    |       {{ calculRatio(MEMBERS.FWALL[25].loot, MEMBERS.FWALL[25].raid) }}       |
| Bladesin    |    <img title="voleur" alt="Alt text" src="/classes/rogue.png" width=50 height=50 >     |  {{ MEMBERS.BLADESIN[25].loot }}   |  {{ MEMBERS.BLADESIN[25].raid }}   |    {{ calculRatio(MEMBERS.BLADESIN[25].loot, MEMBERS.BLADESIN[25].raid) }}    |
| Erina       |    <img title="voleur" alt="Alt text" src="/classes/rogue.png" width=50 height=50 >     |    {{ MEMBERS.ERINA[25].loot }}    |    {{ MEMBERS.ERINA[25].raid }}    |       {{ calculRatio(MEMBERS.ERINA[25].loot, MEMBERS.ERINA[25].raid) }}       |
| Nina        |    <img title="voleur" alt="Alt text" src="/classes/rogue.png" width=50 height=50 >     |    {{ MEMBERS.NINA[25].loot }}     |    {{ MEMBERS.NINA[25].raid }}     |        {{ calculRatio(MEMBERS.NINA[25].loot, MEMBERS.NINA[25].raid) }}        |
| Adawame     |      <img title="mage" alt="Alt text" src="/classes/mage.png" width=50 height=50 >      |   {{ MEMBERS.ADAWAME[25].loot }}   |   {{ MEMBERS.ADAWAME[25].raid }}   |     {{ calculRatio(MEMBERS.ADAWAME[25].loot, MEMBERS.ADAWAME[25].raid) }}     |
| Lio         |      <img title="mage" alt="Alt text" src="/classes/mage.png" width=50 height=50 >      |     {{ MEMBERS.LIO[25].loot }}     |     {{ MEMBERS.LIO[25].raid }}     |         {{ calculRatio(MEMBERS.LIO[25].loot, MEMBERS.LIO[25].raid) }}         |
| Chatounette |    <img title="druide" alt="Alt text" src="/classes/druide.png" width=50 height=50 >    | {{ MEMBERS.CHATOUNETTE[25].loot }} | {{ MEMBERS.CHATOUNETTE[25].raid }} | {{ calculRatio(MEMBERS.CHATOUNETTE[25].loot, MEMBERS.CHATOUNETTE[25].raid) }} |
| Newiz       |    <img title="druide" alt="Alt text" src="/classes/druide.png" width=50 height=50 >    |    {{ MEMBERS.NEWIZ[25].loot }}    |    {{ MEMBERS.NEWIZ[25].raid }}    |       {{ calculRatio(MEMBERS.NEWIZ[25].loot, MEMBERS.NEWIZ[25].raid) }}       |
| Mythios     |    <img title="druide" alt="Alt text" src="/classes/druide.png" width=50 height=50 >    |   {{ MEMBERS.MYTHIOS[25].loot }}   |   {{ MEMBERS.MYTHIOS[25].raid }}   |     {{ calculRatio(MEMBERS.MYTHIOS[25].loot, MEMBERS.MYTHIOS[25].raid) }}     |
| Volhanio    |    <img title="druide" alt="Alt text" src="/classes/druide.png" width=50 height=50 >    |  {{ MEMBERS.VOLHANIO[25].loot }}   |  {{ MEMBERS.VOLHANIO[25].raid }}   |    {{ calculRatio(MEMBERS.VOLHANIO[25].loot, MEMBERS.VOLHANIO[25].raid) }}    |
| Chatchoum   |    <img title="hunter" alt="Alt text" src="/classes/hunter.png" width=50 height=50 >    |  {{ MEMBERS.CHATCHOUM[25].loot }}  |  {{ MEMBERS.CHATCHOUM[25].raid }}  |   {{ calculRatio(MEMBERS.CHATCHOUM[25].loot, MEMBERS.CHATCHOUM[25].raid) }}   |
| Syps??       |    <img title="hunter" alt="Alt text" src="/classes/hunter.png" width=50 height=50 >    |    {{ MEMBERS.SYPSO[25].loot }}    |    {{ MEMBERS.SYPSO[25].raid }}    |       {{ calculRatio(MEMBERS.SYPSO[25].loot, MEMBERS.SYPSO[25].raid) }}       |
| Massatomik  |    <img title="Pr??tre" alt="Alt text" src="/classes/priest.png" width=50 height=50 >    | {{ MEMBERS.MASSATOMIK[25].loot }}  | {{ MEMBERS.MASSATOMIK[25].raid }}  |  {{ calculRatio(MEMBERS.MASSATOMIK[25].loot, MEMBERS.MASSATOMIK[25].raid) }}  |
| Jiluminer   |    <img title="Pr??tre" alt="Alt text" src="/classes/priest.png" width=50 height=50 >    |  {{ MEMBERS.JILUMINER[25].loot }}  |  {{ MEMBERS.JILUMINER[25].raid }}  |   {{ calculRatio(MEMBERS.JILUMINER[25].loot, MEMBERS.JILUMINER[25].raid) }}   |
| Neozx       |    <img title="Pr??tre" alt="Alt text" src="/classes/priest.png" width=50 height=50 >    |    {{ MEMBERS.NEOZX[25].loot }}    |    {{ MEMBERS.NEOZX[25].raid }}    |       {{ calculRatio(MEMBERS.NEOZX[25].loot, MEMBERS.NEOZX[25].raid) }}       |
| Zipettes    |       <img title="War" alt="Alt text" src="/classes/war.png" width=50 height=50 >       |  {{ MEMBERS.ZIPETTES[25].loot }}   |  {{ MEMBERS.ZIPETTES[25].raid }}   |    {{ calculRatio(MEMBERS.ZIPETTES[25].loot, MEMBERS.ZIPETTES[25].raid) }}    |
| Aevinee     |       <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 > ??       |   {{ MEMBERS.AEVINEE[25].loot }}   |   {{ MEMBERS.AEVINEE[25].raid }}   |     {{ calculRatio(MEMBERS.AEVINEE[25].loot, MEMBERS.AEVINEE[25].raid) }}     |
| Gal         |       <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 > ??       |     {{ MEMBERS.GAL[25].loot }}     |     {{ MEMBERS.GAL[25].raid }}     |         {{ calculRatio(MEMBERS.GAL[25].loot, MEMBERS.GAL[25].raid) }}         |
| Neronemesis |        <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 >        | {{ MEMBERS.NERONEMESIS[25].loot }} | {{ MEMBERS.NERONEMESIS[25].raid }} | {{ calculRatio(MEMBERS.NERONEMESIS[25].loot, MEMBERS.NERONEMESIS[25].raid) }} |
| Tiino       |        <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 >        |    {{ MEMBERS.TIINO[25].loot }}    |    {{ MEMBERS.TIINO[25].raid }}    |       {{ calculRatio(MEMBERS.TIINO[25].loot, MEMBERS.TIINO[25].raid) }}       |
| Xzhot       |        <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 >        |    {{ MEMBERS.XZHOT[25].loot }}    |    {{ MEMBERS.XZHOT[25].raid }}    |       {{ calculRatio(MEMBERS.XZHOT[25].loot, MEMBERS.XZHOT[25].raid) }}       |
| Azrokh      |   <img title="Paladin" alt="Alt text" src="/classes/paladin.png" width=50 height=50 >   |   {{ MEMBERS.AZROKH[25].loot }}    |   {{ MEMBERS.AZROKH[25].raid }}    |      {{ calculRatio(MEMBERS.AZROKH[25].loot, MEMBERS.AZROKH[25].raid) }}      |
| Satu        |   <img title="Paladin" alt="Alt text" src="/classes/paladin.png" width=50 height=50 >   |    {{ MEMBERS.SATU[25].loot }}     |    {{ MEMBERS.SATU[25].raid }}     |        {{ calculRatio(MEMBERS.SATU[25].loot, MEMBERS.SATU[25].raid) }}        |
| Trynn       |   <img title="Paladin" alt="Alt text" src="/classes/paladin.png" width=50 height=50 >   |    {{ MEMBERS.TRYNN[25].loot }}    |    {{ MEMBERS.TRYNN[25].raid }}    |       {{ calculRatio(MEMBERS.TRYNN[25].loot, MEMBERS.TRYNN[25].raid) }}       |
| Vash??llait  |   <img title="Paladin" alt="Alt text" src="/classes/paladin.png" width=50 height=50 >   | {{ MEMBERS.VASHALLAIT[25].loot }}  | {{ MEMBERS.VASHALLAIT[25].raid }}  |  {{ calculRatio(MEMBERS.VASHALLAIT[25].loot, MEMBERS.VASHALLAIT[25].raid) }}  |
| Orenwel     | <img title="demoniste" alt="Alt text" src="/classes/demoniste.png" width=50 height=50 > |   {{ MEMBERS.ORENWEL[25].loot }}   |   {{ MEMBERS.ORENWEL[25].raid }}   |     {{ calculRatio(MEMBERS.ORENWEL[25].loot, MEMBERS.ORENWEL[25].raid) }}     |
| Skilette    | <img title="demoniste" alt="Alt text" src="/classes/demoniste.png" width=50 height=50 > |  {{ MEMBERS.SKILETTE[25].loot }}   |  {{ MEMBERS.SKILETTE[25].raid }}   |    {{ calculRatio(MEMBERS.SKILETTE[25].loot, MEMBERS.SKILETTE[25].raid) }}    |

## Raid 10

### Tableau

| Nom         |                                         Classes                                         |           Nombre de loot           |    Nombre de jour de pr??sences     |                                     Ratio                                     |
| ----------- | :-------------------------------------------------------------------------------------: | :--------------------------------: | :--------------------------------: | :---------------------------------------------------------------------------: |
| Auk??in      |    <img title="chaman" alt="Alt text" src="/classes/shaman.png" width=50 height=50 >    |   {{ MEMBERS.AUKAIN[10].loot }}    |   {{ MEMBERS.AUKAIN[10].raid }}    |      {{ calculRatio(MEMBERS.AUKAIN[10].loot, MEMBERS.AUKAIN[10].raid) }}      |
| Archmaelle  |    <img title="chaman" alt="Alt text" src="/classes/shaman.png" width=50 height=50 >    | {{ MEMBERS.ARCHMAELLE[10].loot }}  | {{ MEMBERS.ARCHMAELLE[10].raid }}  |  {{ calculRatio(MEMBERS.ARCHMAELLE[10].loot, MEMBERS.ARCHMAELLE[10].raid) }}  |
| Fwall       |    <img title="chaman" alt="Alt text" src="/classes/shaman.png" width=50 height=50 >    |    {{ MEMBERS.FWALL[10].loot }}    |    {{ MEMBERS.FWALL[10].raid }}    |       {{ calculRatio(MEMBERS.FWALL[10].loot, MEMBERS.FWALL[10].raid) }}       |
| Bladesin    |    <img title="voleur" alt="Alt text" src="/classes/rogue.png" width=50 height=50 >     |  {{ MEMBERS.BLADESIN[10].loot }}   |  {{ MEMBERS.BLADESIN[10].raid }}   |    {{ calculRatio(MEMBERS.BLADESIN[10].loot, MEMBERS.BLADESIN[10].raid) }}    |
| Erina       |    <img title="voleur" alt="Alt text" src="/classes/rogue.png" width=50 height=50 >     |    {{ MEMBERS.ERINA[10].loot }}    |    {{ MEMBERS.ERINA[10].raid }}    |       {{ calculRatio(MEMBERS.ERINA[10].loot, MEMBERS.ERINA[10].raid) }}       |
| Nina        |    <img title="voleur" alt="Alt text" src="/classes/rogue.png" width=50 height=50 >     |    {{ MEMBERS.NINA[10].loot }}     |    {{ MEMBERS.NINA[10].raid }}     |        {{ calculRatio(MEMBERS.NINA[10].loot, MEMBERS.NINA[10].raid) }}        |
| Adawame     |      <img title="mage" alt="Alt text" src="/classes/mage.png" width=50 height=50 >      |   {{ MEMBERS.ADAWAME[10].loot }}   |   {{ MEMBERS.ADAWAME[10].raid }}   |     {{ calculRatio(MEMBERS.ADAWAME[10].loot, MEMBERS.ADAWAME[10].raid) }}     |
| Lio         |      <img title="mage" alt="Alt text" src="/classes/mage.png" width=50 height=50 >      |     {{ MEMBERS.LIO[10].loot }}     |     {{ MEMBERS.LIO[10].raid }}     |         {{ calculRatio(MEMBERS.LIO[10].loot, MEMBERS.LIO[10].raid) }}         |
| Chatounette |    <img title="druide" alt="Alt text" src="/classes/druide.png" width=50 height=50 >    | {{ MEMBERS.CHATOUNETTE[10].loot }} | {{ MEMBERS.CHATOUNETTE[10].raid }} | {{ calculRatio(MEMBERS.CHATOUNETTE[10].loot, MEMBERS.CHATOUNETTE[10].raid) }} |
| Newiz       |    <img title="druide" alt="Alt text" src="/classes/druide.png" width=50 height=50 >    |    {{ MEMBERS.NEWIZ[10].loot }}    |    {{ MEMBERS.NEWIZ[10].raid }}    |       {{ calculRatio(MEMBERS.NEWIZ[10].loot, MEMBERS.NEWIZ[10].raid) }}       |
| Mythios     |    <img title="druide" alt="Alt text" src="/classes/druide.png" width=50 height=50 >    |   {{ MEMBERS.MYTHIOS[10].loot }}   |   {{ MEMBERS.MYTHIOS[10].raid }}   |     {{ calculRatio(MEMBERS.MYTHIOS[10].loot, MEMBERS.MYTHIOS[10].raid) }}     |
| Volhanio    |    <img title="druide" alt="Alt text" src="/classes/druide.png" width=50 height=50 >    |  {{ MEMBERS.VOLHANIO[10].loot }}   |  {{ MEMBERS.VOLHANIO[10].raid }}   |    {{ calculRatio(MEMBERS.VOLHANIO[10].loot, MEMBERS.VOLHANIO[10].raid) }}    |
| Chatchoum   |    <img title="hunter" alt="Alt text" src="/classes/hunter.png" width=50 height=50 >    |  {{ MEMBERS.CHATCHOUM[10].loot }}  |  {{ MEMBERS.CHATCHOUM[10].raid }}  |   {{ calculRatio(MEMBERS.CHATCHOUM[10].loot, MEMBERS.CHATCHOUM[10].raid) }}   |
| Syps??       |    <img title="hunter" alt="Alt text" src="/classes/hunter.png" width=50 height=50 >    |    {{ MEMBERS.SYPSO[10].loot }}    |    {{ MEMBERS.SYPSO[10].raid }}    |       {{ calculRatio(MEMBERS.SYPSO[10].loot, MEMBERS.SYPSO[10].raid) }}       |
| Massatomik  |    <img title="Pr??tre" alt="Alt text" src="/classes/priest.png" width=50 height=50 >    | {{ MEMBERS.MASSATOMIK[10].loot }}  | {{ MEMBERS.MASSATOMIK[10].raid }}  |  {{ calculRatio(MEMBERS.MASSATOMIK[10].loot, MEMBERS.MASSATOMIK[10].raid) }}  |
| Jiluminer   |    <img title="Pr??tre" alt="Alt text" src="/classes/priest.png" width=50 height=50 >    |  {{ MEMBERS.JILUMINER[10].loot }}  |  {{ MEMBERS.JILUMINER[10].raid }}  |   {{ calculRatio(MEMBERS.JILUMINER[10].loot, MEMBERS.JILUMINER[10].raid) }}   |
| Neozx       |    <img title="Pr??tre" alt="Alt text" src="/classes/priest.png" width=50 height=50 >    |    {{ MEMBERS.NEOZX[10].loot }}    |    {{ MEMBERS.NEOZX[10].raid }}    |       {{ calculRatio(MEMBERS.NEOZX[10].loot, MEMBERS.NEOZX[10].raid) }}       |
| Zipettes    |       <img title="War" alt="Alt text" src="/classes/war.png" width=50 height=50 >       |  {{ MEMBERS.ZIPETTES[10].loot }}   |  {{ MEMBERS.ZIPETTES[10].raid }}   |    {{ calculRatio(MEMBERS.ZIPETTES[10].loot, MEMBERS.ZIPETTES[10].raid) }}    |
| Aevinee     |       <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 > ??       |   {{ MEMBERS.AEVINEE[10].loot }}   |   {{ MEMBERS.AEVINEE[10].raid }}   |     {{ calculRatio(MEMBERS.AEVINEE[10].loot, MEMBERS.AEVINEE[10].raid) }}     |
| Gal         |       <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 > ??       |     {{ MEMBERS.GAL[10].loot }}     |     {{ MEMBERS.GAL[10].raid }}     |         {{ calculRatio(MEMBERS.GAL[10].loot, MEMBERS.GAL[10].raid) }}         |
| Neronemesis |        <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 >        | {{ MEMBERS.NERONEMESIS[10].loot }} | {{ MEMBERS.NERONEMESIS[10].raid }} | {{ calculRatio(MEMBERS.NERONEMESIS[10].loot, MEMBERS.NERONEMESIS[10].raid) }} |
| Tiino       |        <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 >        |    {{ MEMBERS.TIINO[10].loot }}    |    {{ MEMBERS.TIINO[10].raid }}    |       {{ calculRatio(MEMBERS.TIINO[10].loot, MEMBERS.TIINO[10].raid) }}       |
| Xzhot       |        <img title="DK" alt="Alt text" src="/classes/dk.png" width=50 height=50 >        |    {{ MEMBERS.XZHOT[10].loot }}    |    {{ MEMBERS.XZHOT[10].raid }}    |       {{ calculRatio(MEMBERS.XZHOT[10].loot, MEMBERS.XZHOT[10].raid) }}       |
| Azrokh      |   <img title="Paladin" alt="Alt text" src="/classes/paladin.png" width=50 height=50 >   |   {{ MEMBERS.AZROKH[10].loot }}    |   {{ MEMBERS.AZROKH[10].raid }}    |      {{ calculRatio(MEMBERS.AZROKH[10].loot, MEMBERS.AZROKH[10].raid) }}      |
| Satu        |   <img title="Paladin" alt="Alt text" src="/classes/paladin.png" width=50 height=50 >   |    {{ MEMBERS.SATU[10].loot }}     |    {{ MEMBERS.SATU[10].raid }}     |        {{ calculRatio(MEMBERS.SATU[10].loot, MEMBERS.SATU[10].raid) }}        |
| Trynn       |   <img title="Paladin" alt="Alt text" src="/classes/paladin.png" width=50 height=50 >   |    {{ MEMBERS.TRYNN[10].loot }}    |    {{ MEMBERS.TRYNN[10].raid }}    |       {{ calculRatio(MEMBERS.TRYNN[10].loot, MEMBERS.TRYNN[10].raid) }}       |
| Vash??llait  |   <img title="Paladin" alt="Alt text" src="/classes/paladin.png" width=50 height=50 >   | {{ MEMBERS.VASHALLAIT[10].loot }}  | {{ MEMBERS.VASHALLAIT[10].raid }}  |  {{ calculRatio(MEMBERS.VASHALLAIT[10].loot, MEMBERS.VASHALLAIT[10].raid) }}  |
| Orenwel     | <img title="demoniste" alt="Alt text" src="/classes/demoniste.png" width=50 height=50 > |   {{ MEMBERS.ORENWEL[10].loot }}   |   {{ MEMBERS.ORENWEL[10].raid }}   |     {{ calculRatio(MEMBERS.ORENWEL[10].loot, MEMBERS.ORENWEL[10].raid) }}     |
| Skilette    | <img title="demoniste" alt="Alt text" src="/classes/demoniste.png" width=50 height=50 > |  {{ MEMBERS.SKILETTE[10].loot }}   |  {{ MEMBERS.SKILETTE[10].raid }}   |    {{ calculRatio(MEMBERS.SKILETTE[10].loot, MEMBERS.SKILETTE[10].raid) }}    |
