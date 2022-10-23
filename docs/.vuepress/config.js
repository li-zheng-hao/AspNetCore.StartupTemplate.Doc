module.exports = {
  title: "AspNetCore.StartupTemplate",
  description: "AspNetCore Webapi项目快速启动模板",
  plugins: ["@vuepress/back-to-top"],
  lastUpdated: true,
  themeConfig: {
    logo: "/logo-min.png",
    nav: [
      {
        text: "Github",
        link: "https://github.com/li-zheng-hao/AspNetCore.StartupTemplate",
        target: "_blank",
      },
    ],
    sidebar: {
      "/guide/": [
        "",
        "模型验证",
        "依赖注入",
        "定时任务",
        "雪花ID",
        "事件总线",
        "ORM",
      ],
    },
  },
};
