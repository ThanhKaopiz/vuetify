<template>
  <v-container class="fill-height">
    <div class="container">
      <div class="main">
        <MainFrame />
      </div>
      <div class="bottom-bar">
        <div class="box"><img alt="" src="@/assets/avatar.png"></div>
        <div class="box" :class="isHidden?'hidden':''"><img alt="" src="@/assets/chat.png"></div>
        <div class="box" :class="isHidden?'hidden':''"><img alt="" src="@/assets/mic.png"></div>
        <div class="box" :class="isHidden?'hidden':''"><img alt="" src="@/assets/leave.png"></div>
        <div class="box" @click="handleToggleExpand"><img alt="" src="@/assets/btn.png"></div>
      </div>
    </div>

  </v-container>
</template>

<script setup lang="ts">
  import MainFrame from '@/components/MainFrame.vue'

  const isHidden = ref(false)

  const handleToggleExpand = () => {
    isHidden.value = !isHidden.value
  }
</script>
<style lang="scss" scoped>

.bottom-bar {
  display: flex;
  align-items: center;
}

img {
  width: 100%;
  height: 100%;
}

.box {
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  //margin: 10px;
  transition: all 0.3s ease-out;
}

.hidden {
  opacity: 0;
  transform: scale(0);
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
}

</style>
