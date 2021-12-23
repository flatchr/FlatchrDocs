
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/sites-carrieres',
    component: ComponentCreator('/sites-carrieres','a2d'),
    exact: true
  },
  {
    path: '/Webhooks',
    component: ComponentCreator('/Webhooks','a42'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','caf'),
    routes: [
      {
        path: '/docs/getting_started',
        component: ComponentCreator('/docs/getting_started','fdc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Creer_un_candidat',
        component: ComponentCreator('/docs/QuickStart/Creer_un_candidat','8ba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Recuperer_les_annonces',
        component: ComponentCreator('/docs/QuickStart/Recuperer_les_annonces','f1b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Recuperer_un_candidat',
        component: ComponentCreator('/docs/QuickStart/Recuperer_un_candidat','cf7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Use Cases/Formulaire_personalise',
        component: ComponentCreator('/docs/Use Cases/Formulaire_personalise','686'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Use Cases/Multicomptes',
        component: ComponentCreator('/docs/Use Cases/Multicomptes','d0c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Use Cases/Statistiques',
        component: ComponentCreator('/docs/Use Cases/Statistiques','b34'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
