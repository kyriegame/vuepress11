module.exports = {
  themeConfig: {
    //图标
    // logo: '/assets/',
    //导航栏
    title:"小喜",
    description:"前端搬砖仔",
    head: [
      ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于', link: '/about' },
      {
        text: '项目',
        ariaLabel: 'Language Menu',
        items: [
          { text: '电商后台管理系统', link: 'https://www.kyriegame.top' },
          { text: '仿淘宝商城', link: 'https://www.kyriegame.top/dist' },
          { text: 'echarts可视化数据', link: 'https://kyriegame.gitee.io/echarts' }
        ]
      },
      {
        text: '前端',
        items: [
          { text: '基本三剑客', items: [
            { text: 'html', link: '/' },
            { text: 'css', link: '/'},
            { text: 'javascprit', link: '/' }
          ] },
          { text: '前端框架', items: [
            { text: 'jQuery', link: '/' },
            { text: 'vue', link: '/' },
            { text: 'react', link: '/'}
          ] }
        ]
      },
      { text: '码云', link: 'https://gitee.com/kyriegame' },
      { text: 'github', link: 'https://github.com/kyriegame' },
    ],
    //自动生成侧边栏
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        // 'contact', /* /contact.html */
        // 'about'    /* /about.html */
      ]
    }
  }
}
