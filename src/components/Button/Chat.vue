<template>
  <Common :icon="showChat?FillChat:Chat" title="チャット" variant="stacked"/>
</template>
<script setup lang="ts">
import Chat from '@/components/Icon/Chat.vue'
import FillChat from "@/components/Icon/FillChat.vue";

const props = defineProps(['showChat'])
</script>
