---
title: Site Carrière
description: Comment intégrer votre site carrière Flatchr dans votre site internet ou intranet ? 
---
 
 # Intégration d'un iframe
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
</style>

Le site [flatchr.io](https://www.flatchr.io/) permet l’intégration des annonces du client sur son site internet ou intranet sans nécessité de connaissance informatique et par simple copier-coller, grâce à l'utilisation d'un iframe.

Si vous voulez récupérer vos annonces au format JSON, vous pouvez le faire grâce à l'API 👉 [Récupérer les annonces](/docs/QuickStart/Recuperer_les_annonces).

<br/>

:::caution Important
Pour paramétrer l'iframe, il faut récupérer votre `slug`, c’est la référence unique de votre entreprise qui se trouve dans l’URL de votre site carrière

**Exemple:** dans https://avivacuisines.flatchr.io, `avivacuisines` est la référence unique ou "slug").
:::info

<br/>

## Site Internet

Pour intégrer vos annonces à votre site internet, vous trouverez ci-dessous le code de l'iframe à rajouter dans la page où vous souhaitez les voir apparaître. 

Il vous suffit de remplacer `[slug]` par votre référence unique d'entreprise. 



```html title="Code de l'iframe"
<iframe 
src="https://careers.flatchr.io/company/[slug]?iframe=true" 
width="100%" height="600px" frameborder="0" marginwidth="0" marginheight="0">
</iframe>
```
<center>
  <a class="button button--primary" href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe" style={{'background-color':'#04AA6D','border-color':'#04AA6D','font-family':"'Source Sans Pro', sans-serif",'font-size':'16px'}}>
    Testez votre Iframe avec   <strong><em>W3Schools-Try It Yourself</em></strong> <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg> 
  </a>
</center>

<br/>


:::info
Pour plus d'informations sur les iframe vous pouvez vous référer à [cette documentation](https://www.w3schools.com/html/html_iframe.asp).
:::

<br/>

### Personalisation {#arguments-iframe}

L'iframe peut être personnalisé grâce à plusieurs arguments : 
<table>
  <thead>
  <tr>
    <th>Paramètre</th><th>Type</th><th>Obligatoire</th><th>Description</th>
  </tr>
  </thead>
  <tr>
    <td>iframe</td><td>string</td><td style={{textAlign:"center"}}>✔️</td><td>Suppression des styles</td>
  </tr>
  <tr>
    <td>iframe_redirect_url</td><td>boolean</td><td></td><td>Ouverture dans l'iframe</td>
  </tr>
  <tr>
    <td>background_color</td><td>hex code</td><td></td><td>Couleur du fond</td>
  </tr>
  <tr>
    <td>btn_color</td><td>hex code</td><td></td><td>Couleur des boutons</td>
  </tr>
  <tr>
    <td>submit_text</td><td>string</td><td></td><td>Texte sur les boutons</td>
  </tr>
  <tr>
    <td>disable_email</td><td>boolean</td><td></td><td>Désactiver l'email obligatoire pour candidater</td>
  </tr>
  <tr>
    <td>career_redirect_url</td><td>url</td><td></td><td>URL de redirection vers le site carrière</td>
  </tr>
  <tr>
    <td>response_text</td><td>string</td><td></td><td>Texte de remerciement</td>
  </tr>
  <tr>
    <td>spontaneous</td><td>string</td><td></td><td>Emplacement de la candidature spontanée (top, bottom, none)</td>
  </tr>
  <tr>
    <td>iframe_redirect_url</td><td>boolean</td><td></td><td>Ouverture dans l'iframe</td>
  </tr>  
</table>

<br/>

:::note
Les arguments doivent être rajoutés dans l'url et préfixé par le symbole **&**
:::


<br/>

## Intranet
:::info Important

Dans votre espace flatchr [**Administration** > **Avancée**](http://app.flatchr.io/#/board/settings/advanced) vous devez indiquer l'adresse URL de votre site intranet dans la rubrique `Configuration Intranet` afin que votre iframe ne puisse s'afficher que dans votre espace intranet.

:::

Pour intégrer vos annonces à votre site intranet, vous trouverez ci-dessous le code de l'iframe à rajouter dans la page où vous souhaitez les voir apparaître. 

Il vous suffit de remplacer `[slug]` par votre référence unique d'entreprise. 

```html title="Code de l'iframe"
<iframe 
src="https://careers.flatchr.io/intranet/[slug]?iframe=true" 
width="100%" height="600px" frameborder="0" marginwidth="0" marginheight="0">
</iframe>
```
<center>
  <a class="button button--primary" href="https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe" style={{'background-color':'#04AA6D','border-color':'#04AA6D','font-family':"'Source Sans Pro', sans-serif",'font-size':'16px'}}>
    Testez votre Iframe avec   <strong><em>W3Schools-Try It Yourself</em></strong> <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg> 
  </a>
</center>

<br/>


:::info

Pour plus d'informations sur les iframe vous pouvez vous référer à [cette documentation](https://www.w3schools.com/html/html_iframe.asp).
:::

<br/>

### Personalisation

:::note
L'iframe peut être personnalisé avec les mêmes [arguments](#arguments-iframe) que pour le site internet.
:::