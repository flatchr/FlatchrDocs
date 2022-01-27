# members
:::tip astuce

La liste des utilisateurs peut être récupérée avec la requête : 

```jsx
    GET company/{companyId}/members?fields=user
```

La requête retourne des information sur le membre ainsi qu'un objet **user** dont un champs **id**

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)

Exemple : 

```json
[
    {
        "id": "K8AbY1n7ODnLgJNk",
        "role_id": 2,
        "external_id": null,
        "company_id": 60,
        "created_at": "2021-04-29T12:34:31.001Z",
        "user": {
            "id": "KL5kDWnbaLdyawrb",
            "user_id": 276,
            "firstname": "Eva",
            "lastname": "Laurent",
            "email": "eva.laurent@flatchr.io",
            "phone": null,
            "use_email": false,
            "status": 1,
            "language": "fr_FR",
            "created_at": "2019-09-11T14:19:22.875Z",
            "updated_at": "2022-01-17T17:42:36.020Z",
            "token_vyte": "c686ebd8b7a3c1b418926ea1a345fe48811d3593e5ef92f53a00411bf4af5fd0",
            "timezone": "Europe/Paris",
            "gmail_last_sync_id": null,
            "gmail_last_sync_date": null,
            "company": "Flatchr"
        },
        "last_login": "2021-11-16T16:29:35.589Z"
    },
    {
        "id": "BXzbPjpo259Y51y0",
        "role_id": 3,
        "external_id": null,
        "company_id": 60,
        "created_at": "2022-01-21T14:07:48.077Z",
        "user": {
            "id": "0D86rjpgG6pE17eX",
            "user_id": 385,
            "firstname": "Alexis",
            "lastname": "Dupont",
            "email": "alexis.dupont@flatchr.io",
            "phone": null,
            "use_email": false,
            "status": 4,
            "language": "fr_FR",
            "created_at": "2022-01-21T14:07:48.066Z",
            "updated_at": "2022-01-26T18:03:06.339Z",
            "token_vyte": "55ee416016508984f18f9e8367ddfd74cfa84e525e7470c8e9f7ff94b4432142",
            "timezone": "Europe/Paris",
            "gmail_last_sync_id": null,
            "gmail_last_sync_date": null,
            "company": "L'entreprise "
        },
        "last_login": null
    },
    {
        "id": "Vw67MknKWenJ1203",
        "role_id": 2,
        "external_id": null,
        "company_id": 60,
        "created_at": "2020-02-13T14:04:36.265Z",
        "user": {
            "id": "JBMQj09ZZ79xoRLO",
            "user_id": 281,
            "firstname": "Florent",
            "lastname": "Pelletier",
            "email": "florent.pelletier@flatchr.io",
            "phone": null,
            "use_email": false,
            "status": 2,
            "language": "fr_FR",
            "created_at": "2020-02-13T14:04:36.244Z",
            "updated_at": "2022-01-26T10:24:28.216Z",
            "token_vyte": "c3569fc15529c81df17895568d36743177e5cd6f7266cbcc6fabee068a20cf41",
            "timezone": "Europe/Paris",
            "gmail_last_sync_id": null,
            "gmail_last_sync_date": null,
            "company": "La Jolie Entreprise"
        },
        "last_login": null
    }
]
```

:::






