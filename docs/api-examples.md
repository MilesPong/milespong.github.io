# 运行时 API 示例

VitePress 提供了一些内置的运行时 API 来帮助你访问站点数据和页面状态。

## `useData`

`useData` 是最常用的 API，用于访问站点配置、主题配置和当前页面数据。

```vue
<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

<template>
  <div>
    <h2>站点标题: {{ site.title }}</h2>
    <p>当前页面: {{ page.title }}</p>
  </div>
</template>
```

## 实时演示

下面是一个使用 Vue 的实时演示：

<script setup>
import { ref } from 'vue'
const count = ref(0)
const isDev = import.meta.env.DEV
</script>

<button @click="count++" style="border: 1px solid var(--vp-c-brand); padding: 4px 12px; border-radius: 8px;">
  计数器: {{ count }}
</button>

<style scoped>
button {
  transition: all 0.3s ease;
}
button:hover {
  background-color: var(--vp-c-brand-soft);
}
</style>

## 环境变量

你可以访问 `import.meta.env.DEV` 来判断当前是否处于开发环境：

- 当前环境: {{ isDev ? '开发环境' : '生产环境' }}
