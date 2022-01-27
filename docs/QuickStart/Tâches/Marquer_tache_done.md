---
sidebar_position: 3
description: Comment marquer une tâche comme terminée grâce à l'API Flatchr
---


# Fermer une tâche

Lorsque qu'une tâche a été effectuée vous pouvez la fermer grâce à l'API.


## Requête


```jsx
PUT /company/{companyID}/task/{taskID}
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](../getting_started#identifiant-de-lentreprise)
taskID|path|string|<center>✔️</center>|Identifiant de la tâche
done|path|boolean|<center>✔️</center>|Mettre la valeur à true pour marquer une tâche comme effectuée


### Exemples de requête


```jsx title="Requête cURL"
curl -X PUT https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/task/vYJA39J3q5plNQwE
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"done":true}'
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

```
