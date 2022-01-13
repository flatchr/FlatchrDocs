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
      This is the detailed content
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


