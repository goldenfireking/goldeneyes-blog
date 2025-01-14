import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// CICD
export const CICDNavData: NavData = {
  title: "前端DevOps",
  items: [
    {
      icon: "/images/docker.webp",
      title: "Docker从入门到实践",
      desc: "最好的Docker与K8S入门电子书",
      link: "https://yeasy.gitbook.io/docker_practice/",
    },
    {
      icon: "/images/docker.webp",
      title: "Docker Tips",
      desc: "麦兜搞IT-Docker",
      link: "https://www.docker.tips",
    },
    {
      icon: "/images/kubernetes.png",
      title: "kubernetes官网",
      desc: "最流行的容器编排管理工具",
      link: "https://kubernetes.io/zh-cn/",
    },
    {
      icon: "/images/k8ssq.png",
      title: "k8s中文社区",
      desc: "学习K8S必上的中文社区",
      link: "https://www.kubernetes.org.cn/",
    },
    {
      icon: "/images/jenkins.png",
      title: "Jenkins",
      desc: "Jenkins中文文档",
      link: "https://www.jenkins.io/zh/doc",
    },
    {
      icon: "/images/linuxsearch.png",
      title: "Linux命令搜索",
      desc: "Linux命令搜索引擎:最专业的Linux命令大全，内容包含Linux命令手册、详解、学习，值得收藏的Linux命令速查手册。",
      link: "https://wangchujiang.com/linux-command/",
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
