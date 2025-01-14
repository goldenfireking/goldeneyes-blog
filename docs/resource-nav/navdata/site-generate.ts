import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// 站点生成
export const SiteGenerateNavData: NavData = {
  title: "站点生成器",
  items: [
    {
      icon: "/images/vitepress.png",
      title: "VitePress",
      desc: "由Vite、Vue驱动的静态网站生成器",
      link: "https://vitepress.dev/",
    },
    {
      icon: "/images/vuepress.png",
      title: "VuePress",
      desc: "Vue 驱动的静态网站生成器",
      link: "https://vuepress.vuejs.org/zh",
    },
    {
      icon: "/images/hexo.png",
      title: "Hexo",
      desc: "快速、简洁且高效的博客框架",
      link: "https://hexo.io/zh-cn/",
    },
    {
      icon: "/images/Docusaurus.png",
      title: "Docusaurus",
      desc: "Docusaurus 会帮助你在极短时间内搭建漂亮的文档网站。",
      link: "https://docusaurus.io/zh-CN/docs",
    },
    {
      icon: "/images/docsify.png",
      title: "docsify",
      desc: "docsify 可以快速帮你生成文档网站",
      link: "https://docsify.js.org/#/zh-cn",
    },
    {
      icon: "/images/halo.png",
      title: "Halo",
      desc: "强大易用的开源建站工具。",
      link: "https://halo.run",
    },
    {
      icon: "/images/Astro.svg",
      title: "Astro",
      desc: "Astro 是集多功能于一体的 Web 框架，用于构建快速、以内容为中心的网站。",
      link: "https://docs.astro.build/zh-cn/getting-started",
    },
    {
      icon: "/images/dumi.png",
      title: "Dumi",
      desc: "为组件研发而生的静态站点框架",
      link: "https://d.umijs.org/",
    },
    {
      icon: "/images/mrdoc.png",
      title: "MrDoc 觅思文档",
      desc: "自托管、私有部署的在线文档管理系统和知识库。",
      link: "https://www.mrdoc.pro",
    },
    {
      icon: "",
      title: "",
      desc: "",
      link: "",
    },
    {
      icon: "",
      title: "",
      desc: "",
      link: "",
    },
    {
      icon: "",
      title: "",
      desc: "",
      link: "",
    },
  ],
};
