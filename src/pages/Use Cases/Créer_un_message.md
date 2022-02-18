---
sidebar_position: 2
description: Comment créer un mail grâce à l'API Flatchr
---


# Créer un message

Vous pouvez envoyer un mail à un candidat grâce à l'API.


## Requête

:::warning Token

Pour créer un commentaire il faut s'authentifier avec un token utilisateur qui peut être récupéré grâce à la méthode [login](/docs/QuickStart/login)

:::


```jsx
POST /company/{companyID}/applicant/{applicantID}/message
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
applicantID|path|string|<center>✔️</center>|Identifiant du candidat
subject||string||L'objet du mail
html||string|<center>✔️</center>|Le texte du commentaire
sms||boolean||Le message à envoyer est-il un sms ?
mail||boolean||Le message à envoyer est-il un mail ?




### Exemples de requête


```jsx title="Requête cURL"
curl -X POST 'api.flatchr.io/company/0GjqBwprWAdArDl4/applicant/ADYjo9mGxZdkR0ry/message'
    -H "Authorization: Bearer {user_token}"
    -H 'Content-Type: application/json'
    -F 'subject="Hello"' 
    -F 'html="<p> Hello World ! </p>"'
    -F 'mail="true"' \
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|integer|Identifiant du commentaire|
created_by|integer|Identifiant de l'auteur du commentaire|
create_at|timestamp|Date de création du commentaire|
auto|boolean|Le message était-il un message automatique|
mail|[mail](/docs/Schemas/mail)|L'objet mail|
delivered_at|timestamp|La date de livraison du mail|
author|[author](/docs/Schemas/author)|Auteur du commentaire|
attachments|[attachments](/docs/Schemas/attachment)|Les pièces jointes du mail


### Exemple de réponse

```json
{
    "id": "k0M5O9yOjbdxbQBy",
    "created_by": 391,
    "created_at": "2022-02-16T14:11:44.393Z",
    "auto": false,
    "mail": {
        "subject": "Hey",
        "text": "Hello World",
        "html": "<p>Hello World</p>"
    },
    "deliver_at": "2022-02-16T14:11:44.000Z",
    "author": {
        "firstname": "Alexis",
        "lastname": "Colonna"
    }
}
```
