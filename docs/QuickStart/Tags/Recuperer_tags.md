---
sidebar_position: 1
description: Comment récupérer les tags grâce à l'API Flatchr
---


# Récupérer les tags

Vous pouvez récupérer les tags crées dans l'application grâce à l'API.


## Requête


```jsx
GET /company/{companyID}/tags
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyId|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise) 


### Exemples de requête


```jsx title="Requête cURL"
curl -X GET https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/tags
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|string|Identifiant du tag|
tag_id|integer|Identifiant en clair du tag|
company_id|integer|Identifiant en clair de l'entreprise
title|string|Titre du tag|
values|string|Valeurs possibles du tag (séparées par des ;)
multiple|boolean|Le tag peut il avoir plusieurs valeurs ?
visible|boolean|Le tag est ils visible par défaut sur la fiche candidat ?
creatable|boolean|Peut on créer une nouvelle valeur pour le tag ?
folder|boolean|Le tag est-il utilisé en tant que dossier ?
type|string|candidates pour les tags candidats ou vacancies pour les tags sur les offres
position|integer|Position du tag dans la liste


### Exemple de réponse

```json
[{
    "id": "7jKJ0Mpz60pXNgxa",
    "tag_id": 1174,
    "company_id": 99,
    "title": "Service IT",
    "values": "",
    "multiple": false,
    "visible": false,
    "creatable": false,
    "folder": true,
    "type": "vacancies",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "BQGYLqn1NV9mE0y1",
    "tag_id": 1177,
    "company_id": 99,
    "title": "Candidature Spontanée ",
    "values": "",
    "multiple": false,
    "visible": false,
    "creatable": false,
    "folder": true,
    "type": "vacancies",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "vADYjo9mwOdkR0ry",
    "tag_id": 1178,
    "company_id": 99,
    "title": "Langues",
    "values": "Français;Anglais;Espagnol;Allemand; Italien;Chinois",
    "multiple": true,
    "visible": true,
    "creatable": false,
    "folder": false,
    "type": "candidates",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "JBMQj09Z8YdxoRLO",
    "tag_id": 1181,
    "company_id": 99,
    "title": "Entreprise précédente ",
    "values": "",
    "multiple": false,
    "visible": false,
    "creatable": true,
    "folder": false,
    "type": "candidates",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "5gQayv9L1Qp6LXE4",
    "tag_id": 1183,
    "company_id": 99,
    "title": "Diplôme ",
    "values": "Bac;Bac +2;Bac +3;Bac +5",
    "multiple": false,
    "visible": true,
    "creatable": false,
    "folder": false,
    "type": "candidates",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "OBEjyY9lVMdZl7o2",
    "tag_id": 1171,
    "company_id": 99,
    "title": "Service Marketing ",
    "values": "",
    "multiple": false,
    "visible": false,
    "creatable": false,
    "folder": true,
    "type": "vacancies",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "l2yObP9O17d1ZYBW",
    "tag_id": 1172,
    "company_id": 99,
    "title": "Service Ressources Humaines ",
    "values": "",
    "multiple": false,
    "visible": false,
    "creatable": false,
    "folder": true,
    "type": "vacancies",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "2zNDRr9B1MnYqQyE",
    "tag_id": 1173,
    "company_id": 99,
    "title": "Service Financier",
    "values": "",
    "multiple": false,
    "visible": false,
    "creatable": false,
    "folder": true,
    "type": "vacancies",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "0LEZBvp5EvpMoVmg",
    "tag_id": 1175,
    "company_id": 99,
    "title": "Service Commercial",
    "values": "",
    "multiple": false,
    "visible": false,
    "creatable": false,
    "folder": true,
    "type": "vacancies",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "KL5kDWnboM9yawrb",
    "tag_id": 1176,
    "company_id": 99,
    "title": "Expérience",
    "values": "Junior;Confirmé;Senior",
    "multiple": false,
    "visible": true,
    "creatable": false,
    "folder": false,
    "type": "candidates",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "K8AbY1n7RedLgJNk",
    "tag_id": 1179,
    "company_id": 99,
    "title": "Langages Informatique",
    "values": " PHP; Python;JavaScript;React,;NodeJS",
    "multiple": true,
    "visible": true,
    "creatable": false,
    "folder": false,
    "type": "candidates",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "X2kea8pXY6dN1o0B",
    "tag_id": 1180,
    "company_id": 99,
    "title": "CRM",
    "values": "SalesForce;Hubspot;Pipedrive;Sellsy",
    "multiple": false,
    "visible": true,
    "creatable": false,
    "folder": false,
    "type": "candidates",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "a7brjV9M1Q9R5mNG",
    "tag_id": 1182,
    "company_id": 99,
    "title": "Métiers ",
    "values": "RH;Commercial;IT;Finance;Marketing;Tech;Service client",
    "multiple": true,
    "visible": true,
    "creatable": false,
    "folder": false,
    "type": "candidates",
    "position": null,
    "tagCandidateRestriction": []
}, {
    "id": "0D3NVZdq2MnMyb6z",
    "tag_id": 1184,
    "company_id": 99,
    "title": "referrer",
    "values": "",
    "multiple": false,
    "visible": true,
    "creatable": true,
    "folder": false,
    "type": "candidates",
    "position": null,
    "tagCandidateRestriction": []
}]
```
