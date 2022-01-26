---
sidebar_position: 3
---
# Créer un candidat

:::caution Important

L'URL racine est ici https://careers.flatchr.io

:::


## Requête

Vous pouvez créer des candidats en utilisant l'API grâce à la requête suivante : 

<details>
  <summary> Par une requête sur l'API  </summary>

```jsx
    POST vacancy/candidate/json
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-4f87a56b-e6a0-4c9a-86cc-9c9de3aded2f?action=collection%2Ffork&collection-url=entityId%3D18861404-4f87a56b-e6a0-4c9a-86cc-9c9de3aded2f%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422#?env%5BFlatchr%5D=W3sia2V5IjoiYXBpX3Rva2VuIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJzbHVnIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCJ9LHsia2V5IjoiY29tcGFueSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
</details>

<details>
  <summary> Via un système web  </summary>

```jsx
    POST vacancy/candidate/custom
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-4f87a56b-e6a0-4c9a-86cc-9c9de3aded2f?action=collection%2Ffork&collection-url=entityId%3D18861404-4f87a56b-e6a0-4c9a-86cc-9c9de3aded2f%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422#?env%5BFlatchr%5D=W3sia2V5IjoiYXBpX3Rva2VuIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoic2VjcmV0In0seyJrZXkiOiJzbHVnIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCJ9LHsia2V5IjoiY29tcGFueSIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
</details>


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
vacancy	| query | string | <center>✔️</center> | Slug de l'annonce (Champ `slug` de l'objet vacancy) |
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

D'autres exemples sont disponibles sur [Gitlab](https://gitlab.com/flatchr/example) : 

<center>
  <a class="button button--outline button--secondary" href="https://gitlab.com/flatchr/example/-/blob/master/post_node.js" style={{height: 5 + 'em', width:10 + "em"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/128px-Node.js_logo.svg.png"/>
  </a>
  <a class="button button--outline button--secondary" href="https://gitlab.com/flatchr/example/-/blob/master/post_php.php"style={{height: 5 + 'em', width:10 + "em"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/128px-PHP-logo.svg.png"/>
  </a>
</center>


## Réponse
|Name|Type|Description|
|---|---|---|
status|HTTP Status||
response| string |Ex: "applicant created"|