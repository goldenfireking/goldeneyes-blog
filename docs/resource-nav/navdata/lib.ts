import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// JavaScript框架类库
export const LibNavData: NavData = {
  title: "JavaScript库",
  items: [
    {
      icon: "/images/Svelte.svg",
      title: "Svelte",
      desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
      link: "https://svelte.dev",
    },
    {
      icon: "/icons/jquery.svg",
      title: "jQuery中文文档",
      desc: "一个兼容多浏览器的 JavaScript 框架",
      link: "https://jquery.cuishifeng.cn",
    },
    {
      icon: "/images/lodash.png",
      title: "Lodash",
      desc: "Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。",
      link: "https://www.lodashjs.com",
    },
    {
      icon: "/images/rxjs.png",
      title: "RxJS",
      desc: "RxJS 是一个使用可观察序列编写异步和基于事件的程序的库。",
      link: "https://rxjs.tech",
    },
    {
      icon: "/images/dayjs.png",
      title: "Dayjs",
      desc: "Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间。",
      link: "https://dayjs.fenxianglu.cn",
    },
    {
      icon: "/images/axios.png",
      title: "Axios",
      desc: "Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js",
      link: "https://www.axios-http.cn",
    },
    {
      icon: "/images/socket1.png",
      title: "Socket.IO",
      desc: "Socket.IO 是一个库，可以在客户端和服务器之间实现 低延迟, 双向 和 基于事件的 通信。",
      link: "https://socket.io/zh-CN/",
    },
    {
      icon: "",
      title: "",
      desc: "",
      link: "",
      github: "",
    },
    {
      icon: "",
      title: "",
      desc: "",
      link: "",
      github: "",
    },
    {
      icon: "",
      title: "",
      desc: "",
      link: "",
      github: "",
    },
  ],
};
