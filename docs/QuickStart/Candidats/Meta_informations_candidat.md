---
sidebar_position: 6
description: Comment rajouter des meta informations sur une fiche candidat grâce à l'API Flatchr
---


# Ajouter des meta informations

:::danger attention

Cette fonctionnalité est disponible uniquement pour nos clients ayant souscrit à l'option **CVthèque Premium**.

:::
  
<br/>
  
Cette méthode permet d'ajouter des informations additionnelles au profil d'un candidat. 

## Requête


```jsx
POST /company/{companyID}/search/candidate
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyId|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise) 
||||||
app_name|query|string||Nom de l'application insérant les données *(par exemple si utilisé par une application de parsing de CVs)*|
reference|query|string|<center>✔️</center>|Mail du candidat à updater|
type|query|string||Type de données|
value|query|object|<center>✔️</center>|Un objet contenant les données à rajouter sur la fiche candidat|


### Exemples de requête



```jsx title="Requête cURL"
curl -X POST https://api.flatchr.io/company/Wy3EOp2NP3p1KMq8/search/applicants
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
    -d '{"lastname":"{nom}"}'
```



## Réponse
|Name|Type|Description|
|---|---|---|
statuscode|string|Statut HTTP|
message|[message](../../schemas/message)|Message|

### Exemple de réponse

```json
{
    "statusCode": 200,
    "message": {
        "resource_type": "attribute",
        "action": "created"
    }
}
```
