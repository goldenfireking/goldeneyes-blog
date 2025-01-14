import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// 前端学习资料
export const StudyDataNavData: NavData = {
  title: "前端学习资料",
  items: [
    {
      icon: "/images/mdn.png",
      title: "MDN | Web 开发者指南",
      desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资",
      link: "https://developer.mozilla.org/zh-CN",
    },
    {
      icon: "/images/cainiao.png",
      title: "菜鸟教程",
      desc: "学的不仅是技术，更是梦想！",
      link: "https://www.runoob.com",
    },
    {
      icon: "/images/nodejsjishuzhan.jpeg",
      title: "Nodejs技术栈",
      desc: "本文档是作者 @五月君 从事 Node.js 开发以来的学习历程。",
      link: "https://www.nodejs.red",
    },
    {
      icon: "/images/ruanyifenges6.png",
      title: "ECMAScript 6 入门",
      desc: "阮一峰的经典ES6入门",
      link: "https://es6.ruanyifeng.com/",
    },
    {
      icon: "/images/now-js-study.png",
      title: "现代 JavaScript 教程",
      desc: "本教程全面介绍 JavaScript 核心语法，覆盖了 ES5 和 DOM 规范的所有内容。",
      link: "https://wangdoc.com/javascript/",
    },
    {
      icon: "/images/learn-git-branch.ico",
      title: "Learn Git Branching",
      desc: "Learn Git Branching在网站提供的沙盒中学习Git中的分支操作，从简入难渐进学习，非常的有趣。",
      link: "https://learngitbranching.js.org/?locale=zh_CN",
    },
    {
      icon: "/images/dtawio-demo.png",
      title: "Excalidraw(画图神器)",
      desc: "这个网站可以画一些流程图之类的图片",
      link: "https://excalidraw.com/",
    },
    {
      icon: "",
      title: "",
      desc: "",
      link: "",
    },
  ],
};
