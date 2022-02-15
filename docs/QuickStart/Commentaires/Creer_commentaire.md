---
sidebar_position: 2
description: Comment créer un commentaire grâce à l'API Flatchr
---


# Créer un commentaire

Vous pouvez créer un commentaire sur un candidat grâce à l'API.


## Requête

:::warning Token

Pour créer un commentaire il faut s'authentifier avec un token utilisateur qui peut être récupéré grâce à la méthode [login](/docs/QuickStart/login)

:::


```jsx
POST /company/{companyID}/applicant/{applicantID}/comment
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
applicantID|path|string|<center>✔️</center>|Identifiant du candidat
private||boolean||Le commentaire est-il privé ?
text||string||Le texte du commentaire
reply_to||integer||L'id du commentaire parent


### Exemples de requête


```jsx title="Requête cURL"
curl -X POST 'api.flatchr.io/company/0GjqBwprWAdArDl4/applicant/ADYjo9mGxZdkR0ry/comment'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -F 'text="En réponse au précédent commentaire : très bon niveau en anglais"' \
    -F 'file=@"zoGaHqRvJ/CV_test.pdf"' \
    -F 'private="true"' \
    -F 'reply_to="3618"'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|integer|Identifiant du commentaire|
text|string|Le texte du commentaire|
private|boolean|Le commentaire est-il privé ?|
favorite|boolean|Le commentaire est-il en favori ?|
created_by|integer|Identifiant de l'auteur du commentaire|
create_at|timestamp|Date de création du commentaire|
reply_to|integer|Identifiant du commentaire parent si ce commentaire est une réponse à un commentaire déja existant|
author|[author](/docs/Schemas/author)|Auteur du commentaire|
attachments|[attachments]|Les pièces jointes du commentaire|
ratings|[ratings]||


### Exemple de réponse

```json
{
    "id": 3620,
    "text": "En réponse au précédent commentaire : très bon niveau en anglaisp",
    "private": true,
    "favorite": false,
    "created_by": 391,
    "created_at": "2022-02-15T17:00:00.264Z",
    "reply_to": 3618,
    "author": {
        "id": "lVq5r6pYXk9AmMvP",
        "firstname": "Alexis",
        "lastname": "Colonna"
    },
    "attachments": [],
    "ratings": []
}
```
