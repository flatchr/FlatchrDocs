# Webhooks

Flatchr dispose de plusieurs webhooks pouvant être configurés afin de communiquer avec des applications tierces lors du déclenchement de certains évènements.

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

Pour paramétrer un Webhook, rendez vous dans l'onglet `Administration > Marketplace` puis cliquer sur l'application **Webhooks**.  


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
      email: 'tom_bourgeois@gmail.com',
      status: 1,
      id: 240,
      firstname: 'Alexandre',
      lastname: 'Léon',
      phone: null,
      company: 'MetaFM',
      language: 'fr_FR',
      last_login: 2022-01-13T15:12:14.899Z,
      created_at: 2019-03-21T09:24:02.325Z,
      updated_at: 2022-01-13T15:12:14.901Z,
      signature: '<p>Alexandre Léon</p>\n' +
        '<p>Chargé de développement</p>\n' +
        '<p>+33 (0)6 20 51 96 08 - alexandre.l@flatchr.io</p>\n' +
        '<p><a href="https://app.hubspot.com/meetings/alexandre-l1" target="_blank">Prendre un rendez-vous</a>&nbsp;</p>\n' +
        '<img src="https://flatchr-staging.s3.eu-west-1.amazonaws.com/trix-pictures/2020-09/604ee5eb-2465-4ea0-be13-39dd9ee4e413-Flatchr%20petit%20logo.png.png?content-disposition=attachment" alt="undefined" style="height: auto;width: auto"/>\n' +
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
      created_by: 'LrENkKd8lZd3xYGM',
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
      slug: 'a4jl2lpebydwbxke-commercial-btob-h-f',
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
    company: { id: 'G6KzqPnNLyp31m0l', name: "L'entreprise " }
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
      This is the detailed content
  </details>
</TabItem>
<TabItem value="Membres" label="Membres" >
<center> 🐙 C'est pour bientôt 🐙 </center>
</TabItem>
<TabItem value="Offres" label="Offres" >
  <details>
    <summary> Nouvelle offre </summary>
      This is the detailed content
  </details>
</TabItem>
</Tabs>

