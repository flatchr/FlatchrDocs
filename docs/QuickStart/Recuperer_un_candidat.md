---
sidebar_position: 2
---
# Rechercher un candidat

Vous pouvez rechercher un ou plusieurs candidat grâce à l'API.


### Requête


```
POST https://api.flatchr.io/company/{companyID}/search/applicants
```

:::tip companyID
Afin d'utiliser l'API vous avez besoin de votre `companyID` qui est un identifiant alphanumérique sur 16 caractères. 
Pour l'obtenir vous pouvez vous rapprocher du support flatchr ou aller le chercher en effectuant la requête [Récupérer les annonces](./Recuperer_les_annonces) (c'est le champs `id` dans la classe `company`)

:::info

#### Paramètres
|Name|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyId|path|string|true|Identifiant de l'entreprise
||||||
firstname|query|string||Prénom|
lastname|query|string||Nom|
email|query|string||Mail du candidat|
hired|query|boolean||Le candidat est il recruté ou non|
colum|query|string||Nom de la colonne dans laquelle est le candidat|
start|query|string||Date au format "JJ/MM/AA" pour rechercher les candidats créés à partir d'une date donnée"
company|query|string||Permet de chercher sur plusieurs entreprise pour les multicomptes|

### Exemple de requête
```jsx title="Requête cURL pour Flatchr"
curl -X GET https://careers.flatchr.io/company/flatchr.json \ -H 'Accept: */*'
```

### Réponse
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


