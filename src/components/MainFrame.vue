<template>
  <div>
    <Minus class="zoom-button" @click="handClick" />
    <div class="main-content" />
    <MenuAction />
  </div>
</template>
<script lang="ts" setup>
  import Minus from '@/components/Button/Minus.vue'

  const showMain = ref(inject('showMain'))

  const handClick = () => {
    if (showMain.value) {
      showMain.value = !showMain.value
    }
  }
</script>
<style lang="scss" scoped>

.zoom-button{
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.main-content{
  width: 100%;
  height: 400px;
  background: white;
}
</style>
