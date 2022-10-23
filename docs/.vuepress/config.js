module.exports = {
    title: 'AspNetCore.StartupTemplate',
    description: 'AspNetCore Webapi项目快速启动模板',
    themeConfig: {
        logo: '/logo-min.png',
        nav: [
            { text: 'Github', link: 'https://github.com/li-zheng-hao/AspNetCore.StartupTemplate', target: '_blank' }
        ],
        sidebar: [
            {
                title: 'Group 1',
                path: '/foo/',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */],
                initialOpenGroupIndex: -1
            }
        ],

    }
}