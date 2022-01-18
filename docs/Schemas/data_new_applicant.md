# data (new_applicant)

|Name|Type|Description|
|---|---|---|
applicant|[applicant](/docs/Schemas/applicant)|Objet représentant le postulant|
candidate|[candidate](/docs/Schemas/candidate)|Objet représentant le candidat|
vacancy|[vacancy](/docs/Schemas/vacancy)|Objet représentant l'offre d'emploi|
column|integer|Identifiant de la colonne sur laquelle est le candidat|
cv|||
user|||
message|string|'Un nouveau candidat a postulé sur votre offre <b>{vacancy.title}</b>'|
applicant_id|integer|Identifiant du postulant en clair|
candidate_id|integer|Identifiant du candidat en clair|
column_id|string|Identifiant encoidé de la colonne|
vacancy_id|string|Identifiant encodé de l'annonce|
company|[company](/docs/Schemas/company)| Objet représentant l'entreprise (seul les champs `id` et `name` sont retournés)
