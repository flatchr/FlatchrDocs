// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flatchr Docs',
  tagline: 'flatchr.io | Logiciel de recrutement',
  url: 'https://developers.flatchr.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'alexiscolonnaflatchr', // Usually your GitHub org/user name.
  projectName: 'FlatchrDocs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

        },
        blog: {
          showReadingTime: true,

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
        
      
    ],   
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Flatchr Docs',
        logo: {
          alt: 'Logo Fl',
          src: 'img/logo.svg',
        },
        items: [
          
          {
            type: 'doc',
            docId: 'getting_started',
            position: 'left',
            label: 'API',
          },
          {to: '/site-carriere', label: 'Site Carrière', position: 'left'},
          {to: '/sso', label: 'SSO', position: 'left'},
          {to: '/webhooks', label: 'Webhooks', position: 'left'},
          {href: 'https://www.postman.com/flatchr/workspace/flatchr-public-api/overview', label: 'Run in Postman', position: 'right',className:'postman_navbar__link'},
          
        ],
      },
      footer: {
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'API',
                to: '/docs/getting_started',
              },
              {to: '/site-carriere', label: 'Site Carrière'},
              {to: '/sso', label: 'SSO'},
              {to: '/webhooks', label: 'Webhooks'},
              {href: 'https://www.postman.com/flatchr/workspace/flatchr-public-api/overview', label: 'Run in Postman',className:'postman_footer__link-item'},
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/flatchr/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Flatchr',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/flatchr.io/',
              },

            ],
          },
          {
            title: 'En savoir plus',
            items: [

              {
                label: 'Flatchr.io',
                href: 'https://www.flatchr.io/',
              },
              {
                label: 'Blog',
                href: 'https://blog.flatchr.io/',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Flatchr International `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: '🌙',
          darkIconStyle: {
            marginLeft: '2px',
          },
          lightIcon: '☀️',
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      },
    }),
};

module.exports =config,{

  presets: [
    [
      'redocusaurus',
      {
        specs: [{
          specUrl: 'https://redocly.github.io/redoc/openapi.yaml',
        }],
      }
    ],
  ],
};