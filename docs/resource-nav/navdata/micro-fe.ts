import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// 微前端板块
export const MicroFeNavData: NavData = {
  title: "微前端",
  items: [
    {
      icon: "/images/singlespa.svg",
      title: "Single-SPA",
      desc: "Single-spa 是一个将多个单页面应用聚合为一个整体应用的 JavaScript 微前端框架",
      link: "https://zh-hans.single-spa.js.org",
    },
    {
      icon: "/images/qiankuns.png",
      title: "qiankun",
      desc: "qiankun 是一个基于 single-spa 的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。",
      link: "https://qiankun.umijs.org/zh",
    },
    {
      icon: "/images/icework.png",
      title: "飞冰 IceStark",
      desc: "是飞冰团队针对大型系统提供的微前端解决方案，基于 React 的应用研发框架，开箱即用，同时支持移动端和桌面端",
      link: "https://v3.ice.work",
    },
    {
      icon: "/images/microapp.png",
      title: "MicroApp",
      desc: "一款简约、高效、功能强大的微前端框架",
      link: "https://micro-zoe.github.io/micro-app",
    },
    {
      icon: "/images/wujie.png",
      title: "无界",
      desc: "极致的微前端框架，基于 WebComponent 容器 + iframe 沙箱",
      link: "https://wujie-micro.github.io/doc",
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
