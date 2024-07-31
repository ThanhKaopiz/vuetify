<template>
  <Common :icon="status?Camera:MuteCamera" title="カメラ"/>
</template>
<script setup lang="ts">
import Camera from '@/components/Icon/Camera.vue'
import MuteCamera from "@/components/Icon/MuteCamera.vue";

const props = defineProps<{
  status: boolean
}>()
</script>
