# data (new_message)

|Name|Type|Description|
|---|---|---|
company_id|string|Identifiant encodé de l'entreprise|
user|[user](/docs/Schemas/user)|Objet représentant l'utilisateur qui a fait l'action|
applicant|[applicant](/docs/Schemas/applicant)|Objet représentant le postulant|
candidate|[candidate](/docs/Schemas/candidate)|Objet représentant le candidat|
column|[column](/docs/Schemas/column)|Objet représentant la colonne|
vacancy|[vacancy](/docs/Schemas/vacancy)|Objet représentant l'offre d'emploi|
text|string|Texte du message|
user_id|string|Identifiant encodé de l'utilisateur|
applicant_id|integer|Identifiant du postulant en clair|
candidate_id|integer|Identifiant du candidat en clair|
column_id|string|Identifiant encoidé de la colonne|
vacancy_id|string|Identifiant encodé de l'annonce|
company|[company](/docs/Schemas/company)| Objet représentant l'entreprise (seul les champs `id` et `name` sont retournés)
