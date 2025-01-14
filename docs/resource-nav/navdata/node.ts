import type { NavLink } from "../type";

type NavData = {
  title: string;
  items: NavLink[];
};

// Node.js
export const NodeNavData: NavData = {
  title: "Node.js",
  items: [
    {
      icon: "/images/nodejs.png",
      title: "Node.js",
      desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
      link: "https://nodejs.org/zh-cn",
    },
    {
      icon: "/images/express.png",
      title: "Express",
      desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
      link: "https://expressjs.com",
    },
    {
      icon: "/images/koa.webp",
      title: "Koa",
      desc: "基于 Node.js 平台的下一代 web 开发框架",
      link: "https://koajs.com",
    },
    {
      icon: "/images/egg.png",
      title: "Egg",
      desc: "为企业级框架和应用而生",
      link: "https://www.eggjs.org/zh-CN",
    },
    {
      icon: "/images/nest.svg",
      title: "Nest.js 中文文档",
      desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
      link: "https://docs.nestjs.cn",
    },
    {
      icon: "/images/typeorm.png",
      title: "TypeORM",
      desc: "TypeORM 是一个采用 TypeScript 编写的用于 Node.js 的优秀 ORM 框架",
      link: "https://typeorm.bootcss.com",
    },
    {
      icon: "/images/mongoose.png",
      title: "Mongoose",
      desc: "Mongoose为模型提供了一种直接的，基于scheme结构去定义你的数据模型。",
      link: "http://mongoosejs.net",
    },
    {
      icon: "/images/nodemailer.png",
      title: "Nodemailer",
      desc: "Node.js发送邮件的模块",
      link: "https://nodemailer.com/about",
    },
    {
      icon: "/images/midway.svg",
      title: "Midway",
      desc: "Midway 是阿里巴巴 - 淘宝前端架构团队，基于渐进式理念研发的 Node.js 框架。",
      link: "https://www.midwayjs.org",
      github: "https://github.com/midwayjs/midway",
    },
    {
      icon: "/images/Sequelize.png",
      title: "Sequelize",
      desc: "Sequelize 是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能。",
      link: "https://www.sequelize.cn",
      github: "https://github.com/sequelize/sequelize",
    },
    {
      icon: "/images/prisma.png",
      title: "Prisma",
      desc: "下一代 Node.js、TypeScript、Go 的数据库 ORM",
      link: "https://prisma.yoga",
      github: "https://github.com/prisma/prisma",
    },
    {
      icon: "/images/fastify.png",
      title: "Fastify",
      desc: "Fastify，快速并且低开销的 web 框架，专为 Node.js 平台量身打造。",
      link: "https://www.fastify.cn",
      github: "https://github.com/fastify/fastify",
    },
    {
      icon: "/images/LoopBack.png",
      title: "LoopBack",
      desc: "LoopBack是使用Node.js构架API和微服务的平台。",
      link: "https://loopback.io/doc/zh/lb4/",
      github: "https://github.com/loopbackio/loopback.io",
    },
    {
      icon: "/images/pino.png",
      title: "Pino",
      desc: "Very low overhead Node.js logger",
      link: "https://getpino.io/#/",
    },
    {
      icon: "/images/Verdaccio.svg",
      title: "Verdaccio",
      desc: "一个基于 Node.js 的轻量级私有仓库",
      link: "https://verdaccio.org/zh-cn/",
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
