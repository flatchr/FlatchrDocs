---
sidebar_position: 3
description: Comment supprimer un commentaire grâce à l'API Flatchr
---


# Supprimer un commentaire

Vous pouvez supprimer un commentaire sur un candidat grâce à l'API.


## Requête


```jsx
DELETE /company/{companyID}/applicant/{applicantID}/comment/{commentID}
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
applicantID|path|string|<center>✔️</center>|Identifiant du candidat
commentID|path|integer|<center>✔️</center>|L'identifiant duc commentaire à supprimer


### Exemples de requête


```jsx title="Requête cURL"
curl -X DELETE 'api.flatchr.io/company/0GjqBwprWAdArDl4/applicant/ADYjo9mGxZdkR0ry/comment/3619'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
```



## Réponse
|Name|Type|Description|
|---|---|---|
statusCode|integer|Code statut de la requête|
message|string|Message expliquant le statut|



### Exemple de réponse

```json
{
    "statusCode": 200,
    "message": "Comment deleted"
}
```
