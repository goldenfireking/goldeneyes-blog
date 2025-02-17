import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// 微信小程序
export const MiniappNavData: NavData = {
  title: "微信小程序",
  items: [
    {
      icon: "/images/uniapp.png",
      title: "uni-app",
      desc: "uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。",
      link: "https://uniapp.dcloud.net.cn/",
      github: "https://github.com/dcloudio/uni-app",
    },
    {
      icon: "/images/tarojs.png",
      title: "Taro",
      desc: "Taro 是一个开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发 微信 / 京东 / 百度 / 支付宝 / 字节跳动 / QQ / 飞书 / 快手 小程序 / H5 / RN 等应用。",
      link: "https://docs.taro.zone/docs/",
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
