import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// AI智能
export const AINavData: NavData = {
  title: "AI智能",
  items: [
    {
      icon: "/images/chatgpt.svg",
      title: "Chatgpt",
      desc: "Chatgpt是一个基于 GPT-3 的聊天机器人",
      link: "https://chatgpt.com/",
    },
    {
      icon: "/images/kimi.png",
      title: "Kimi",
      desc: "Kimi是一款学生和职场人的新质生产力工具",
      link: "https://kimi.moonshot.cn/",
    },
    // {
    //   icon: "",
    //   title: "",
    //   desc: "",
    //   link: "",
    // },
  ],
};
