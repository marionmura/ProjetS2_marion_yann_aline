<script setup lang="ts">
  import { pb } from '@/backend' ;
  import type { ArticlesResponse } from '@/pocketbase-types';

  const props: ArticlesResponse = defineProps<ArticlesResponse>()

  // const img0= props.image
  // // // si pas d'image (undefined) garde undefined
  // const urlImg = pb.files.getUrl(props, img0, { thumb: '100x200' })
</script>

<template>
    <div>
      {{ nom }},
      {{ paragraphe }}
    </div>
</template>