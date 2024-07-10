

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
  provider:'local'
}
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
}
