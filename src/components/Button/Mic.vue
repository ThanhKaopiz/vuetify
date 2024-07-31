<template>
  <Common :icon="status?Mic:MuteMic" title="マイク"/>
</template>
<script setup lang="ts">
import Mic from '@/components/Icon/Mic.vue'
import MuteMic from "@/components/Icon/MuteMic.vue";

const props = defineProps<{
  status: boolean
}>()
</script>
