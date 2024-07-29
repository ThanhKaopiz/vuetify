<template>
  <v-container class="fill-height">
    <div class="container">
      <div :class="showMain?'main':'hidden-main'">
        <MainFrame />
      </div>
      <div v-show="!showMain" class="bottom-bar">
        <div class="box" @click="handleShowMainFrame"><img alt="" src="@/assets/avatar.png"></div>
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
  const showMain = ref(false)

  provide('showMain', showMain)

  const handleToggleExpand = () => {
    isHidden.value = !isHidden.value
  }

  const handleShowMainFrame = () => {
    showMain.value = !showMain.value
  }
</script>
<style lang="scss" scoped>

.container{
  position: absolute;
  height: 400px;
  top: 0;
  left: 0;
}

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

.hidden-main{
  width: 0;
  height: 400px;
  opacity: 0;
  transform: scale(0) translate(0, 0);
  //animation: disappear 3s forwards;
}

.main{
  width: 250px;
  height: 100%;
  opacity: 1;
  animation: appear 0.5s forwards;
  //transition: all 0.3s cubic-bezier(.45,.53,.83,.67);
}

.hidden {
  opacity: 0;
  transform: scale(0);
  height: 0;
  width: 0;
  margin: 0;
  padding: 0;
}

@keyframes appear {
  0% {
    opacity: 0;
    transform: translate(-50%, 50%) scale(0);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
}

@keyframes disappear {
  0% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-100%, 100%) scale(0);
  }
}

</style>
