<script setup lang="ts">
    import type { ArticlesRecord } from '@/pocketbase-types'
    const props: ArticlesRecord = defineProps<ArticlesRecord>()
    // import { allArticles } from "@/backend";
    // const listeArticles = [allArticles()]
    // const listeArticles = [
    //   {
    //   nom: "midjourney",
    //   paragraphe: "c cool",
    // },
    // {
    //   nom: "chatgpt",
    //   paragraphe: "c encore cool",
    // }]
</script>

<template>
    <div v-for="article in listeArticles" class="border-2 p-1">
      <p>nom : {{ article.nom }}</p>
      <p>paragraphe : {{ article.paragraphe }}</p>
    </div>
  </template>