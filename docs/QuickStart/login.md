---
sidebar_position: 1
description: Comment récupérer un token utilisateur
---


# Login

Pour certaines requêtes il est nécessaire de les effectuer avec un token utilisateur que vous pouvez récupérer de la manière suivante : 


## Requête


```jsx
POST /user/login
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
email||boolean|<center>✔️</center>|L'email du compte utilisateur
password||string|<center>✔️</center>|Le mot de passe du compte



### Exemples de requête


```jsx title="Requête cURL"
curl -X POST 'api.demo.flatchr.io/user/login' 
    -H 'Content-Type: application/json' 
    -d '{"email":"test@flatchr.io",
        "password":"#Poulpe45"}'
```



## Réponse
|Name|Type|Description|
|---|---|---|
statusCode|integer|le statut de la requête|
token|string|Le token utilisateur|

### Exemple de réponse

```json
{
    "statusCode": 200,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWlmQGZsYXRjaHIuaW8iLCKpYXQiOjE2NDQ8NDkxNjQsImV4cCI6MTY0NTM4MTE2NH0.yfbr7HQjx90eZdXr9gEQ7FfqQoV4Lm53oZDhC0DMmMU"
}
```
