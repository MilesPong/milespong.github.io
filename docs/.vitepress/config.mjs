import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Demo 演示站",
    description: "使用 VitePress 构建的精美演示站点",
    themeConfig: {
        logo: '/logo.png',
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '首页', link: '/' },
            { text: '示例', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: '介绍',
                items: [
                    { text: '开始使用', link: '/guide' },
                    { text: 'Markdown 示例', link: '/markdown-examples' },
                    { text: '运行时 API 示例', link: '/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/MilesPong/milespong.github.io' }
        ],

        footer: {
            message: '基于 VitePress 构建',
            copyright: 'Copyright © 2024-present MilesPong'
        },

        editLink: {
            pattern: 'https://github.com/MilesPong/milespong.github.io/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        search: {
            provider: 'local'
        }
    },
    // GitHub Pages 部署路径配置
    // 如果是 <username>.github.io，则为 '/'
    // 如果是 <username>.github.io/<repo>/，则为 '/<repo>/'
    base: '/',
    lastUpdated: true
})
