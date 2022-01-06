---
sidebar_position: 3
---
# Créer un candidat

:::caution Important

L'URL racine est ici https://carrers.flatchr.io

:::


## Requête

Vous pouvez créer des candidats en utilisant l'API grâce à la requête suivante : 

<details>
  <summary> Par une requête sur l'API  </summary>

```jsx
    POST vacancy/candidate/json
```
</details>

<details>
  <summary> Via un système web  </summary>

```jsx
    POST vacancy/candidate/custom
```
</details>


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
vacancy	| query | string | <center>✔️</center> | Identifiant unique de l’annonce |
firstname| query | string | <center>✔️</center> | Prénom /[a-zA-Z]/ |
lastname | query | string | <center>✔️</center> | Nom /[a-zA-Z]/ |
token | query | string | <center>✔️</center> |	Clé API. Elle est créée dans l’interface Flatchr |
email | query |	email	||	Email |
phone | query | integer	||	Téléphone |
type | query | string	| <center>✔️</center> |	Type de  CV "link" ou "document" |
resume | query | base64  / url | <center>✔️</center> | Objet pour un type document url pour un type link |
comment | query | string	||	Commentaire du candidat ||
offerer_id | query | integer ||	Identifiant Flatchr a demander à l'équipe |
urls | query | object ||	Lien réseaux sociaux {facebook: string, linkedin: string, twitter: string, other: string} |
legalNewsletterPartners	| query | boolean	||	Opt-in newsletter |
similarities | query |	boolean	||	Retourne offres similaires |
response_text | query |string	||	Texte de retour |
answers | query | [[answer](/docs/Schemas/answer)] ||	Réponses aux questions/tags |

<br/>

:::tip Astuce

Vous pouvez tester vos requêtes de création de candidats grâce à la méthode suivante : 

```jsx
    POST /vacancy/candidate/test
```

:::


### Exemple de requête

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

  <TabItem value="pdf" label="Avec un fichier PDF" default>

  ```jsx title="Créer un candidat avec le lien d'un CV"
    curl -X POST https://careers.flatchr.io/vacancy/candidate/json
        -H "Authorization: Bearer {token}"
        -H 'Content-Type: application/json'
        -d '{
            "vacancy": "vyja3k5rrnlnqwe-technicien-h-f",
            "firstname": "Johnny",
            "lastname": "Doe",
            "token": "{token}",
            "type": "document",
            "resume": {
              "data": "{fichier encodé en base 64}",
              "fileName": "CV_John_Doe",
              "contentType": "application/pdf"
            }
          }'
  ```

  </TabItem>
  <TabItem value="link" label="Avec un lien vers le CV">

  ```jsx title="Créer un candidat avec le lien d'un CV"
    curl -X POST https://careers.flatchr.io/vacancy/candidate/json
        -H "Authorization: Bearer {token}"
        -H 'Content-Type: application/json'
        -d '{
                "vacancy": "vyja3k5rnlnqwe-technicien-h-f",
                "firstname": "John",
                "lastname": "Doe",
                "token": "{token}",
                "type": "link",
                "resume": "storage.s3.eu-west-1.amazonaws.com/CV/5b400fab-679811f70b0e/CV_John_Doe.pdf"
              }' 

  ```
  </TabItem>
</Tabs>

## Réponse
|Name|Type|Description|
|---|---|---|
status|HTTP Status||
response| string |Ex: "applicant created"|