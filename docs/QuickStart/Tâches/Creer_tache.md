---
sidebar_position: 2
description: Comment créer une tâche grâce à l'API Flatchr
---


# Créer une tâche

Vous pouvez créer une tâche grâce à l'API.


## Requête


```jsx
POST /company/{companyID}/task
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyId|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise) 
description|query|string|<center>✔️</center>|Description de la tâche|
date|query|timestamp|<center>✔️</center>|Date de la tâche|
email|query|boolean||True pour envoyer des notification par email
value|query|[string]|<center>✔️</center>|Sur quoi porte la tâche ("applicant=[applicant](../../Schemas/applicant).id" ou "member=[user.id](../../Schemas/Referentiels/users)")
users|query|[string]|<center>✔️</center>|Les utilisateurs qui vont voir la tâche (ex: ["[user.id](../../Schemas/Referentiels/users)"])
memberId|query|string|<center>✔️</center>|L'identifiant de l'[utilisateur](../../Schemas/Referentiels/users) créant la tâche


### Exemples de requête


```jsx title="Requête cURL"
curl -X POST 'https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/task'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"description":"Traiter ses mails","date":"2022-02-12T18:55:00.000Z","email":true,"value":["member=JBMQj09ZW7pxoRLO"],"users":["JBMQj09ZW7pxoRLO"],"memberId":"JBMQj09ZW7pxoRLO"}'
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
    "id": "X2kea8pXr0nN1o0B",
    "description": "Traiter ses mails curl",
    "value": ["member=JBMQj09ZW7pxoRLO"],
    "type": "task",
    "date": "2022-02-12T18:55:00.000Z",
    "done": false
}
```
