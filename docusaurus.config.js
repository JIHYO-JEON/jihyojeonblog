// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jihyo Jeon Blog',
  tagline: '👋',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JIHYO-JEON', // Usually your GitHub org/user name.
  projectName: 'jihyojeonblog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JIHYO-JEON/jihyojeonblog/tree/main',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JIHYO-JEON/jihyojeonblog/tree/main',
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
        title: 'Jihyo Jeon',
        logo: {
          alt: 'My Site Logo',
          src: 'img/jjsmile.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Intro',
            position: 'left',
            label: 'Study',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/JIHYO-JEON',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jihyo-jeon',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Jihyo Jeon',
            items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
            ],
          },
          {
            title: 'Life',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCvx6kNlh9K_xQf7FTgrO4DQ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/YoyoJeon1',
              },
            ],
          },
          {
            title: 'Work',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/JIHYO-JEON',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/jihyo-jeon',
              },
            ],
          },
        ],
        copyright: `© 2022. Jihyo Jeon all rights reserved. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
