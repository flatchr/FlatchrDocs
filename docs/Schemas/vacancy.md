# vacancy

|Name|Type|Description|
|---|---|---|
id|string|Identifiant|
vacancy_id|string|Id de l'annonce|
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
tags|[[tag](./tag)]|Un tableau de tag|
contract_type_id|integer|Id du [type de contrat](./referentiels/contract_type)|
education_level_id|integer|Id du [niveau d'étude](./referentiels/education_levels) demandé|
activity_id|integer|Id du [secteur d'activité](./referentiels/activities)|
channel_id|integer|Id de la [filière](./referentiels/channels)|
metier_id|integer|Id du [métier](./referentiels/metiers)|
company_id|integer|Id de l'entreprise|
mensuality|enum|Descriptif du salaire (y: annuel, m:mensuel, h: horaire)|
apply_url|url||
currency|enum|Monnaie ex : "EUR" |
created_at|timestamp|Date de création de l'annonce|
updated_at|timestamp|Date de mise à jour de l'annonce|
start_date|timestamp|Date de début de contrat|
end_date|timestamp|Date de fin de contrat|
driver_license|boolean|Permis de conduire obligatoire|
remote|boolean|Télétravail possible|
handicap|boolean|Ouvert aux travailleurs handicapés|
partial|boolean|Temps partiel|
kanban|boolean||
meta_title||
meta_description||
meta_tags||
options|[options](./options)||
contract_type|string|Type de contrat|
education_level|string|Niveau d'éducation demandé|
activity|string|Secteur d'activité|
channel|string|Filière|
metier|string|Métier|
address|[address](./address)||
adressFormatted|string|Adresse de l'entreprise|
company|[company](./company)||
slug_mail|string|slug de l'email pour l'envoi de candidatures|
questions|[[question](./question)]|Un tableau de questions|