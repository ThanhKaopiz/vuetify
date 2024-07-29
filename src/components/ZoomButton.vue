<template>
  <div @click="handClick">
    <img alt="" src="@/assets/btn.png">
  </div>
</template>
<script lang="ts" setup>

  const showMain = inject('showMain')

  const handClick = () => {
    showMain.value = !showMain.value
  }
</script>
