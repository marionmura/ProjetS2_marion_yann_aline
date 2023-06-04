<script setup lang="ts">
import { pb } from '@/backend';
import { oneIA } from '@/backend';

import TemplateArticle from '@/components/TemplateArticle.vue';
import type { ArticlesResponse } from '@/pocketbase-types';

const props = defineProps<{
  id: string;
}>();

const article = await oneIA(props.id);
</script>

<template>
    <TemplateArticle v-bind="{...article}"/>
    
</template>