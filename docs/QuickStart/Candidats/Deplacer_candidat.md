---
sidebar_position: 4
description: Comment changer un candidat grâce à l'API Flatchr
---


# Déplacer un candidat de colonne

Vous pouvez déplacer un candidat grâce à l'API.


## Requête


```jsx
PUT /company/{companyID}/vacancy/{vacancyID}/applicant/{applicantID}
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
vacancyID|path|string|<center>✔️</center>|Identifiant de l'offre d'emploi
applicantID|path|string|<center>✔️</center>|Identifiant du candidat
column_id||integer||[Identifiant de la colonne](/docs/Schemas/Referentiels/columns)



### Exemples de requête


```jsx title="Requête cURL"
curl -X PUT 'api.flatchr.io/company/0GjqBwprWAdArDl4/vacancy/Vq5r6pYxam9AmMvP/applicant/V41QG9eja5pK6Xev'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{column_id:1313}'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|string|Identifiant du candidat|
vacancy_id|string|Identifiant de l'offre d'emploi|
column_id|integer|Identifiant de la colonne dans laquelle est le candidat|
create_at|timestamp|Date de création du candidat|
updated_at|timestamp|Date de mise à jour du candidat|
status|integer|Statut du candidat|
view|boolean||
anonym|boolean|Le candidat est-il anonymisé ?|
external_id|boolean|Identifiant externe du candidat|
candidate|[candidate](/docs/Schemas/candidate)|Les informations du candidat|
column|||
vacancy|||
foreigner|boolean||
applies|[[applies](/docs/Schemas/applies)]|Les candidatures du candidat|


### Exemple de réponse

```json
{
    "id": "V41QG9eja5pK6Xev",
    "vacancy_id": "Vq5r6pYxam9AmMvP",
    "column_id": 1313,
    "score": 0,
    "comment": "",
    "created_at": 1643904014,
    "updated_at": 1645015716,
    "status": 1,
    "view": true,
    "anonym": false,
    "external_id": null,
    "candidate": {
        "id": "LrENkKd8mmn3xYGM",
        "email": "andrieux_alexandre@gmail.com",
        "firstname": "alexandre",
        "lastname": "andrieux",
        "urls": {},
        "created_at": "2022-02-03T16:00:14.589Z",
        "phone": "+33 6 95 46 82 31",
        "consent": true,
        "cv": "http://flatchr-demo.s3.eu-west-1.amazonaws.com/candidates/2022/02/67fb112b-71cf-4acc-a7a4-32c6807a03b9/alexandre-andrieux.pdf",
        "aws": {
            "key": "candidates/2022/02/67fb112b-71cf-4acc-a7a4-32c6807a03b9/alexandre-andrieux",
            "extension": "pdf",
            "signature": "s3.eu-west-1.amazonaws.com/flatchr-demo/candidates%2F2022%2F02%2F67fb112b-71cf-4acc-a7a4-32c6807a03b9%2Falexandre-andrieux.pdf?X-Amz-Expires=86400&X-Amz-Date=20220216T124836Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHRG2QM2E256YXMA%2F20220216%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=d80388898a0936429fc3b56247fe6e37f2280df71a5a3a9864a127375d6fcab8"
        }
    },
    "column": {},
    "vacancy": {},
    "foreigner": false,
    "applies": [
        {
            "id": "Vq5r6pY1YgpAmMvP",
            "created_at": "2022-02-03T16:00:14.630Z",
            "vacancy_id": "Vq5r6pYxam9AmMvP",
            "offerer_id": "ZmbMGYdVZ1d3JPNx",
            "import": false
        }
    ]
}
```
