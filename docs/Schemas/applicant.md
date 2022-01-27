# applicant

|Name|Type|Description|
|---|---|---|
id|integer|Id encodé |
vacancy_id|string|Id encodé de l'annonce|
candidate_id|integer|Id en clair du candidat|
score|integer|Score du postulant|
status|integer|Statut|
created_at|timestamp|Date de création|
updated_at|timestamp|Date de mise à jour|
comment|string|Commentaire du postulant|
column_id|string|Identifiant encodé de la colonne|
comments|||
urls|||
external_id||Référence externe|
view|boolean||
anonym|boolean|Le candidat est il anonymisé|
duplicate|||
reason_id|||
applies|[]||
column|column|Objet représentant la colonne|
vacancy|vacancy|Objet représentant l'offre d'emploi|