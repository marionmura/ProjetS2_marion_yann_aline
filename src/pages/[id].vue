<script setup lang="ts">

import TemplateArticle from '@/components/TemplateArticle.vue';

import { pb } from '@/backend' ;
import type { ArticlesResponse, ArticlesBlogResponse } from '@/pocketbase-types'

import { oneIA } from "@/backend";
const props = defineProps<{
    id: string
}>()
const unArticle = await oneIA(props.id)
</script>

<template>
    <div>
        <TemplateArticle v-bind="{...unArticle}"/>
        
        <!-- <div v-for="uneoeuvre of listeoeuvres">
            <p>{{ uneoeuvre.nom_oeuvre }}</p>
            </div> -->
    </div>
</template>