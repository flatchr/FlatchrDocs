---
sidebar_position: 2
description: Comment remplir un tag candidat grâce à l'API Flatchr
---


# Remplir un tag candidat

Vous pouvez un tag candidat grâce à l'API.


## Requête



```jsx
POST /company/{companyID}/applicant/{applicantID}/trait
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
applicantID|path|string|<center>✔️</center>|Identifiant du candidat
tag||string|<center>✔️</center>|L'identifiant du tag
value||string|<center>✔️</center>|La valeur du tag


### Exemples de requête


```jsx title="Requête cURL"
curl -X POST 'api.flatchr.io/company/0GjqBwprWAdArDl4/applicant/ADYjo9mGxZdkR0ry/trait'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"tag":"5gQayv9L1Qp6LXE4","value":"Bac +3"}'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|string|Identifiant|
tag_id|string|Identifiant du tag
value|string|Valeur du tag



### Exemple de réponse

```json
{
    "id":"w67MknKVOldJ1203",
    "tag_id":"5gQayv9L1Qp6LXE4",
    "value":"Bac +3"
}
```
