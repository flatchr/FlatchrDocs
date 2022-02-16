---
sidebar_position: 5
description: Comment archiver un candidat grâce à l'API Flatchr
---


# Archiver un candidat

Vous pouvez archiver un candidat grâce à l'API.


## Requête


```jsx
DELETE /company/{companyID}/vacancy/{vacancyID}/applicant/{applicantID}
```
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/18861404-2bd60cea-6942-4809-83e7-e8869748aa62?action=collection%2Ffork&collection-url=entityId%3D18861404-2bd60cea-6942-4809-83e7-e8869748aa62%26entityType%3Dcollection%26workspaceId%3D9ab396af-18af-4f93-809c-cddd2fbd1422)


### Paramètres
|Paramètre|In|Type|Obligatoire|Description|
|---|---|---|---|---|
companyID|path|string|<center>✔️</center>|[Identifiant de l'entreprise](/docs/getting_started#identifiant-de-lentreprise)
vacancyID|path|string|<center>✔️</center>|Identifiant de l'offre d'emploi
applicantID|path|string|<center>✔️</center>|Identifiant du candidat



### Exemples de requête


```jsx title="Requête cURL"
curl -X DELETE 'api.flatchr.io/company/0GjqBwprWAdArDl4/vacancy/Vq5r6pYxam9AmMvP/applicant/V41QG9eja5pK6Xev'
    -H "Authorization: Bearer {token}"
    -H 'Content-Type: application/json'
```



## Réponse
|Name|Type|Description|
|---|---|---|
id|string|Identifiant du candidat|
vacancy_id|string|Identifiant de l'offre d'emploi|
column_id|integer|Identifiant de la colonne dans laquelle est le candidat|
score|integer|Le score du candidat
comment|string|La lettre de motivation du candidat
create_at|timestamp|Date de création du candidat|
updated_at|timestamp|Date de mise à jour du candidat|
status|integer|Statut du candidat|
view|boolean||
anonym|boolean|Le candidat est-il anonymisé ?|
external_id|boolean|Identifiant externe du candidat|
candidate|[candidate](/docs/Schemas/candidate)|Les informations du candidat|
vacancy|[vacancy](/docs/Schemas/vacancy)|L'offre d'emploi à laquelle le candidat à postulé|
foreigner|boolean||
applies|[[applies](/docs/Schemas/applies)]|Les candidatures du candidat|


### Exemple de réponse

```json
{
    "id": "gQayv9LNBod6LXE4",
    "vacancy_id": "Vq5r6pYxam9AmMvP",
    "column_id": 1314,
    "score": 0,
    "comment": "",
    "created_at": 1645022213,
    "updated_at": 1645022486,
    "status": 0,
    "view": true,
    "anonym": false,
    "external_id": null,
    "candidate": {
        "id": "G6KzqPnN6Yn31m0l",
        "email": null,
        "firstname": "manuel",
        "lastname": "eugene",
        "urls": {},
        "created_at": "2022-02-16T14:36:53.745Z",
        "phone": null,
        "consent": true
    },
    "vacancy": {
        "id": "Vq5r6pYxam9AmMvP",
        "vacancy_id": 2403,
        "slug": "99w67mknkj7ydj1203-administrateur-reseaux-cdi-h-f",
        "reference": "Administrateur réseaux - Paris - CDI ",
        "title": "Administrateur réseaux - Paris - CDI ",
        "description": "",
        "experience": 2,
        "mission": "<p><strong>🎯<u>Vos Missions :</u></strong></p><p></p><p>Réalise et développe les architectures, les solutions techniques de réseaux de télécommunications (téléphonie, multimédia, informatique, ...), selon les besoins et la stratégie de l'entreprise ou du client.<br>Peut coordonner une équipe ou un projet.</p><p>Définir et contrôler les procédures, les protocoles d'essais, de tests ou de validation de réseaux télécoms</p>",
        "profile": "<p><strong>🔔<u>Nos attentes :</u></strong></p><p></p><p>Recueillir et définir les besoins de l'entreprise, des clients, des utilisateurs en matière de systèmes télécoms (capacité, fiabilité, sécurité, ...)<br>Concevoir un projet télécom<br>Définir et élaborer les spécifications fonctionnelles et techniques d'un réseau, d'équipements télécoms (matériel, logiciel, implantation)<br>Déterminer des composants d'architecture, des technologies, des équipements, des outils supports et les intégrer selon les spécifications<br>Dimensionner, planifier et suivre la capacité du réseau télécom et de ses interconnexions<br></p><p></p><p><strong>🌟<u>Les plus</u></strong></p><p><br>Avantages en nature : Carte Tickets Restaurant (Swile)<br>Mutuelle : Alan <br>Afterwork &amp; team building</p>",
        "salary": "0",
        "status": 1,
        "language": "fr_FR",
        "contract_type_id": 1,
        "education_level_id": 6,
        "activity_id": 23,
        "channel_id": 5,
        "metier_id": 14,
        "company_id": 99,
        "mensuality": "y",
        "apply_url": null,
        "currency": "EUR",
        "created_at": "2022-02-01T15:42:02.261Z",
        "updated_at": "2022-02-01T15:50:36.054Z",
        "start_date": null,
        "end_date": null,
        "driver_license": false,
        "remote": false,
        "handicap": false,
        "partial": false,
        "kanban": true,
        "meta_title": null,
        "meta_description": null,
        "meta_tags": null,
        "options": {
            "indeed": false,
            "linkedin": false,
            "optionals": [
                "phone"
            ],
            "motivation": true,
            "social_links": true
        },
        "company": {
            "id": "N1zj8Md6zbdYZ70J",
            "name": "Pinguin Limited",
            "description": "<p>Rejoignez la team la plus exceptionnelle de l'océan ! Tout l’écosystème marin a besoin de vous ! Venez surfer avec nous sur une magnifique vague. Embarquer dans notre sous-marin qui a débuté son parcours il y a déjà 8 ans et soyez prêts à ne jamais jeter l’ancre. Notre traversée ne fait que commencer. Nous sommes déjà 400 collaborateurs à bord de ce navire qui n’était qu’un radeau il y a quelque temps. Que vous soyez pirate ou capitaine, nous avons besoin de VOUS ! Mettez votre marinière et soyez les nouveaux à appareiller. Il ne reste que quelques places. Prêt à rejoindre l’aventure ?</p>",
            "slug": "pinguinlimited",
            "size": null,
            "email": "Lysanne_Berge@hotmail.com",
            "web": "https://www.pinguinlimited.com/",
            "phone": "+33 2904547117",
            "status": 1,
            "siren": "803289560",
            "hosts": null,
            "vat_number": null,
            "hunter": false,
            "public": false,
            "activity_id": 8,
            "created_at": "2022-01-04T15:53:36.338Z",
            "hiddens": {
                "auto": true
            },
            "shared_applicants": true,
            "shields": null,
            "ip_addresses": null,
            "billing_name": "Pinguin Limited",
            "retention_policy": "J'accepte que l'entreprise conserve mes données personnelles pendant une durée de 2 ans afin d'être recontacté(e) pour de nouvelles opportunités"
        },
        "slug_mail": "z284qz"
    },
    "foreigner": false,
    "datas": []
}
```
