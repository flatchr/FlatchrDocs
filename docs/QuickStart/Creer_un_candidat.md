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
type | query | string	| <center>✔️</center> |	"link" ou "document" |
resume | query | base64 / hr-xml / url | <center>✔️</center> | Type de format pour le CV: document (si cv base64, default), json(si cv, format hr-xml) |
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

```jsx title="Requête cURL pour Flatchr"
curl -X POST https://careers.flatchr.io/vacancy/candidate/json
	-H "Authorization: Bearer {token}"
   -H 'Content-Type: application/json'
   -d '{
          "vacancy": "vyja39jqrrnlnqwe-technicien-metrologue-h-f",
          "firstname": "john",
          "lastname": "doe",
          "token": "8mdGHihkSGTv9JKN3JuS0MTnN2aDjjpbN54Jw5yqBpM=",
          "type": "document",
          "resume": {
            "data": "SGVsbG8h=",
            "fileName": "resume.txt",
            "contentType": "application/octet-stream"
          }
        }'  
```


## Réponse
|Name|Type|Description|
|---|---|---|
id|string|Clé de la diffusion|
offer_id|integer|Identifiant offre jobboards|
external_id|||
published|boolean|L'annonce est elle publiée ou non|
created_at|timestamp|Date de création de la diffusion|
vacancy|[vacancy](/docs/Schemas/vacancy)||
vacancy_id|string|Identifiant de l'annonce|


### Exemple de réponse