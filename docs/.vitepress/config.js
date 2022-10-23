export default {
    title: 'AspNetCore.StartupTemplate',
    description: 'Asp.Net Core Webapi项目快速启动模板',
    themeConfig: {
        siteTitle: 'AspNetCore.StartupTemplate',
        logo:'/logo.png',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 Created By 李正浩'
          },
        sidebar: [
            {
              text: '指南',
              items: [
                { text: '介绍', link: '/introduction/' },
                { text: '缓存', link: '/introduction/缓存' },
                { text: '依赖注入', link: '/introduction/依赖注入' },
                { text: '模型绑定', link: '/introduction/模型绑定' },
                { text: '模型映射', link: '/introduction/模型映射' },
                { text: 'ORM', link: '/introduction/ORM' },
                { text: '雪花ID', link: '/introduction/雪花ID' },
                { text: '消息总线', link: '/introduction/消息总线' },
                { text: '分布式事务', link: '/introduction/分布式事务' },
                { text: '定时任务', link: '/introduction/定时任务' },
                { text: '代码生成器', link: '/introduction/代码生成器' },
                { text: '数据库版本迁移', link: '/introduction/数据库版本迁移' },
                { text: '身份认证', link: '/introduction/身份认证' },
                { text: '服务注册发现', link: '/introduction/服务注册发现' },
                { text: '系统监控', link: '/introduction/系统监控' },
                { text: '单元测试', link: '/introduction/单元测试' },
                { text: '集成测试', link: '/introduction/集成测试' },
                { text: '压力测试', link: '/introduction/压力测试' }
              ]
            }
          ],
        nav: [
            { text: '主页', link: '/introduction/' },
          ],
          socialLinks: [
            { icon: 'github', link: 'https://github.com/li-zheng-hao/AspNetCore.StartupTemplate' },
            
          ],
          
      },
      
  }