# SSO

Il est possible de se connecter à [flatchr.io](https://www.flatchr.io/) grâce à la technologie SSO *(Single Sign On)*

## Qu'est-ce que le SSO ? 


Le SSO *(Single Sign On)* est une technologie permettant d’accéder à différents serveurs  avec un système d’authentification unique.
En fait, c'est une clé unique que l'on va pouvoir utiliser pour accéder à de multiples services, sites webs, applications... 

Vous l'avez tous déjà utilisé ! 
Vous connaissez ce fameux bouton "Connexion avec Google" ou bien "Connexion avec Facebook" ? Ca, c'est du SSO.


:::note En savoir plus

Pour en apprendre davantage sur le SSO vous pouvez aller lire l'[article](https://blog.flatchr.io/sso-single-sign-on-authentification-unique) de Martin, notre CTO, qui vous dit tout sur cette technologie ! 

:::

## Quelles normes SSO sont pris en charge par Flatchr ?


Flatchr peut s'intégrer aux outils utilisant la norme SAML2 ou OpenID. 

Les principaux *Enterprise Providers* (GSuite, Microsoft Azure AD, ADFS, LDAP, Ping Federate) sont pris en charge par notre plateforme. 

## Comment activer le SSO ? 

Pour activer le SSO sur votre compte flatchr rapprochez vous de votre Customer Success Manager ou de [notre support](mailto:support@flatchr.io).

Afin de faciliter le traitement de vos demandes indiquez nous les informations suivantes : 
- Quel système utilisez vous ? (SAML 2.0, OpenID, Enterprise Provider)
- Combien d'utilisateurs / connexion simultannées prévoyez vous ? (Un user est un utilisateur se connectant au moins 1 fois dans le mois.)
- Quel Enterprise Identity Provider utilisez-vous ? 
- Utilisez vous un système pour gérer les connexions ? (MA Active Directory, OneLogin, Google Apps, Okta ...)

## Intégration technique

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="adfs" label="ADFS" default>

:::info

Votre équipe technique doit nous fournir un lien du type : `https://<adfs_domainname>/FederationMetadata/2007-06/FederationMetadata.xml`

:::

</TabItem>
<TabItem value="MAAD" label="Microsoft Azure AD" >


:::info

Il faudra demander à votre équipe technique de réaliser les étapes suivantes : 

1. Se rendre dans Azure Active Directory, cliquer sur **Inscriptions d’applications** et compléter les champs suivants :
    - Nom d’affiche => mettre **Flatchr SSO**
    - Type de comptes, choisir **Comptes dans cet annuaire d'organisation uniquement**
    - Dans le champ Uri de redirection, remplir: `https://login.flatchr.io/auth/realms/flatchr/broker/[votre slug flatchr]/endpoint`
    - Cliquez sur **S’inscrire**


2. Dans la nouvelle fenêtre, se rendre sur “Certificats & secrets”
    - Cliquer sur **Nouveau secret client**
    - Dans la description, mettre **flatchr** et indiquer **jamais** en date d'expiration


3. Cliquer sur **API autorisée**, puis sur **Microsoft Graph** et enfin **Autorisations déléguées**.
    - Cocher email, profile, User>User.read, Directory.Read.All, Directory.AccessAsUser.All
    - Puis enregistrer


Une fois ces actions réalisées, il faudra nous communiquer les information suivantes : 
- l’ID de l'application (client)
- la valeur du secret généré (et non le secret ID)
- votre nom de domaine microsoft
- votre tenant ID AD (id de locataire Azure Active Directory)


Vous pouvez trouver un pas à pas en image sur [ce guide](https://playbook.stakater.com/content/workshop/aad-in-openshift.html).

:::

</TabItem>
</Tabs>


