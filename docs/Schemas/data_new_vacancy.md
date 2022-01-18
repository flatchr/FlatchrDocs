# data (new_vacancy)

|Name|Type|Description|
|---|---|---|
user|[user](/docs/Schemas/user)|Objet représentant l'utilisateur qui a fait l'action|
vacancy|[vacancy](/docs/Schemas/vacancy)|Objet représentant l'offre d'emploi|
message|string|'<b>{firstname} {lastname}</b> a ajouté une nouvelle offre <b>{vacancy.title}</b>'|
user_id|string|Identifiant encodé de l'utilisateur|
vacancy_id|string|Identifiant encodé de l'annonce|
company|[company](/docs/Schemas/company)| Objet représentant l'entreprise (seul les champs `id` et `name` sont retournés)
