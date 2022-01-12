---
sidebar_position: 2
---


# Rechercher un candidat

Vous pouvez rechercher un ou plusieurs candidat grâce à l'API.


## Requête


```jsx
POST /company/{companyID}/search/applicants
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/:collection_id)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyId|path|string|<center>✔️</center>|[Identifiant de l'entreprise](../getting_started#identifiant-de-lentreprise) 
||||||
firstname|query|string||Prénom|
lastname|query|string||Nom|
email|query|string||Mail du candidat|
hired|query|boolean||Le candidat est il recruté ou non|
colum|query|string||Nom de la colonne dans laquelle est le candidat|
start|query|string||Date au format "MM/JJ/AA" pour rechercher les candidats créés à partir d'une date donnée"
end|query|string||Date au format "MM/JJ/AA" pour rechercher les candidats créés avant une date donnée"
company|query|string||Permet de rechercher sur plusieurs entreprises pour les multicomptes|

### Exemples de requête

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="name" label="Nom" default>

```jsx title="Requête cURL"
curl -X POST https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/search/applicants
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"lastname":"{nom}"}'
```

</TabItem>
<TabItem value="mail" label="Email" >

```jsx title="Requête cURL"
curl -X POST https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/search/applicants
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"email":"{mail@mail.com}"}'
```

</TabItem>
<TabItem value="hired" label="Recruté" >

```jsx title="Requête cURL"
curl -X POST https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/search/applicants
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"hired":"true"}'
```

</TabItem>
<TabItem value="since" label="Depuis le 25/12/2021" >

```jsx title="Requête cURL"
curl -X POST https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/search/applicants
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"start":"12/25/21"}'
```

</TabItem>
<TabItem value="between" label="Entre le 01/01/2022 et le 10/01/2022" >

```jsx title="Requête cURL"
curl -X POST https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/search/applicants
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"start":"01/01/22", "end":"01/10/22"}'
```

</TabItem>
<TabItem value="company" label="Multicomptes" >

```jsx title="Requête cURL"
curl -X POST https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/search/applicants
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"hired":"true","company":"{company}"}'
```

</TabItem>

</Tabs>

## Réponse
|Name|Type|Description|
|---|---|---|
applicant|string|Id du candidat|
vacancy|string|Offre sur laquelle il a postulé|
column|string|Colonne dans laquelle est le candidat|
external_id|string|Id externe|
firstname|string|Prénom|
lastname|string|Nom|
email|string|Mail|
phone|string|Téléphone|
created_at|string|Date de création du candidat (JJ/MM/AA)|
source|string|Source de la candidature|

### Exemple de réponse

```json
[{
    "applicant": "z7gWQnjXG77hJRak",
    "vacancy": "Ingénieur Développement  H/F ",
    "column": "Recruté",
    "external_id": "",
    "firstname": "Juliette",
    "lastname": "larfoillou",
    "email": "larfoillou.j@gmail.com",
    "phone": "+33 6 37 89 87 57",
    "created_at": "09/11/21",
    "source": "L'Apec"
}]
```
