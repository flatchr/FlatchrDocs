---
sidebar_position: 1
description: Comment récupérer les tâches grâce à l'API Flatchr
---


# Récupérer les tâches

Vous pouvez récupérer les tâches crées dans l'application grâce à l'API.


## Requête


```jsx
GET /company/{companyID}/tasks
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyId|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise) 


### Exemples de requête


```jsx title="Requête cURL"
curl -X GET https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/tasks
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|string|Identifiant de la tâche|
description|string|Description de la tâche|
value|[string]|Sur quel élement(s) porte la tâche : member pour un utilisateur et applicant pour un candidat|
type|string|Type (toujours égal à "task")|
date|timestamp|Date de la tâche|
done|boolean|Est ce que la tâche a été faite ?|


### Exemple de réponse

```json
[
    {
        "id": "rENkKd8r0e93xYGM",
        "description": "Hello Jeanne, \n\ntu pourras suprimer les colonnes :\n\" A recevoir\" \"A appeler\" et Cvs en attente\" stp \npour ne pas créer de confusion pour les utilisateurs et pour éviter de fausses manip ..\n\nmerci d'avance @+\n\nNicolas ",
        "value": [
            "member=ZmQNJ9MLLGp5LwDB"
        ],
        "type": "task",
        "date": "2021-09-21T13:10:08.991Z",
        "done": true
    },
    {
        "id": "r8q3Bp4Vl3n0RMgL",
        "description": "A relancer suite à l'annulation de sa visio ",
        "value": [
            "applicant=BEjyY9lwpB9nZl7o"
        ],
        "type": "task",
        "date": "2021-09-22T07:00:00.000Z",
        "done": true
    },
    {
        "id": "vYJA39J3q5plNQwE",
        "description": "Penses bien à envoyer un mail de sans suite lorsque tu archives un candidat",
        "value": [
            "member=ZmPNJ9LLLMp5LwDB"
        ],
        "type": "task",
        "date": "2021-09-24T09:42:47.000Z",
        "done": true
    }
]
```
