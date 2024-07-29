<template>
  <div>
    <ZoomButton class="zoom-button" />
    <div class="main-content" />
    <MenuAction />
  </div>
</template>
<script lang="ts" setup></script>
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
