---
sidebar_position: 1
description: Comment récupérer les commentaires grâce à l'API Flatchr
---


# Récupérer les commentaires

Vous pouvez récupérer les commentaires créés sur un candidat grâce à l'API.


## Requête


```jsx
GET /company/{companyID}/applicant/{applicantID}/comments
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
applicantID|path|string|<center>✔️</center>|Identifiant du candidat
fields|query|string||author pour afficher le Nom et Prénom du créateur


### Exemples de requête


```jsx title="Requête cURL"
curl -X GET 'api.flatchr.io/company/0GjqBwprWAdArDl4/applicant/ADYjo9mGxZdkR0ry/comments?fields=author'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|integer|Identifiant du commentaire|
private|boolean|Le commentaire est-il privé ?|
favorite|boolean|Le commentaire est-il en favori ?|
created_by|integer|Identifiant de l'auteur du commentaire|
create_at|timestamp|Date de création du commentaire|
reply_to|integer|Identifiant du commentaire parent si ce commentaire est une réponse à un commentaire déja existant|
author|[author](/docs/Schemas/author)|Auteur du commentaire|


### Exemple de réponse

```json
[
    {
        "id": 3499,
        "text": "<p>- Pouvez-vous vous présenter ?<br>- Que savez-vous de notre entreprise ?<br>- Pourquoi souhaitez-vous quitter votre poste actuel ?<br>- Qu’est-ce qui a suscité votre intérêt dans cette offre d’emploi ?<br>- Disponibilité ? </p><p></p><p><span data-type=\"mention\" class=\"mention\" data-id=\"marion@flatchr.io\">@marion@flatchr.io</span> <br></p>",
        "private": false,
        "favorite": false,
        "created_by": 391,
        "created_at": "2022-02-04T10:39:28.178Z",
        "reply_to": null,
        "author": {
            "id": "lVq5r6pYXk9AmMvP",
            "firstname": "Alexis",
            "lastname": "Colonna"
        }
    },
    {
        "id": 3615,
        "text": "<p>Très bonne réponse aux questions</p>",
        "private": false,
        "favorite": false,
        "created_by": 391,
        "created_at": "2022-02-15T16:18:14.322Z",
        "reply_to": 3499,
        "author": {
            "id": "lVq5r6pYXk9AmMvP",
            "firstname": "Alexis",
            "lastname": "Colonna"
        }
    }
]
```
