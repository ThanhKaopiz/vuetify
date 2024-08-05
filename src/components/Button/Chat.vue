<template>
  <Common :icon="showChat? Fill:Chat" title="チャット" variant="stacked"/>
</template>
<script setup lang="ts">
import Chat from '@/components/Icon/Chat.vue'
import Fill from "@/components/Icon/Fill.vue";

const props = defineProps<{
  showChat: boolean
}>()
</script>
