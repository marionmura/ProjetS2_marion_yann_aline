<script setup lang="ts">
import { pb } from '@/backend' ;
import type { ArticlesResponse, ArticlesBlogResponse } from '@/pocketbase-types'
import TemplateArticle from '@/components/TemplateArticle.vue';

import { oneIA } from "@/backend";
const props = defineProps<{
    id: string
}>()
const unArticle = await oneIA(props.id)
</script>

<template>
    <div>
        <p>TEST affichage</p>
        <TemplateArticle v-bind="{...unArticle}"/>
        
    </div>
</template>