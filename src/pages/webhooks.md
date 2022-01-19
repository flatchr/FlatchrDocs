---
title: Webhooks
description: Tout savoir sur les webhooks Flatchr
---

# Webhooks

Flatchr dispose de plusieurs webhooks pouvant être configurés **gratuitement** afin de communiquer avec des applications tierces lors du déclenchement de certains évènements.

## Qu'est ce qu'un Webhook ? 

Pour faire simple, les webhooks *(ou rappel web / HTTP callbacks)* permettent de déclencher une action suite à un événement. Ils sont généralement utilisés pour faire communiquer des systèmes.  
C’est la façon la plus simple de recevoir une alerte lorsque quelque chose se produit dans un autre système.  

Flatchr vous permet de paramétrer des webhooks sortant permettant de prévenir une autre application qu'une action à eu lien dans l'ATS.


:::info Exemple

Lorsqu'un candidat est placé dans la colonne recruté dans Flatchr vous souhaitez que ce candidat soit automatiquement créer dans votre SIRH ?  
**C'est possible grâce à un Webhook ! **

:::

<br/>

## Comment activer les Webhooks dans l'interface Flatchr ? 

Pour que l'application Webhook soit disponible dans la partie Marketplace, rapprochez vous de votre Customer Success Manager ou de [notre support](mailto:support@flatchr.io).

<br/>

## Comment paramétrer les Webhooks ? 

Pour paramétrer un Webhook, rendez vous dans l'onglet [`Administration > Marketplace`](http://app.flatchr.io/#/board/settings/api) puis cliquer sur l'application **Webhooks**.  


Il vous sera alors demandé de paramétrer certains éléments : 
- l'**URL** vers laquelle les données seront envoyées 
- l'**évènement** qui déclenchera l'envoi des données
- l'**offre** concernée et la **colonne** concernée pourront vous être demandées selon l'évènement sélectionné


<br/>

## Les différents évènements paramétrables

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Retrouvez ci-dessous tout les évènements pour lesquels un Webhook est paramétrable : 

<Tabs>
<TabItem value="Candidats" label="Candidats" default>
<details>
<summary>Nouveau candidat</summary>

Un Webhook peut être créé pour envoyer une requête lorsqu'un nouveau candidat est créé.

  <br/>

|Name|Type|Description|
|---|---|---|
data|[data](/docs/Schemas/data_new_applicant)|Objet contenant les données|
event|string|Evènement ayant déclenché l'envoi (ici : 'new_applicant')|
company_id|integer|Identifiant en clair de l'entreprise|

<details>
<summary>Exemple</summary>

```json
{
  data: {
    applicant: {
      candidate_id: 1648,
      vacancy_id: '0LEZBvp5WKnMoVmg',
      comment: '',
      column_id: 'a4JL2lpEQKpwBXKe',
      updated_at: 2022-01-13T15:21:22.164Z,
      created_at: 2022-01-13T15:21:22.164Z,
      id: 'G6KzqPkNZ0n31m0l',
      score: 0,
      status: 1,
      comments: null,
      urls: null,
      external_id: null,
      view: false,
      anonym: false,
      duplicate: null,
      reason_id: null,
      column: [Object]
    },
    candidate: {
      firstname: 'Pauline',
      lastname: 'Duboneau',
      email: 'duboneau.p@mail.com',
      urls: [Object],
      phone: '+33654342384',
      updated_at: 2022-01-14T13:55:31.919Z,
      created_at: 2022-01-14T13:55:31.919Z,
      id: 1648,
      status: 1,
      external_id: null,
      summary: null,
      contact_information: null,
      comments: null,
      user_id: null,
      consent: true
    },
    vacancy: {
      id: 1575,
      company_id: 'Vw67MkgKj2dJ1203',
      title: 'Chirurgien',
      description: 'Créé en 1974 au sein de l’AP-HM, le Centre Hospitalier de la Timone est le plus important de la région PACA. Il est considéré par son activité, son équipement de pointe et ses moyens humains comme le troisième hôpital européen.',
      experience: 1,
      salary: '0',
      status: 1,
      contract_type_id: 1,
      activity_id: 35,
      external_id: null,
      created_by: 'lVq5r6pYLD9PmMvP',
      created_at: 2021-10-11T12:29:16.187Z,
      updated_at: 2022-01-13T14:49:27.828Z,
      mission: '<p>Gerer les differentes intervetions pour les patients</p>',
      profile: "<p>Identifier la demande du patient et rechercher les informations complémentaires dans le dossier médical<br>Définir les orientations stratégiques d'une structure<br>Recenser les symptômes, les dysfonctionnements, cerner l'environnement de vie du patient et procéder à l'examen clinique<br>Déterminer les besoins thérapeutiques et réaliser les soins médicaux<br>Réaliser la prescription médicale, expliquer les modalités de traitement au patient et le conseiller sur l'hygiène de vie<br>Repérer les situations à risques (maltraitance, addiction, ...) et orienter le patient vers d'autres professionnels ou informer les services concernés (sociaux, judiciaires, ...)<br>Compléter les documents médico-administratifs (feuille de soins, déclaration de grossesse)<br>Actualiser le dossier médical du patient<br>Représenter une structure lors d'évènements (salons professionnels, ...)<br>Actualiser la documentation professionnelle et réglementaire<br>Participer à des groupes de travail</p>",
      channel_id: 10,
      metier_id: 122,
      daxtra_index: true,
      mensuality: 'y',
      reference: 'chirurgien-2022',
      published: false,
      semantic: false,
      slug: '0lezbvp5wwnmovmg-chirurgien',
      slug_mail: 'dn4y5z',
      driver_license: false,
      education_level_id: 1,
      start_date: null,
      end_date: null,
      apply_url: null,
      updated_by: null,
      language: 'fr_FR',
      meta_tags: null,
      meta_description: null,
      meta_title: null,
      options: null,
      remote: false,
      kanban: true,
      note: '<p></p>',
      currency: 'EUR',
      partial: false,
      handicap: false,
      questions: [],
      address: [Object]
    },
    column: 643,
    cv: null,
    user: {},
    message: 'Un nouveau candidat a postulé sur votre offre <b>Chirurgien</b>',
    applicant_id: 1860,
    candidate_id: 1648,
    column_id: 'a4JL2lpEQKpwBXKe',
    vacancy_id: '0LEZBvp5WWnMoVmg',
    company: { id: 'Vw67MknKj2dJ1203', name: 'Hopital de la Timone' }
  },
  event: 'new_applicant',
  company_id: 59
}
```
</details>
</details>
  <details>
  <summary> Déplacement d'un candidat </summary>
  Un Webhook peut être créé pour envoyer une requête lorsqu'un candidat est déplacé sur une colonne définie. On peut donc paramétrer le Webhook pour qu'il transfère les informations d'un candidat recruté à un ATS. 

  <br/>

|Name|Type|Description|
|---|---|---|
data|[data](/docs/Schemas/data_drag_applicant)|Objet contenant les données|
event|string|Evènement ayant déclenché l'envoi (ici : 'drag_applicant')|
company_id|integer|Identifiant en clair de l'entreprise|


<details>
<summary> Exemple </summary>

```json
{
  data: {
    user: {
      email: 'tom_bourgis@gmail.com',
      status: 1,
      id: 240,
      firstname: 'Tom',
      lastname: 'Bourgis',
      phone: null,
      company: 'L'entreprise',
      language: 'fr_FR',
      last_login: 2022-01-13T15:12:14.899Z,
      created_at: 2019-03-21T09:24:02.325Z,
      updated_at: 2022-01-13T15:12:14.901Z,
      signature: '<p>Tom Bourgis</p>\n' +
        '<p>Chargé de développement</p>\n' +
        '<p>+33 (0)6 20 51 96 08 - tom.bourgis@lentreprise.io</p>\n' +
        '<p><a href="https://app.hubspot.com/meetings/tom-3" target="_blank">Prendre un rendez-vous</a>&nbsp;</p>\n' +
        '<p></p>\n',
      use_email: false,
      timezone: 'Europe/Paris',
      gmail_last_sync_id: null,
      gmail_last_sync_date: null,
      picture: [Object]
    },
    applicant: {
      id: 1474,
      vacancy_id: 'a4JL2lpEbydwBXKe',
      candidate_id: 1260,
      score: 0,
      status: 1,
      created_at: 2022-01-13T15:21:22.164Z,
      updated_at: 2022-01-13T15:26:53.148Z,
      comment: null,
      column_id: 'Nk5aMxpQ4b9GZ2Oz',
      comments: null,
      urls: null,
      external_id: null,
      view: false,
      anonym: false,
      duplicate: null,
      reason_id: null,
      applies: [Array],
      column: [Object],
      vacancy: [Object]
    },
    candidate: {
      id: 1260,
      firstname: 'Hubert',
      lastname: 'Delajaque',
      email: 'delajaque@mail.com',
      status: 1,
      external_id: null,
      created_at: 2022-01-13T15:21:22.063Z,
      updated_at: 2022-01-13T15:21:22.116Z,
      summary: null,
      contact_information: null,
      comments: null,
      urls: {},
      user_id: null,
      phone: '+33 6 76 56 45 23',
      consent: true,
      cv: {},
      additionals: [Object]
    },
    column: {
      id: 695,
      title: 'Pré-qualification RH',
      company_id: 'G6KzqPnNLyp31m0l',
      position: 2,
      created_at: 2019-12-12T12:34:15.174Z,
      updated_at: 2021-11-05T09:12:15.563Z,
      visible: true,
      hired: false
    },
    vacancy: {
      id: 1243,
      company_id: 'G6KzqPnNLyp31m0l',
      title: 'Account Executive ',
      description: '<div>Quid? qui se etiam nunc subsidiis patrimonii aut amicorum liberalitate sustentant, hos perire patiemur? An, si qui frui publico non potuit per hostem, hic tegitur ipsa lege censoria; quem is frui non sinit, qui est, etiamsi non appellatur, hostis, huic ferri auxilium non oportet? Retinete igitur in provincia diutius eum, qui de sociis cum hostibus, de civibus cum sociis faciat pactiones, qui hoc etiam se pluris esse quam collegam putet, quod ille vos tristia voltuque deceperit, ipse numquam se minus quam erat, nequam esse simularit. Piso autem alio quodam modo gloriatur se brevi tempore perfecisse, ne Gabinius unus omnium nequissimus existimaretur.</div>',
      experience: 2,
      salary: '0',
      status: 1,
      contract_type_id: 5,
      activity_id: 13,
      external_id: null,
      created_by: 'LrENkKp8lZd3xYGM',
      created_at: 2020-12-01T14:14:28.005Z,
      updated_at: 2021-12-28T16:39:01.848Z,
      mission: '<div>Prospecte une clientèle de professionnels, propose des solutions techniques selon les besoins, impératifs du client et négocie les conditions commerciales de la vente.<br>Peut coordonner une équipe commerciale et animer un réseau de commerciaux.</div>',
      profile: "<div>Définir le plan d'action commercial et établir le plan de tournée (ciblage, interlocuteurs, préparation de dossiers techniques)<br>Concevoir une étude de faisabilité technique<br>Établir un devis<br>Négocier un contrat<br>Établir un contrat de vente<br>Vérifier les conditions de réalisation d'une commande<br>Suivre la réalisation d'une prestation technique<br>Analyser les résultats des ventes<br>Déterminer des mesures correctives</div>",
      channel_id: 2,
      metier_id: 54,
      daxtra_index: true,
      mensuality: 'y',
      reference: 'Account Executive',
      published: false,
      semantic: false,
      slug: 'a4jl2lpebydwbxme-commercial-btob-h-f',
      slug_mail: 'dj3q2z',
      driver_license: true,
      education_level_id: 5,
      start_date: null,
      end_date: null,
      apply_url: null,
      updated_by: null,
      language: 'fr_FR',
      meta_tags: null,
      meta_description: null,
      meta_title: null,
      options: [Object],
      remote: true,
      kanban: true,
      note: '',
      currency: 'EUR',
      partial: false,
      handicap: false
    },
    user_id: '0D3NVZdqe7dMyb6z',
    applicant_id: 1474,
    candidate_id: 1260,
    column_id: 'Nk5aMxpQ4b9GZ2Oz',
    vacancy_id: 'a4JL2lpEbydwBXKe',
    company: { id: 'G6KzqPnNLyp31m0l', name: "L'entreprise" }
  },
  event: 'drag_applicant',
  company_id: 60
}
```
</details>

  </details>
</TabItem>
<TabItem value="Actions" label="Actions" >
  <center> 🐙 C'est pour bientôt 🐙 </center>
</TabItem>
<TabItem value="Messages" label="Messages" >
<details>
<summary> Nouveau message envoyé </summary>
Un Webhook peut être créé pour envoyer une requête lorsque quelqu'un envoi un message.

  <br/>

|Name|Type|Description|
|---|---|---|
data|[data](/docs/Schemas/data_new_message)|Objet contenant les données|
event|string|Evènement ayant déclenché l'envoi (ici : 'new_message')|
company_id|integer|Identifiant en clair de l'entreprise|

<details>
<summary>Exemple</summary>


```json
{
  data: {
    company_id: 'Vw67MknKj2dJ1203',
    user: {
      email: 'Ludivine.lacru@latimone.fr',
      status: 1,
      id: 147,
      firstname: 'Ludivine',
      lastname: 'Lacru',
      phone: '+33 6 96 87 53 96',
      company: 'Louis SAS',
      language: 'fr_FR',
      last_login: 2022-01-13T15:41:11.165Z,
      created_at: 2016-10-17T22:26:50.076Z,
      updated_at: 2022-01-13T15:41:11.166Z,
      signature: '',
      use_email: false,
      timezone: 'Europe/Paris',
      gmail_last_sync_id: null,
      gmail_last_sync_date: null,
      picture: [Object]
    },
    applicant: {
      id: 1687,
      vacancy_id: '0LEZBvp5WWpMoVmg',
      candidate_id: 1490,
      score: 0,
      status: 1,
      created_at: 2021-12-10T22:25:12.639Z,
      updated_at: 2022-01-13T15:53:18.124Z,
      comment: null,
      column_id: '2zNDRr9BA8nLqQyE',
      comments: null,
      urls: null,
      external_id: null,
      view: true,
      anonym: false,
      duplicate: null,
      reason_id: null,
      vacancy: [Object]
    },
    candidate: {
      id: 1490,
      firstname: 'Hildegaard',
      lastname: 'Riva',
      email: 'hildegaard.riva@yopmail.com',
      status: 1,
      external_id: null,
      created_at: 2021-12-10T22:25:12.596Z,
      updated_at: 2021-12-10T22:27:54.998Z,
      summary: null,
      contact_information: null,
      comments: null,
      urls: [Object],
      user_id: null,
      phone: '',
      consent: true,
      additionals: [Object]
    },
    vacancy: {
      id: 1575,
      company_id: 'Vw67MknKj2dJ1203',
      title: 'Chirurgien',
      description: 'Créé en 1974 au sein de l’AP-HM, le Centre Hospitalier de la Timone est le plus important de la région PACA. Il est considéré par son activité, son équipement de pointe et ses moyens humains comme le troisième hôpital européen.',
      experience: 1,
      salary: '0',
      status: 1,
      contract_type_id: 1,
      activity_id: 35,
      external_id: null,
      created_by: 'lVq5r6pYLD9AmMvP',
      created_at: 2021-10-11T12:29:16.187Z,
      updated_at: 2022-01-13T14:49:27.828Z,
      mission: '<p>Opérer à coeur ouvert</p>',
      profile: "<p>Identifier la demande du patient et rechercher les informations complémentaires dans le dossier médical<br>Définir les orientations stratégiques d'une structure<br>Recenser les symptômes, les dysfonctionnements, cerner l'environnement de vie du patient et procéder à l'examen clinique<br>Déterminer les besoins thérapeutiques et réaliser les soins médicaux<br>Réaliser la prescription médicale, expliquer les modalités de traitement au patient et le conseiller sur l'hygiène de vie<br>Repérer les situations à risques (maltraitance, addiction, ...) et orienter le patient vers d'autres professionnels ou informer les services concernés (sociaux, judiciaires, ...)<br>Compléter les documents médico-administratifs (feuille de soins, déclaration de grossesse)<br>Actualiser le dossier médical du patient<br>Représenter une structure lors d'évènements (salons professionnels, ...)<br>Actualiser la documentation professionnelle et réglementaire<br>Participer à des groupes de travail</p>",
      channel_id: 10,
      metier_id: 122,
      daxtra_index: true,
      mensuality: 'y',
      reference: 'chirurgien-2022',
      published: false,
      semantic: false,
      slug: '0lezbvp5wwnmovmg-chirurgien',
      slug_mail: 'dn4y5z',
      driver_license: false,
      education_level_id: 1,
      start_date: null,
      end_date: null,
      apply_url: null,
      updated_by: null,
      language: 'fr_FR',
      meta_tags: null,
      meta_description: null,
      meta_title: null,
      options: null,
      remote: false,
      kanban: true,
      note: '<p></p>',
      currency: 'EUR',
      partial: false,
      handicap: false
    },
    text: '<p>Candidat sérieux et motivé</p>',
    user_id: 'lVq5r6pYLD9AmMvP',
    applicant_id: 1687,
    candidate_id: 1490,
    vacancy_id: '0LEZBvp5WWnMoVmg',
    company: { id: 'Vw67MknKj2mJ1203', name: 'La Timone' }
  },
  event: 'new_message',
  company_id: 59
}
```

</details>

</details>
</TabItem>
<TabItem value="Membres" label="Membres" >
<center> 🐙 C'est pour bientôt 🐙 </center>
</TabItem>
<TabItem value="Offres" label="Offres" >
  <details>
    <summary> Nouvelle offre </summary>
Un Webhook peut être créé pour envoyer une requête lorsqu'une nouvelle offre est créee

  <br/>

|Name|Type|Description|
|---|---|---|
data|[data](/docs/Schemas/data_new_vacancy)|Objet contenant les données|
event|string|Evènement ayant déclenché l'envoi (ici : 'new_vacancy')|
company_id|integer|Identifiant en clair de l'entreprise|

      
<details>
<summary>Exemple</summary>

```json
{
  data: {
    user: {
      email: 'anthony@egames.io',
      status: 1,
      id: 147,
      firstname: 'Anthony',
      lastname: 'Dupontel',
      phone: '+33 6 96 87 53 96',
      company: 'Louis SAS',
      language: 'fr_FR',
      last_login: 2022-01-13T15:41:11.165Z,
      created_at: 2016-10-17T22:26:50.076Z,
      updated_at: 2022-01-13T15:41:11.166Z,
      signature: '',
      use_email: false,
      timezone: 'Europe/Paris',
      gmail_last_sync_id: null,
      gmail_last_sync_date: null,
      picture: [Object]
    },
    vacancy: {
      id: 1578,
      company_id: 'Vw67MkmKj2dJ1203',
      title: 'Testeur de jeux video',
      description: '<p>Viens t'amuser avec nous</p>',
      experience: 6,
      salary: '0',
      status: 1,
      contract_type_id: 1,
      activity_id: 35,
      external_id: null,
      created_by: 'lVq5r6mYLD9AmMvP',
      created_at: 2022-01-13T15:58:38.120Z,
      updated_at: 2022-01-13T15:58:38.150Z,
      mission: '<p>Designer, coder, analyser et tester les systèmes pour les applications iOS<br>Introduire et présenter les usages et les fonctionnalités<br>S'occuper des mises à jour des softwares, des patches et des bugs<br>Développer des applications pour des projet avec deadlines tout en respectant les exigences commerciales<br>Communiquer avec une équipe de développeurs, designers, directeur de projets et autres membres du personnel pour mettre en place de nouvelles fonctionnalités<br>Bien organiser les projets, les brouillons, les dossiers, les codes afin de permettre aux autres membres de l'équipe de faire des changements/suggestions/corrections<br>Rester à jours sur les nouveaux langages de programmations, mise à jour OS, et autres informations qui pourraient affecter le développement.</p>',
      profile: '<p>Expérience dans la publication d'application Iphone/Ipad<br>Expérience en Objective-C, bibliothèque externe, et gestion d'APIs <br>Très bonne connaissance des différents frameworks iOS (données, graphiques…) et des outils de programmation (Xcoe, Git, …)<br>Excellente capacité à comprendre et développer des algorithmes<br>Excellent communication écrite et verbale en [X] langue<br>[X] diplôme d'ingénieur ou d'un domaine similaire</p>',
      channel_id: 5,
      metier_id: 135,
      daxtra_index: true,
      mensuality: 'y',
      reference: 'test-video-202201',
      published: false,
      semantic: false,
      slug: 'vadyjo9m0lnkr0ry-testeur-de-jeux-video',
      slug_mail: 'v01o0z',
      driver_license: false,
      education_level_id: 1,
      start_date: null,
      end_date: null,
      apply_url: null,
      updated_by: null,
      language: 'fr_FR',
      meta_tags: null,
      meta_description: null,
      meta_title: null,
      options: [Object],
      remote: false,
      kanban: true,
      note: '<p>Ceci est ma note interne</p>',
      currency: 'EUR',
      partial: false,
      handicap: false,
      questions: [],
      address: [Object],
      tags: []
    },
    message: '<b>Anthony Dupontel</b> a ajouté une nouvelle offre <b>Testeur de jeux video</b>',
    user_id: 'lVq5r6pYLD9AmMvP',
    vacancy_id: 'vADYjo9m0LnkR0ry',
    company: { id: 'Vw67MknKj2dJ1203', name: 'EGames' }
  },
  event: 'new_vacancy',
  company_id: 59
}
```
</details>
  </details>
</TabItem>
</Tabs>

