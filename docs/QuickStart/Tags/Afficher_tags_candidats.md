---
sidebar_position: 3
description: Comment récupérer les tags d'un candidat grâce à l'API Flatchr
---


# Afficher les tags candidats

Vous pouvez récupérer les tags d'un candidat crées dans l'application grâce à l'API.


## Requête


```jsx
GET /company/{companyID}/applicant/{applicantID}/traits
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyId|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
applicantID|path|string|<center>✔️</center>|Identifiant du candidat 


### Exemples de requête


```jsx title="Requête cURL"
curl -X GET 'https://api.flatchr.io/company/N1zj8Md6zbdYZ70J/applicant/gQayv9LNBod6LXE4/traits'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|string|Identifiant|
tag_id|integer|Identifiant du tag|
value|string|Valeur du tag



### Exemple de réponse

```json
[
    {
        "id":"GjqBwprw1ydArDl4",
        "tag_id":"KL5kDWnboM9yawrb",
        "value":"Confirmé"
    },
    {
        "id":"w67MknKVOldJ1203",
        "tag_id":"5gQayv9L1Qp6LXE4",
        "value":"Bac +3"
    }
]
```
