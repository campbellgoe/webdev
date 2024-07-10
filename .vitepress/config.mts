

// https://vitepress.dev/reference/site-config
export default {
  title: "George's Blog",
  description: "Web development made easy",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'span', link: '/span' }
    ],

    sidebar: [
      {
        text: 'HTML Elements',
        items: [
          { text: 'span', link: '/span' },
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    base: '/webdev/',
    output_location: '/.vitepress/dist',
    app_build_command: 'npm run docs:build',
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
}
