import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// 常用工具
export const ToolNavData: NavData = {
  title: "实用工具",
  items: [
    {
      icon: "/images/caniuse.png",
      title: "Can I use",
      desc: "前端 API 兼容性查询",
      link: "https://caniuse.com",
    },
    {
      icon: "/images/onlinetool.png",
      title: "在线工具",
      desc: "开发人员的工具箱",
      link: "https://tool.lu",
    },
    {
      icon: "/images/bootcdn.png",
      title: "BootCDN",
      desc: "稳定、快速、免费的前端开源项目 CDN 加速服务。",
      link: "https://www.bootcdn.cn",
    },
    {
      icon: "/images/iconfont.svg",
      title: "iconfont",
      desc: "一个专业而且强大的图标库",
      link: "https://www.iconfont.cn",
    },
    {
      icon: "/images/emoji.png",
      title: "Emoji",
      desc: "Emoji表情大全，你想要的表情，这里都有",
      link: "https://www.emojiall.com/zh-hans",
    },
    {
      icon: "/images/nginxconf.png",
      title: "专业Nginx配置",
      desc: "配置高性能、安全、稳定的NGINX服务器的最简单方法。",
      link: "https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN",
    },
    {
      icon: "/images/regconf.png",
      title: "正则大全",
      desc: "常用正则大全, 支持web / vscode / idea / Alfred Workflow多平台",
      link: "https://any-rule.vercel.app/",
    },
    {
      icon: "/images/refrence.svg",
      title: "Quick Reference",
      desc: "为开发人员分享快速参考备忘清单【速查表】",
      link: "https://wangchujiang.com/reference/index.html",
    },
    {
      icon: "/images/jsd.png",
      title: "JSDelivr",
      desc: "一个免费的CDN开源项目",
      link: "https://www.jsdelivr.com/",
    },
    {
      icon: "/images/transform.png",
      title: "transform",
      desc: "各类数据格式与对象转换",
      link: "https://transform.tools",
    },
    {
      icon: "/images/aste.png",
      title: "AST Explorer",
      desc: "一个 Web 工具，用于探索由各种解析器生成的 AST 语法树",
      link: "https://astexplorer.net/",
    },
    {
      icon: "/images/githubpage.png",
      title: "Github主页生成器",
      desc: "一个Github 个人主页 README 生成器",
      link: "https://rahuldkjain.github.io/gh-profile-readme-generator",
    },
    {
      icon: "/images/codeg.png",
      title: "代码图片生成器",
      desc: "8 种配色、快捷键，把代码变成精美的图片",
      link: "https://ray.so",
    },
    {
      icon: "/images/colorf.png",
      title: "Color Hunt",
      desc: "拥有多套配色方案，并能看到配色方案的受欢迎程度。",
      link: "https://colorhunt.co",
    },
    {
      icon: "/images/monkey.png",
      title: "猿如意",
      desc: "猿如意是一款面向开发者的辅助开发工具箱，包含了效率工具、开发工具下载，教程文档，代码片段搜索，全网搜索等功能模块。帮助开发者提升开发效率，帮你从“问题”找到“答案”。",
      link: "https://devbit.csdn.net",
    },
    {
      icon: "/images/Boardmix.png",
      title: "Boardmix",
      desc: "Boardmix博思白板，集自由布局、画笔、便签、多媒体呈现、脑图、文档多种创意表达能力于一体，激发团队创造力无限延伸",
      link: "https://boardmix.cn",
    },
    {
      icon: "/images/speed.png",
      title: "PageSpeed",
      desc: "在线网站性能评测工具",
      link: "https://pagespeed.web.dev",
    },
    {
      icon: "/images/process.png",
      title: "ProcessOn",
      desc: "专业强大的作图工具，支持多人实时在线协作，可用于原型图、UML、BPMN、网络拓扑图等多种图形绘制",
      link: "https://www.processon.com/",
    },
    {
      icon: "/images/iconpark.svg",
      title: "IconPark",
      desc: "丰富多彩的图标资源库免费使用",
      link: "https://iconpark.oceanengine.com/",
    },
    {
      icon: "/images/colorxxx.png",
      title: "Colorsinspo",
      desc: "如果你想搞一个自己的组件库，网站，不知道配色的就可以自己来配色",
      link: "https://colorsinspo.com",
    },
    {
      icon: "/images/eventloop.png",
      title: "EventLoop 可视化",
      desc: "EventLoop 可视化",
      link: "https://www.jsv9000.app",
    },
    {
      icon: "/images/html2md.ico",
      title: "html2md",
      desc: "专业将html页面转为markdown，支持CSDN、掘金、简书、思否、博客园、开源中国等",
      link: "https://www.helloworld.net/html2md",
    },
    {
      icon: "",
      title: "",
      desc: "",
      link: "",
    },
  ],
};
