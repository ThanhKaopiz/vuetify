<template>
  <div class="main-action">
    <div class="box"><img alt="" src="@/assets/avatar.png"></div>
    <div class="box"><img alt="" src="@/assets/chat.png"></div>
    <div class="box"><img alt="" src="@/assets/mic.png"></div>
    <div class="box"><img alt="" src="@/assets/leave.png"></div>
    <div class="box"><img alt="" src="@/assets/btn.png"></div>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.main-action {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: width 0.3s ease;
  .box{
    width: 50px;
    height: 50px;
  }
}

img {
  width: 100%;
  height: 100%;
}
</style>
