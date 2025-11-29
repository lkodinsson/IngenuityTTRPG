// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ingenuity',
  tagline: 'There are no bad ideas',
  favicon: 'img/IngenuityLogo.png',
  //favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ingenuityrpg.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lkodinsson', // Usually your GitHub org/user name.
  projectName: 'IngenuityTTRPG', // Usually your repo name.

  onBrokenLinks: 'warn',
  onDuplicateRoutes: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [require.resolve('docusaurus-lunr-search'), {
      maxHits: 6,
      fields: {
        title: { boost: 1 },
        content: { boost: 100 },
        keywords: { boost: 10 },
      },
    }],
    () => ({
      name: "custom-yaml-loader",
      configureWebpack() {
        return {
          module: {
            rules: [
              {
                test: /\.ya?ml$/,
                use: "yaml-loader",
              },
            ],
          },
        };
      },
    }),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/lkodinsson/ingenuityttrpg/tree/main/',
          routeBasePath: '/',
        },
        blog: {
          routeBasePath: '/news',
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/lkodinsson/ingenuityttrpg/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'INGENUITY',
        logo: {
          alt: 'Ingenuity Logo',
          src: 'img/IngenuityLogo.png'
          //src: 'img/logo.svg',
        },
        items: [
          /*{
            type: 'doc',
            sidebarId: 'rules',
            position: 'left',
            label: 'Rules',
          },*/
          {to: '/rules', label: 'Rules', position: 'left'},
          {to: '/resources', label: 'Resources', position: 'left'},
          {to: '/news', label: 'News', position: 'left'},
          {
            href: 'https://github.com/lkodinsson/ingenuityttrpg',
            //label: 'GitHub',
            'aria-label': 'GitHub repository',
            className: "header-github-link",
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
              {
                label: 'License',
                to: '/license',
              },
            ],
          },
          {
            title: 'Sections',
            items: [
              {
                label: 'Rules',
                to: '/rules',
              },
              {
                label: 'Resources',
                to: '/resources',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Discord',
                href: 'https://discord.com/',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/lkodinsson/ingenuityTTRPG',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Loki Karolius Odinsson<a style='color: white' href='/secret'>.</a> Built with Docusaurus.`
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
