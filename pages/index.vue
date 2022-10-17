<script setup lang="ts">
const { $notion } = useNuxtApp()
const { data } = await useAsyncData("notion-index", () => $notion.getPageBlocks("6613c65443bc48d29445e7ef9fd066f2"))
const { mapPageUrl, pageLinkOptions } = useProps()
</script>

<template>
  <div>
    <NotionRenderer :blockMap="data" fullPage prism katex :mapPageUrl="mapPageUrl" :pageLinkOptions="pageLinkOptions" />
  </div>
</template>
