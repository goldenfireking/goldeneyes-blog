import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/goldeneyes-blog/',
  title: "Goldeneyes Blog",
  description: "前端/UX/UX",
  lang: 'zh-CN',
  ignoreDeadLinks: true, // 忽略死链接
  lastUpdated: true, // 显示最后更新时间
  markdown: {
    // 代码块的风格
    theme: 'monokai'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '资源导航', activeMatch: '/resource-nav', link: '/resource-nav/' },
      { text: '前端', activeMatch: '/frontend', link: '/frontend/' },
      { text: 'UIUX', activeMatch: '/uiux', link: '/uiux/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright:
        `Copyright © ${new Date().getFullYear()}`,
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // make this `root` if you want to translate the default locale
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    outline: {
      level: [1, 4] // 目录的h标题展示级别，此处展示1-4级
    },
    outlineTitle: '目录',
    docFooter: {
      prev: '上一个',
      next: '下一个',
    }
  }
})
