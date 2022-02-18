---
sidebar_position: 1
description: Comment récupérer les messages grâce à l'API Flatchr
---


# Récupérer les messages

Vous pouvez récupérer les messages échangés avec un candidat grâce à l'API.


## Requête


```jsx
GET /company/{companyID}/applicant/{applicantID}/messages?fields=author,replied,mail,attachments,candidate
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
applicantID|path|string|<center>✔️</center>|Identifiant du candidat
fields|query|string||les champs à afficher


### Exemples de requête


```jsx title="Requête cURL"
curl -X GET 'api.flatchr.io/company/0GjqBwprWAdArDl4/applicant/V41QG9eja5pK6Xev/messages?fields=author,replied,mail,attachments,candidate'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|integer|Identifiant du commentaire|
created_by|integer|Identifiant de l'auteur du commentaire|
create_at|timestamp|Date de création du commentaire|
auto|boolean|Le message était-il un message automatique|
mail|[mail](/docs/Schemas/mail)|L'objet mail|
delivered|boolean|Le message a t'il été délivré|
delivered_at|timestamp|La date de livraison du mail|
author|[author](/docs/Schemas/author)|Auteur du commentaire|
candidate|[candidate](/docs/Schemas/candidate)|Le candidat concerné (seul les champs nom, prénom et email sont retournés)
attachments|[attachments](/docs/Schemas/attachment)|Les pièces jointes du mail


### Exemple de réponse

```json
[
    {
        "id": "oLm5NdD0j7dAGbZQ",
        "created_by": 391,
        "created_at": "2022-02-16T09:32:07.381Z",
        "auto": false,
        "mail": {
            "subject": "Proposition entretien téléphonique",
            "text": "Bonjour Alexandre,\n\nJe reviens vers vous suite à votre candidature pour le poste de Administrateur\nréseaux - Paris - CDI chez Flatchr, est-ce que vous êtes disponible ces\nprochains jours pour un premier entretien téléphonique (15 minutes) ?\n\nDans l'attente de votre retour,\n\nTrès cordialement, ",
            "html": "<p>Bonjour Alexandre,</p><p></p><p>Je reviens vers vous suite à votre candidature pour le poste de Administrateur</p><p>réseaux - Paris - CDI chez Flatchr, est-ce que vous êtes disponible ces</p><p>prochains jours pour un premier entretien téléphonique (15 minutes) ?</p><p></p><p>Dans l'attente de votre retour,</p><p></p><p>Très cordialement, </p>",
            "status": null
        },
        "delivered": false,
        "deliver_at": "2022-02-16T10:34:56.000Z",
        "author": {
            "firstname": "Alexis",
            "lastname": "Colonna"
        },
        "candidate": {
            "firstname": "alexandre",
            "lastname": "andrieux",
            "email": "andrieux_alexandre@gmail.com"
        },
        "attachments": []
    }
]
```
