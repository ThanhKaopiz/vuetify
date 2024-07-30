<template>
  <div class="main-content">
    <ZoomButton class="zoom-button" />
    <div class="inner-content" />
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
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: height 0.3s ease 0s;
}

.inner-content{
  background: white;
  height: 100%;
  height: 100%;
}
</style>
