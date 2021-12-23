---
sidebar_position: 1
---
# Récupérer les annonces

```
GET /company/{company_id}/vacancies
```

### Paramètres
|Name|In|Type|Required|Description|
|---|---|---|---|---|
|company_id|path|string|true|Id de l'entreprise (à ne pas confondre avec le slug)|

### Réponse
|Name|Type|Description|
|---|---|---|
id|string|Clé de l'annonce|
vacancy_id|integer|Id de l'annonce|
slug|string|Slug de l'annonce|
reference|string|Référence de l'annonce|
title|string|Titre de l'annonce|
description|string|Description de l'entreprise|
experience|integer|Nombre d'années d'expérience|
mission|string|Descriptif du poste|
profile|string|Descriptif du profil recherché|
salary|integer|Salaire pour le poste|
status|integer|Statut de l'annonce|
language|enum|Langue ex: fr_FR|
contract_type_id|integer|Id du type de contrat|
education_level_id|integer|Id du niveau d'étude demandé|
activity_id|integer|Id du secteur d'activité|
channel_id|integer|Id de la filière|
metier_id|integer|Id du métier|
company_id|integer|Id de l'entreprise|
mensuality|enum|Descriptif du salaire (y: annuel, m:mensuel, h: horaire)|
apply_url|url||
currency|enum|Monnaie ex : "EUR" |
created_at|date|Date de création de l'annonce|
updated_at|date|Date de mise à jour de l'annonce|
start_date|date|Date de début de contrat|
end_date|date|Date de fin de contrat|
driver_license|boolean|Permis de conduire obligatoire|
remote|boolean|Télétravail possible|
handicap|boolean|Ouvert aux travailleurs handicapés|
partial|boolean|Temps partiel|
kanban|boolean||
slug_mail|string|slug de l'adresse mail de candidature|



