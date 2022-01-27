
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
    path: '/site-carriere',
    component: ComponentCreator('/site-carriere','c1f'),
    exact: true
  },
  {
    path: '/SSO',
    component: ComponentCreator('/SSO','fb0'),
    exact: true
  },
  {
    path: '/Use%20Cases/Formulaire_personalise',
    component: ComponentCreator('/Use%20Cases/Formulaire_personalise','df6'),
    exact: true
  },
  {
    path: '/Use%20Cases/Multicomptes',
    component: ComponentCreator('/Use%20Cases/Multicomptes','85b'),
    exact: true
  },
  {
    path: '/Use%20Cases/Statistiques',
    component: ComponentCreator('/Use%20Cases/Statistiques','9b3'),
    exact: true
  },
  {
    path: '/webhooks',
    component: ComponentCreator('/webhooks','736'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','f7c'),
    routes: [
      {
        path: '/docs/getting_started',
        component: ComponentCreator('/docs/getting_started','fdc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Annonces/Recuperer_les_annonces',
        component: ComponentCreator('/docs/QuickStart/Annonces/Recuperer_les_annonces','0ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Candidats/Creer_un_candidat',
        component: ComponentCreator('/docs/QuickStart/Candidats/Creer_un_candidat','399'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Candidats/Meta_informations_candidat',
        component: ComponentCreator('/docs/QuickStart/Candidats/Meta_informations_candidat','6d9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Candidats/Recuperer_un_candidat',
        component: ComponentCreator('/docs/QuickStart/Candidats/Recuperer_un_candidat','bd2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Tâches/Creer_tache',
        component: ComponentCreator('/docs/QuickStart/Tâches/Creer_tache','ec4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Tâches/Marquer_tache_done',
        component: ComponentCreator('/docs/QuickStart/Tâches/Marquer_tache_done','8d9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/QuickStart/Tâches/Recuperer_tâches',
        component: ComponentCreator('/docs/QuickStart/Tâches/Recuperer_tâches','707'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/activity',
        component: ComponentCreator('/docs/Schemas/activity','eed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/address',
        component: ComponentCreator('/docs/Schemas/address','fe7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/answer',
        component: ComponentCreator('/docs/Schemas/answer','b32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/applicant',
        component: ComponentCreator('/docs/Schemas/applicant','578'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/candidate',
        component: ComponentCreator('/docs/Schemas/candidate','9fc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/column',
        component: ComponentCreator('/docs/Schemas/column','85a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/company',
        component: ComponentCreator('/docs/Schemas/company','f4a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/data_drag_applicant',
        component: ComponentCreator('/docs/Schemas/data_drag_applicant','290'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/data_new_applicant',
        component: ComponentCreator('/docs/Schemas/data_new_applicant','fc4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/data_new_message',
        component: ComponentCreator('/docs/Schemas/data_new_message','962'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/data_new_vacancy',
        component: ComponentCreator('/docs/Schemas/data_new_vacancy','d96'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/hiddens',
        component: ComponentCreator('/docs/Schemas/hiddens','6ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/message',
        component: ComponentCreator('/docs/Schemas/message','c41'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/options',
        component: ComponentCreator('/docs/Schemas/options','49a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/question',
        component: ComponentCreator('/docs/Schemas/question','9ee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/Referentiels/activities',
        component: ComponentCreator('/docs/Schemas/Referentiels/activities','4c2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/Referentiels/channels',
        component: ComponentCreator('/docs/Schemas/Referentiels/channels','4c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/Referentiels/contract_type',
        component: ComponentCreator('/docs/Schemas/Referentiels/contract_type','44d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/Referentiels/education_levels',
        component: ComponentCreator('/docs/Schemas/Referentiels/education_levels','5ae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/Referentiels/metiers',
        component: ComponentCreator('/docs/Schemas/Referentiels/metiers','10c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/Referentiels/users',
        component: ComponentCreator('/docs/Schemas/Referentiels/users','4c0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/shield',
        component: ComponentCreator('/docs/Schemas/shield','92f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/tag',
        component: ComponentCreator('/docs/Schemas/tag','ef3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/user',
        component: ComponentCreator('/docs/Schemas/user','d5a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Schemas/vacancy',
        component: ComponentCreator('/docs/Schemas/vacancy','3e5'),
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
