---
sidebar_position: 1
---
# Récupérer les annonces

:::caution Important

L'URL racine est ici https://carrers.flatchr.io

:::

### Requête

Il est possible de récupérer vos annonces au format JSON en utilisant la requête suivante : 

```
GET /company/{slug}.json
```

:::tip Slug
Votre `slug` est la référence unique de votre entreprise qui se trouve dans l’URL de votre site carrière.

**Exemple:** dans https://avivacuisines.flatchr.io, `avivacuisines` est la référence unique ou "slug").

:::info

### Exemple de requête
```jsx title="Requête cURL pour Flatchr"
curl -X GET https://careers.flatchr.io/company/flatchr.json \ -H 'Accept: */*'
```

### Réponse
|Name|Type|Description|
|---|---|---|
id|string|Clé de la diffusion|
offer_id|integer|Identifiant offre jobboards|
external_id|||
published|boolean|L'annonce est elle publiée ou non|
created_at|timestamp|Date de création de la diffusion|
**-vacancy**|||
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
**--tags**|||
contract_type_id|integer|Id du type de contrat|
education_level_id|integer|Id du niveau d'étude demandé|
activity_id|integer|Id du secteur d'activité|
channel_id|integer|Id de la filière|
metier_id|integer|Id du métier|
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
**--options**|||
contract_type|string|Type de contrat|
education_level|string|Niveau d'éducation demandé|
activity|string|Secteur d'activité|
channel|string|Filière|
metier|string|Métier|
**--address**|||
adressFormatted|string|Adresse de l'entreprise|
**--company**|||
slug_mail|string|slug de l'email pour l'envoi de candidatures|
**--questions**|||
vacancy_id|string|Identifiant de l'annonce|

<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>string</td>
<td>Clé de la diffusion</td>
</tr>
<tr>
<td>offer_id</td>
<td>integer</td>
<td>Identifiant offre jobboards</td>
</tr>
<tr>
<td>external_id</td>
<td></td>
<td></td>
</tr>
<tr>
<td>published</td>
<td>boolean</td>
<td>L&#39;annonce est elle publiée ou non</td>
</tr>
<tr>
<td>created_at</td>
<td>timestamp</td>
<td>Date de création de la diffusion</td>
</tr>
<tr>
<td colspan="3">
    <details>
    <summary>vacancy</summary>
    <table>
    <thead>
    <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><strong>-vacancy</strong></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>id</td>
    <td>string</td>
    <td>Identifiant</td>
    </tr>
    <tr>
    <td>vacancy_id</td>
    <td>string</td>
    <td>Id de l&#39;annonce</td>
    </tr>
    <tr>
    <td>slug</td>
    <td>string</td>
    <td>Slug de l&#39;annonce</td>
    </tr>
    <tr>
    <td>reference</td>
    <td>string</td>
    <td>Référence de l&#39;annonce</td>
    </tr>
    <tr>
    <td>title</td>
    <td>string</td>
    <td>Titre de l&#39;annonce</td>
    </tr>
    <tr>
    <td>description</td>
    <td>string</td>
    <td>Description de l&#39;entreprise</td>
    </tr>
    <tr>
    <td>experience</td>
    <td>integer</td>
    <td>Nombre d&#39;années d&#39;expérience</td>
    </tr>
    <tr>
    <td>mission</td>
    <td>string</td>
    <td>Descriptif du poste</td>
    </tr>
    <tr>
    <td>profile</td>
    <td>string</td>
    <td>Descriptif du profil recherché</td>
    </tr>
    <tr>
    <td>salary</td>
    <td>integer</td>
    <td>Salaire pour le poste</td>
    </tr>
    <tr>
    <td>status</td>
    <td>integer</td>
    <td>Statut de l&#39;annonce</td>
    </tr>
    <tr>
    <td>language</td>
    <td>enum</td>
    <td>Langue ex: fr_FR</td>
    </tr>
    <tr>
    <td><strong>--tags</strong></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>contract_type_id</td>
    <td>integer</td>
    <td>Id du type de contrat</td>
    </tr>
    <tr>
    <td>education_level_id</td>
    <td>integer</td>
    <td>Id du niveau d&#39;étude demandé</td>
    </tr>
    <tr>
    <td>activity_id</td>
    <td>integer</td>
    <td>Id du secteur d&#39;activité</td>
    </tr>
    <tr>
    <td>channel_id</td>
    <td>integer</td>
    <td>Id de la filière</td>
    </tr>
    <tr>
    <td>metier_id</td>
    <td>integer</td>
    <td>Id du métier</td>
    </tr>
    <tr>
    <td>company_id</td>
    <td>integer</td>
    <td>Id de l&#39;entreprise</td>
    </tr>
    <tr>
    <td>mensuality</td>
    <td>enum</td>
    <td>Descriptif du salaire (y: annuel, m:mensuel, h: horaire)</td>
    </tr>
    <tr>
    <td>apply_url</td>
    <td>url</td>
    <td></td>
    </tr>
    <tr>
    <td>currency</td>
    <td>enum</td>
    <td>Monnaie ex : &quot;EUR&quot;</td>
    </tr>
    <tr>
    <td>created_at</td>
    <td>timestamp</td>
    <td>Date de création de l&#39;annonce</td>
    </tr>
    <tr>
    <td>updated_at</td>
    <td>timestamp</td>
    <td>Date de mise à jour de l&#39;annonce</td>
    </tr>
    <tr>
    <td>start_date</td>
    <td>timestamp</td>
    <td>Date de début de contrat</td>
    </tr>
    <tr>
    <td>end_date</td>
    <td>timestamp</td>
    <td>Date de fin de contrat</td>
    </tr>
    <tr>
    <td>driver_license</td>
    <td>boolean</td>
    <td>Permis de conduire obligatoire</td>
    </tr>
    <tr>
    <td>remote</td>
    <td>boolean</td>
    <td>Télétravail possible</td>
    </tr>
    <tr>
    <td>handicap</td>
    <td>boolean</td>
    <td>Ouvert aux travailleurs handicapés</td>
    </tr>
    <tr>
    <td>partial</td>
    <td>boolean</td>
    <td>Temps partiel</td>
    </tr>
    <tr>
    <td>kanban</td>
    <td>boolean</td>
    <td></td>
    </tr>
    <tr>
    <td>meta_title</td>
    <td></td>
    </tr>
    <tr>
    <td>meta_description</td>
    <td></td>
    </tr>
    <tr>
    <td>meta_tags</td>
    <td></td>
    </tr>
    <tr>
    <td><strong>--options</strong></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>contract_type</td>
    <td>string</td>
    <td>Type de contrat</td>
    </tr>
    <tr>
    <td>education_level</td>
    <td>string</td>
    <td>Niveau d&#39;éducation demandé</td>
    </tr>
    <tr>
    <td>activity</td>
    <td>string</td>
    <td>Secteur d&#39;activité</td>
    </tr>
    <tr>
    <td>channel</td>
    <td>string</td>
    <td>Filière</td>
    </tr>
    <tr>
    <td>metier</td>
    <td>string</td>
    <td>Métier</td>
    </tr>
    <tr>
    <td><strong>--address</strong></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>adressFormatted</td>
    <td>string</td>
    <td>Adresse de l&#39;entreprise</td>
    </tr>
    <tr>
    <td><strong>--company</strong></td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>slug_mail</td>
    <td>string</td>
    <td>slug de l&#39;email pour l&#39;envoi de candidatures</td>
    </tr>
    <tr>
    <td><strong>--questions</strong></td>
    <td></td>
    <td></td>
    </tr>
    </tbody>
    </table>
    </details>
    </td>
    </tr>
<tr>
<td>vacancy_id</td>
<td>string</td>
<td>Identifiant de l'annonce</td>
</tr>
</tbody>
</table>






### Exemple de réponse

<details>
<summary> Voir l'exemple </summary>

```json
{
    "items": [{
        "id": "k0M5O9yaXbX9xbQB",
        "offer_id": 98,
        "external_id": null,
        "published": true,
        "created_at": "2022-01-03T13:28:36.705Z",
        "vacancy": {
            "id": "z7gWQnjq6gdJRakA",
            "vacancy_id": 84512,
            "slug": "z7gwqnjq6gdjraka-account-executive-saas-h-f",
            "reference": "CDI-SALES-EXEC-Dec 2021",
            "title": "Account Executive SaaS H/F ",
            "description": "<p><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"http://www.flatchr.io\">Flatchr</a>, est une start-up SaaS à destination du service RH des PME et ETI françaises.</p><p>Nos clients adorent nos solutions, nos commerciaux et nos méthodes de vente.</p><p></p><p>Si tu nous rejoins, il est fort probable que tu deviennes accro à ton job et à tes prospects.</p><p>Le potentiel marché est immense (70% des PME /&nbsp;ETI&nbsp; ne sont pas digitalisées). Pour relever le challenge, nous recrutons nos futurs poulpes* de la vente</p><p></p><p><em>*Poulpes : Personnalités douées, agiles et attachantes qui fascinent par leur&nbsp;intelligence.</em></p>",
            "experience": 2,
            "mission": "<p>Au sein de l'équipe commerciale, tu auras la responsabilité de convertir un maximum d'opportunités qualifiées en clients fidèles et convaincus par notre vision du recrutement.<br></p><p>A ce titre, tu auras les missions suivantes :</p><ul><li><p>Identifier et qualifier les projets dans un océan de leads envoyés par le Marketing et BDR</p></li><li><p>Maîtriser notre méthode de vente* en 8 étapes</p></li><li><p>Conseiller tes prospects dans leur stratégie et outils de recrutement</p></li><li><p>Démontrer la valeur ajoutée de nos solutions</p></li><li><p>Organiser le suivi et les relances de tes prospects</p></li><li><p>Maîtriser notre CRM et établir tes prévisions de ventes pour ton manager</p></li><li><p>Développer ton réseau pour obtenir des nouveaux leads</p></li></ul><p><em>*Nous suivons et appliquons le programme de vente qui cartonne dans le SaaS #PETER PAN</em></p>",
            "profile": "<ul><li><p>Première expérience dans le SaaS appréciée, débutants à hauts potentiels sont les bienvenus</p></li><li><p>A l’aise dans un environnement qui évolue vite, vous combinez un esprit analytique, de l’organisation et une grande aisance relationnelle, tant à l’écrit qu’à l’oral.</p></li><li><p>Bienveillance et joie de vivre avec un bon sens de l’humour</p></li></ul><p>En résumé, si tu es une personnalité attachante, analytique, méthodique, dynamique et déterminée, nous avons le poste rêvé pour t'épanouir et t'exprimer dans notre équipe d'Account Executives.</p><p></p><p>Envie d'en savoir plus sur le job ?</p><p>1 - Réponds à cette annonce, on y accordera la plus grande importance</p><p>2 - Si ta candidature est qualifiée, tu recevras un appel de ton futur manager : <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" href=\"https://www.linkedin.com/search/results/all/?keywords=thomas%20campagnac&amp;origin=RICH_QUERY_SUGGESTION&amp;position=0&amp;searchId=ae5a83dc-815e-48c7-98f3-7de5918951d2&amp;sid=wM%2C\">Thomas</a></p><p>3 - Si on veut aller plus loin ensemble dans le process, tu seras invité(e) à prendre un café dans nos locaux</p><p>4 - Si tu trouves que le café est excellent, tu seras invité à revenir pour rencontrer notre CEO <br></p><p></p><p><u>Package</u> :</p><p>50K€ la première année</p><p>70K€ - 90K€ la deuxième année</p><p></p><p><u>Les plus</u> :</p><p>Avantages en nature : Carte Tickets Restaurant (Swile)</p><p>Mutuelle : Alan ✅</p><p>Afterwork &amp; team building 🎉</p><p><br></p>",
            "salary": "0",
            "status": 1,
            "language": "fr_FR",
            "tags": [{
                "id": "5G8oWlpGZB963O1D",
                "tag_id": 509,
                "company_id": 29,
                "title": "SALES",
                "values": "",
                "multiple": false,
                "visible": true,
                "creatable": false,
                "folder": true,
                "type": "vacancies",
                "position": 44
            }],
            "contract_type_id": 1,
            "education_level_id": 6,
            "activity_id": 25,
            "channel_id": 2,
            "metier_id": 49,
            "company_id": 29,
            "mensuality": "y",
            "apply_url": null,
            "currency": "EUR",
            "created_at": "2021-12-08T17:13:41.700Z",
            "updated_at": "2022-01-03T13:27:29.938Z",
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
                "optionals": ["phone"],
                "motivation": true,
                "social_links": true
            },
            "contract_type": "CDI",
            "education_level": "Bac +5",
            "activity": "Internet",
            "channel": "Commerce / Vente",
            "metier": "Commercial conseil",
            "address": {
                "locality": "Paris",
                "location_lat": "48.84238970000",
                "location_lng": "2.26226280000",
                "postal_code": "75016",
                "route": "Boulevard Exelmans",
                "street_number": "58",
                "administrative_area_level_1": "Île-de-France",
                "administrative_area_level_2": "Paris",
                "formatted_address": "58 Boulevard Exelmans, 75016 Paris, France",
                "country": "France"
            },
            "addressFormatted": "58 Boulevard Exelmans, 75016 Paris, France",
            "company": {
                "id": "2zNDRr9BMnYqQyEK",
                "name": "Flatchr",
                "description": "<div>Flatchr, c’est avant tout une équipe motivée et efficace, pour vous épauler à tous les niveaux de votre processus de recrutement. Petite ou grande entreprise, quels que soient vos besoins, nous avons des solutions pour vous faciliter la tâche, pour améliorer l’organisation et l’efficacité de vos embauches, et en fin de compte, pour vous faire économiser du temps et de l’argent.&nbsp;<br><br>Plus qu’une simple application, Flatchr représente un mouvement de modernisation global où la technologie est au service de l’humain. Nous estimons que le recrutement a trop longtemps été laissé-pour-compte, et nous faisons notre maximum pour qu’il reprenne une place centrale en entreprise, tout en entrant enfin dans le XXIème siècle !<br><br><br><br></div><div><br></div>",
                "slug": "flatchr",
                "size": "2",
                "email": "valentin@flatchr.io",
                "web": "http://www.flatchr.io",
                "phone": "+33 9 72 12 15 95",
                "status": 1,
                "siren": "803289560",
                "hosts": "",
                "vat_number": "FR13803289560",
                "hunter": false,
                "public": false,
                "activity_id": 25,
                "created_at": "2015-05-04T14:31:21.541Z",
                "hiddens": {
                    "auto": true
                },
                "shared_applicants": true,
                "shields": [{
                    "slug": "vacancies",
                    "tags": [1845, 1856, 1837],
                    "roles": []
                }, {
                    "slug": "items",
                    "tags": [1845, 1856, 1837, 1972],
                    "roles": []
                }, {
                    "slug": "items_premium",
                    "tags": [1845, 1856, 1837, 509],
                    "roles": []
                }, {
                    "slug": "cvtheque",
                    "tags": [1845, 1856, 1837, 1582],
                    "roles": []
                }, {
                    "slug": "statistics",
                    "tags": [1845, 1856, 1837],
                    "roles": []
                }, {
                    "slug": "templates",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "tags",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "keys",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "sources",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "scores",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "snippets",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "queries",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }],
                "ip_addresses": null,
                "billing_name": "Flatchr",
                "retention_policy": "J'accepte que l'entreprise conserve mes données personnelles pendant une durée de 2 ans afin d'être recontacté(e) pour de nouvelles opportunités",
                "activity": {
                    "id": 25,
                    "text": "Internet"
                },
                "meta_logo": "https://flatchr-production.imgix.net/2zNDRr9BMnYqQyEK.png",
                "logo": "https://flatchr-production.imgix.net/2zNDRr9BMnYqQyEK.png",
                "address": {
                    "locality": "Paris",
                    "location_lat": "48.84241930000",
                    "location_lng": "2.26104850000",
                    "postal_code": "75016",
                    "route": "Boulevard Exelmans",
                    "street_number": "59",
                    "administrative_area_level_1": "Île-de-France",
                    "administrative_area_level_2": "Département de Paris",
                    "formatted_address": "59 Boulevard Exelmans, 75016 Paris, France",
                    "country": "France"
                },
                "addressFormatted": "59 Boulevard Exelmans, 75016 Paris, France"
            },
            "slug_mail": "dk435w",
            "questions": []
        },
        "vacancy_id": 84512
    }, {
        "id": "vYJA39JXbY3dlNQw",
        "offer_id": 98,
        "external_id": null,
        "published": true,
        "created_at": "2021-12-21T14:29:52.876Z",
        "vacancy": {
            "id": "XzbPjpo3bY1pY51y",
            "vacancy_id": 86913,
            "slug": "xzbpjpo3by1py51y-account-executive-small-business",
            "reference": "Sales (S1)",
            "title": "Account Executive Small Business",
            "description": "<p>Vous gérez une équipe commerciale de deux alternants, en charge de l’acquisition, de la qualification et de la transformation de nouveaux clients.</p><p>A court terme vous êtes opérationnel sur le suivi et le closing des opportunités et participez au recrutement et à l’amélioration continue des performances de votre équipe.</p><p>A moyen terme et à la faveur de la croissance de nos effectifs, vous vous spécialisez sur la transformation et vous faites mûrir nos process pour atteindre de meilleures performances.</p>",
            "experience": 2,
            "mission": "<p>Dans le cadre de votre mission, vous serez amené à recruter et encadrer 2 alternants (1 personne actuellement). Vous serez en charge de mener des actions permettant de qualifier les opportunités générées par votre équipe ou l’équipe marketing et de les transformer en client.</p><ul><li><p>Identifier leurs besoins et le match avec notre proposition de valeur</p></li><li><p>Identifier les meilleurs moyens pour activer ces prospects : timing, localisation de la prise de décision, stratégie de relance</p></li><li><p>Réaliser des démonstrations pour engager nos prospects</p></li></ul><p>Maintenir une information de qualité sur notre CRM, dans nos process et réaliser des reporting régulier sur vos performances</p><ul><li><p>Enregistrer toutes les communications et actions réalisées</p></li><li><p>Garantir la fiabilité de ces informations</p></li><li><p>Mettre à jour et faire évoluer nos process</p></li><li><p>Créer et présenter des reporting</p></li></ul>",
            "profile": "<ul><li><p>Vous avez déjà une première expérience commerciale</p></li><li><p>Meneur(se) d’équipe, vous savez fédérer dans un esprit proactif de conquête et de performances commerciales</p></li><li><p>Vous avez de très bonnes facultés de communication écrites et orales</p></li><li><p>Vous êtes autonome, organisé et savez construire, améliorer et faire respecter un processus commercial</p></li><li><p>Vous êtes orienté résultat</p></li><li><p>Vous êtes à l’écoute des critiques et à la recherche de votre amélioration permanente</p></li><li><p>Vous êtes à l’aise avec la manipulation d’outils techniques modernes, dans un esprit de growth-hacking</p></li></ul>",
            "salary": "0",
            "status": 1,
            "language": "fr_FR",
            "tags": [{
                "id": "2yObP9O632n1ZYBW",
                "tag_id": 1972,
                "company_id": 29,
                "title": "MARKETING",
                "values": "",
                "multiple": false,
                "visible": true,
                "creatable": false,
                "folder": true,
                "type": "vacancies",
                "position": 44
            }],
            "contract_type_id": 1,
            "education_level_id": 5,
            "activity_id": 25,
            "channel_id": 2,
            "metier_id": 54,
            "company_id": 29,
            "mensuality": "y",
            "apply_url": null,
            "currency": "EUR",
            "created_at": "2021-12-21T14:29:52.175Z",
            "updated_at": "2021-12-21T14:29:52.187Z",
            "start_date": null,
            "end_date": null,
            "driver_license": false,
            "remote": true,
            "handicap": false,
            "partial": false,
            "kanban": true,
            "meta_title": null,
            "meta_description": null,
            "meta_tags": null,
            "options": null,
            "contract_type": "CDI",
            "education_level": "Bac +3",
            "activity": "Internet",
            "channel": "Commerce / Vente",
            "metier": "Chargé d'affaire / technico commercial",
            "address": {
                "locality": "Paris",
                "location_lat": "48.84204980000",
                "location_lng": "2.26063560000",
                "postal_code": "75016",
                "route": "Boulevard Exelmans",
                "street_number": "59",
                "administrative_area_level_1": "Île-de-France",
                "administrative_area_level_2": "Département de Paris",
                "formatted_address": "59 Boulevard Exelmans, 75016 Paris, France",
                "country": "France"
            },
            "addressFormatted": "59 Boulevard Exelmans, 75016 Paris, France",
            "company": {
                "id": "2zNDRr9BMnYqQyEK",
                "name": "Flatchr",
                "description": "<div>Flatchr, c’est avant tout une équipe motivée et efficace, pour vous épauler à tous les niveaux de votre processus de recrutement. Petite ou grande entreprise, quels que soient vos besoins, nous avons des solutions pour vous faciliter la tâche, pour améliorer l’organisation et l’efficacité de vos embauches, et en fin de compte, pour vous faire économiser du temps et de l’argent.&nbsp;<br><br>Plus qu’une simple application, Flatchr représente un mouvement de modernisation global où la technologie est au service de l’humain. Nous estimons que le recrutement a trop longtemps été laissé-pour-compte, et nous faisons notre maximum pour qu’il reprenne une place centrale en entreprise, tout en entrant enfin dans le XXIème siècle !<br><br><br><br></div><div><br></div>",
                "slug": "flatchr",
                "size": "2",
                "email": "valentin@flatchr.io",
                "web": "http://www.flatchr.io",
                "phone": "+33 9 72 12 15 95",
                "status": 1,
                "siren": "803289560",
                "hosts": "",
                "vat_number": "FR13803289560",
                "hunter": false,
                "public": false,
                "activity_id": 25,
                "created_at": "2015-05-04T14:31:21.541Z",
                "hiddens": {
                    "auto": true
                },
                "shared_applicants": true,
                "shields": [{
                    "slug": "vacancies",
                    "tags": [1845, 1856, 1837],
                    "roles": []
                }, {
                    "slug": "items",
                    "tags": [1845, 1856, 1837, 1972],
                    "roles": []
                }, {
                    "slug": "items_premium",
                    "tags": [1845, 1856, 1837, 509],
                    "roles": []
                }, {
                    "slug": "cvtheque",
                    "tags": [1845, 1856, 1837, 1582],
                    "roles": []
                }, {
                    "slug": "statistics",
                    "tags": [1845, 1856, 1837],
                    "roles": []
                }, {
                    "slug": "templates",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "tags",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "keys",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "sources",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "scores",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "snippets",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }, {
                    "slug": "queries",
                    "tags": [1845, 1856, 1837],
                    "roles": [2]
                }],
                "ip_addresses": null,
                "billing_name": "Flatchr",
                "retention_policy": "J'accepte que l'entreprise conserve mes données personnelles pendant une durée de 2 ans afin d'être recontacté(e) pour de nouvelles opportunités",
                "activity": {
                    "id": 25,
                    "text": "Internet"
                },
                "meta_logo": "https://flatchr-production.imgix.net/2zNDRr9BMnYqQyEK.png",
                "logo": "https://flatchr-production.imgix.net/2zNDRr9BMnYqQyEK.png",
                "address": {
                    "locality": "Paris",
                    "location_lat": "48.84241930000",
                    "location_lng": "2.26104850000",
                    "postal_code": "75016",
                    "route": "Boulevard Exelmans",
                    "street_number": "59",
                    "administrative_area_level_1": "Île-de-France",
                    "administrative_area_level_2": "Département de Paris",
                    "formatted_address": "59 Boulevard Exelmans, 75016 Paris, France",
                    "country": "France"
                },
                "addressFormatted": "59 Boulevard Exelmans, 75016 Paris, France"
            },
            "slug_mail": "zo55ej",
            "questions": []
        },
        "vacancy_id": 86913
    }]
}
```

</details>


