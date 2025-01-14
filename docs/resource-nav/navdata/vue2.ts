import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// Vue2生态
export const Vue2NavData: NavData = {
  title: "Vue2",
  items: [
    {
      icon: "/images/vue2.svg",
      title: "Vue 2",
      desc: "渐进式 JavaScript 框架",
      link: "https://v2.cn.vuejs.org",
    },
    {
      icon: "/images/vuerouter2.svg",
      title: "Vue Router",
      desc: "Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由",
      link: "https://router.vuejs.org/zh",
    },
    {
      icon: "/images/nuxt2.png",
      title: "Nuxt.js",
      desc: "一个基于 Vue.js 的通用应用框架",
      link: "https://www.nuxt.com.cn",
    },
    {
      icon: "/images/element.svg",
      title: "Element UI",
      desc: "Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",
      link: "https://element.eleme.cn/#/zh-CN",
    },
    {
      icon: "/images/vant2.png",
      title: "Vant",
      desc: "轻量、可定制的移动端 Vue2 组件库",
      link: "https://vant-ui.github.io/vant/v2/#/zh-CN",
    },
    {
      icon: "/images/cube2.png",
      title: "Cube UI",
      desc: "基于 Vue.js 实现的精致移动端组件库",
      link: "https://didi.github.io/cube-ui",
    },
    {
      icon: "/images/nut2.png",
      title: "NutUI",
      desc: "京东风格的轻量级移动端组件库",
      link: "https://nutui.jd.com",
    },
    {
      icon: "/images/adv2.svg",
      title: "Ant Design Vue",
      desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
      link: "https://www.antdv.com/components/overview-cn",
    },
    {
      icon: "/images/tdesign2.png",
      title: "TDesign",
      desc: "TDesign 适配桌面端的组件库，适合在 Vue2 技术栈项目中使用。",
      link: "https://tdesign.tencent.com/vue",
      github: "https://github.com/Tencent/tdesign-vue",
    },
    {
      icon: "/images/vue2.svg",
      title: "Vue CLI",
      desc: "🛠️ Vue.js 开发的标准工具",
      link: "https://cli.vuejs.org/zh",
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
