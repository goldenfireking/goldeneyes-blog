import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// CSS
export const CssNavData: NavData = {
  title: "CSS",
  items: [
    {
      icon: "/images/postcss.svg",
      title: "PostCSS",
      desc: "一个用 JavaScript 转换 CSS 的工具",
      link: "https://postcss.org",
    },
    {
      icon: "/images/sass.svg",
      title: "Sass",
      desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
      link: "https://www.sass.hk/docs",
    },
    {
      icon: "/images/less.png",
      title: "Less",
      desc: "Less是一门向后兼容的 CSS 扩展语言。",
      link: "https://less.bootcss.com",
    },
    {
      icon: "/images/tailwindcss.png",
      title: "TailwindCSS 中文网",
      desc: "一个功能类优先的 CSS 框架",
      link: "https://www.tailwindcss.cn",
    },
    {
      icon: "/images/Bootstrap.png",
      title: "Bootstrap",
      desc: "Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。",
      link: "https://www.bootcss.com",
    },
    {
      icon: "/images/zui.png",
      title: "ZUI",
      desc: "一个基于 Bootstrap 深度定制开源前端实践方案，帮助你快速构建现代跨屏应用。",
      link: "https://www.openzui.com",
    },
    {
      icon: "/images/hype4.png",
      title: "HYPE4",
      desc: "透明玻璃态生成器",
      link: "https://hype4.academy/tools/glassmorphism-generator",
    },
    {
      icon: "/images/shenqiui.png",
      title: "神奇UI样式",
      desc: "我们赋予任何人创建、分享和使用用 CSS 和 HTML 制作的漂亮自定义元素的权力。",
      link: "https://uiverse.io",
    },
    {
      icon: "/images/cssfx.png",
      title: "CSSFX",
      desc: "一个精心制作的集合设计的重点是流动性，简单性和易用性。使用最小标记的 CSS 支持",
      link: "https://cssfx.netlify.app",
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
