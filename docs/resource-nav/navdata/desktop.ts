import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// 桌面端
export const DesktopNavData: NavData = {
  title: "桌面端",
  items: [
    {
      icon: "/images/Electron.png",
      title: "Electron",
      desc: "使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序。",
      link: "https://www.electronjs.org/zh/",
      github: "https://github.com/electron/electron",
    },
    {
      icon: "/images/Flutter.webp",
      title: "Flutter",
      desc: "Flutter 官方文档中文版，包含 SDK 下载、最新特性介绍、代码示例、开发文档、中文社区等内容。",
      link: "https://flutter.cn/",
      github: "",
    },
    {
      icon: "/images/Tauri.png",
      title: "Tauri",
      desc: "构建跨平台的快速、安全、前端隔离应用。",
      link: "https://tauri.app/zh-cn/",
      github: "https://github.com/tauri-apps/tauri",
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
