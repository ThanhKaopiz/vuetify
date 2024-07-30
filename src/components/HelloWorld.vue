<template>
  <v-container class="fill-height">
    <div class="container fix-w">
      <div class="inner-container">
        <div class="main-box" :class="{'hidden-main':!showMain}">
          <MainFrame @handle-click="handleCollapse" :stream-id="streamId" :show-chat="showChat"/>
        </div>
        <div class="bottom-bar" :class="{'expand':showMain}">
          <div v-show="streamId !==1" class="box" @click="openVideo(1)"><img alt="" src="@/assets/avatar.png" ></div>
          <div v-show="streamId !==2" class="box" @click="openVideo(2)"><img alt="" src="@/assets/avt.jpeg" ></div>

          <div @click="handleChat" class="item" :class="{'hidden-text':isHidden}" v-show="showMain && !showChat">
            <Chat/>
          </div>
          <div class="box action" :class="{'hidden-box':isHidden, 'box-main':showMain}" >
            <div @click="handleChat" class="item" :class="{'hidden-text':isHidden}" v-show="!showMain && !showChat">
              <Chat/>
            </div>
            <div class="item" :class="{'hidden-text':isHidden}">
              <Camera/>
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
const streamId = ref(0);
const showChat = ref(false)


const openVideo = (number:number)=>{
  streamId.value = number
  showMain.value = true
  showChat.value = false

}
const handleCollapse = ()=>{
  showMain.value =false
  streamId.value = 0
  showChat.value =false
}

const handleToggleExpand = () => {
  isHidden.value = !isHidden.value
}

const handleChat = ()=>{
  showMain.value = true
  showChat.value = true
  streamId.value = 0
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
  transition: all 0.3s ease 0s;
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
      flex: 1 1 50px;
      //flex: 0 0 calc(50px * 3);
      min-width: 100px;
      height: 100%;
      transition: all 0.3s ease;

      &.hidden-box {
        width: 0;
      }

      .hidden-text{
        display: none;
      }
    }

    &.box-main{
      justify-content: flex-end;
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
