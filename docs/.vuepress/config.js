const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'See',
      description: 'A Component Library for Vue.js based on Element.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'See',
      description: '一个基于Element的Vue组件库.',
    },
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  theme: '@vuepress/theme-vue',
  themeConfig: {
    repo: 'see/see',
    editLinks: true,
    docsDir: 'docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/api/': getApiSidebar(),
          '/guide/': getGuideSidebar('Guide', 'Advanced'),
          '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
        },
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/zh/api/': getApiSidebar(),
          '/zh/guide/': getGuideSidebar('指南', '深入'),
          '/zh/plugin/': getPluginSidebar('插件', '介绍', '官方插件'),
        },
      },
    },
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ['@vuepress/medium-zoom', true],
    [
      'container',
      {
        type: 'vue',
        before: '<pre class="vue-container"><code>',
        after: '</code></pre>',
      },
    ],
    [
      'container',
      {
        type: 'upgrade',
        before: info => `<UpgradePath title="${info}">`,
        after: '</UpgradePath>',
      },
    ],
    ['flowchart'],
  ],
  extraWatchFiles: ['.vuepress/nav/en.js', '.vuepress/nav/zh.js'],
})

function getApiSidebar() {
  return ['cli', 'node']
}

function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy',
      ],
    },
    {
      title: groupB,
      collapsable: false,
      children: ['frontmatter', 'permalinks', 'markdown-slot', 'global-computed'],
    },
  ]
}

const officalPlugins = fs
  .readdirSync(path.resolve(__dirname, '../plugin/official'))
  .map(filename => 'official/' + filename.slice(0, -3))
  .sort()

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
  return [
    {
      title: pluginTitle,
      collapsable: false,
      children: [
        ['', pluginIntro],
        'using-a-plugin',
        'writing-a-plugin',
        'life-cycle',
        'option-api',
        'context-api',
      ],
    },
    {
      title: officialPluginTitle,
      collapsable: false,
      children: officalPlugins,
    },
  ]
}
