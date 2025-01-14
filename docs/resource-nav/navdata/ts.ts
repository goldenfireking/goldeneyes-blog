import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// Typescript
export const TsNavData: NavData = {
  title: "TypeScript",
  items: [
    {
      icon: "/images/tsrm.png",
      title: "Typescript入门教程",
      desc: "TS入门必备教材",
      link: "https://ts.xcatliu.com",
    },
    {
      icon: "/images/tsgj.svg",
      title: "Typescript",
      desc: "TypeScript 为 JavaScript 添加了可选的类型、类和模块系统。TypeScript 支持大规模 JavaScript 应用程序开发",
      link: "https://typescript.bootcss.com",
    },
    {
      icon: "/images/srts.png",
      title: "深入理解 TypeScript",
      desc: "TS中文查询手册",
      link: "https://jkchao.github.io/typescript-book-chinese/#why",
    },
    {
      icon: "/images/typescriptchaxunshouce.svg",
      title: "TypeScript 使用指南手册",
      desc: "该工程是对 TypeScript 官方及开源社区书写的编程手册、版本发布说明等综合内容的中文翻译。 感谢 Microsoft 和开源社区的工程师们的工作，为 JavaScript 开发带来了全新的体验！",
      link: "https://typescript.xiniushu.com/PREFACE.html",
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
