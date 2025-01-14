import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// 编译&构建&打包
export const BuildNavData: NavData = {
  title: "前端工程化",
  items: [
    {
      icon: "/images/webpack.png",
      title: "Webpack 中文网",
      desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
      link: "https://www.webpackjs.com",
    },
    {
      icon: "/images/vite.svg",
      title: "Vite 中文文档",
      desc: "下一代前端工具链",
      link: "https://cn.vitejs.dev",
    },
    {
      icon: "/images/rollup.png",
      title: "Rollup",
      desc: "Rollup 是一个 JavaScript 模块打包器",
      link: "https://www.rollupjs.com",
    },
    {
      icon: "/images/babel.png",
      title: "Babel",
      desc: "Babel 是一个 JavaScript 编译器",
      link: "https://www.babeljs.cn",
    },
    // {
    //   icon: "",
    //   title: "",
    //   desc: "",
    //   link: "",
    // },
  ],
};
