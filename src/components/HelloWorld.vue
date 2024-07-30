<template>
  <v-container class="fill-height">
    <div class="container fix-w">
      <div class="inner-container">
        <div class="main-box" :class="{'hidden-main':!showMain}">
          <MainFrame/>
        </div>
        <div class="bottom-bar" :class="{'expand':showMain}">
          <div class="box" @click="handleShowMainFrame"><img alt="" src="@/assets/avatar.png"></div>
          <div class="box action" :class="{'hidden-box':isHidden}">
            <div class="item" :class="{'hidden-text':isHidden}">
              <Chat/>
            </div>
            <div class="item" :class="{'hidden-text':isHidden}">
              <Mic/>
            </div>
            <div class="item" :class="{'hidden-text':isHidden}">
              <Leave/>
            </div>
          </div>
          <div class="box" @click="handleToggleExpand" v-show="!showMain">
            <Minus v-show="!isHidden"/>
            <Plus v-show="isHidden"/>
          </div>
        </div>
      </div>
    </div>

  </v-container>
</template>

<script setup lang="ts">

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
.v-container.fill-height {
  align-items: flex-start;
  padding: 0;
  margin: 0;
}

.container {
  position: relative;
  height: 600px;
  width: 350px;
}

.inner-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-box {
  height: 100%;
  width: 100%;
  transition: height 0.3s ease 0s;
  position: absolute;
  bottom: 0; //+50px height box
  left: 0;

  &.hidden-main {
    visibility: hidden;
    opacity: 0;
    height: 0;
  }
}

.bottom-bar {
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: width 0.3s ease;

  .box {
    width: 50px;
    height: 100%;
    cursor: pointer;
    background-color: white;
    color: white;
    transition: width 0.3s ease;

    &.action {
      display: flex;
      //flex: 0 0 calc(50px * 3);
      width: 150px;
      height: 100%;

      &.hidden-box {
        width: 0;
      }

      .hidden-text{
        display: none;
      }
    }
  }

  &.expand{
    width: 100%;
    justify-content: space-between;
  }

}

img {
  width: 100%;
  height: 100%;
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
