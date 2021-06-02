/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Weave Gitops Docs',
  tagline: 'Weave Gitops Platform',
  url: 'https://docs.gitops.weave.works/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon_150px.png',
  organizationName: 'weaveworks', // Usually your GitHub org/user name.
  projectName: 'weave-gitops-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Weave Gitops',
      logo: {
        alt: 'Weave Gitops Logo',
        src: 'img/weave-logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Introduction',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Support',
          items: [
            {
              label: 'Contact Us',
              href: 'mailto:support@weave.works',
            },
          ],
         },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Weaveworks`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/weaveworks/weave-gitops-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/weaveworks/weave-gitops-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
