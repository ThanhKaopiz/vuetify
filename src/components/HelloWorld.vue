<template>
  <v-container class="fill-height">
    <div class="container fix-w">
      <div class="inner-container">
        <div class="main-box" :class="{'hidden-main':!showMain}">
          <MainFrame @handle-click="handleCollapse" :stream-id="streamId" :show-chat="showChat"/>
        </div>
        <div class="bottom-bar" :class="{'expand':showMain}">
          <div :class="{'selected':streamId===1}" class="box" @click="openVideo(1)"><img alt=""
                                                                                         src="@/assets/avatar.png">
          </div>
          <div :class="{'selected':streamId===2}" class="box" @click="openVideo(2)"><img alt="" src="@/assets/avt.jpeg">
          </div>

          <div @click="handleChat" class="item" :class="{'hidden-text':isHidden,'selected':showChat}"
               v-show="showMain">
            <Chat/>
          </div>
          <div class="box action" :class="{'hidden-box':isHidden, 'box-main':showMain}">
            <div @click="handleChat" class="item" :class="{'hidden-text':isHidden}" v-show="!showMain">
              <Chat/>
            </div>
            <div class="item" :class="{'hidden-text':isHidden}">
              <Camera :status="cameraStatus" @click="toggleCamera"/>
            </div>
            <div class="item" :class="{'hidden-text':isHidden}">
              <Mic :status="micStatus" @click="toggleMic"/>
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

const cameraStatus = ref(true)
const micStatus = ref(true)

const openVideo = (number: number) => {
  streamId.value = number
  showMain.value = true
  showChat.value = false
  isHidden.value = false


}
const handleCollapse = () => {
  showMain.value = false
  streamId.value = 0
  showChat.value = false
  isHidden.value = false
}

const toggleMic = () => {
  micStatus.value = !micStatus.value
}

const toggleCamera = () => {
  cameraStatus.value = !cameraStatus.value
}
const widthBoxAction = computed(() => {
  return document.getElementsByClassName('item')?.length === 2 ? '150px' : '200px';
})

const handleToggleExpand = () => {
  isHidden.value = !isHidden.value
}

const handleChat = () => {
  showMain.value = true
  showChat.value = true
  streamId.value = 0
  isHidden.value = false
}

</script>
<style lang="scss" scoped>
.v-container.fill-height {
  background-color: deepskyblue;
  align-items: flex-start;
  padding: 0;
  margin: 0;
}


.container {
  position: absolute;
  //bottom: 200px;
  //right: 200px;
  //position: relative;
  height: 600px;
  width: 370px;
  overflow: hidden;
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
  transition: all 0.8s cubic-bezier(0.05, 0.7, 0.1, 1.0);
  position: absolute;
  bottom: 0; //+50px height box
  left: 0;

  &.hidden-main {
    width: 350px;
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
  //transition: width 0.3s ease;
  background-color: #F2F4F6;
  transition: all 0.3s ease;

  .selected {
    border: 1px solid deepskyblue;
  }


  .box {
    width: 50px;
    height: 50px;

    cursor: pointer;
    background-color: white;
    color: white;
    transition: width 0.5s ease;

    &.action {
      display: flex;
      align-items: center;
      //flex: 1 1 50px;
      //flex: 0 0 calc(50px * 3);
      min-width: v-bind(widthBoxAction);
      height: 100%;
      transition: all 0.3s ease-in-out;
      background-color: #F2F4F6;

      .item {
        width: 50px;
        transition: all 0.3s ease-in-out;
      }


      &.hidden-box {
        width: 0;
        min-width: 0;
        flex-basis: 0;
      }

      .hidden-text {
        width: 0;
        visibility: hidden;
      }
    }

    &.box-main {
      justify-content: flex-end;
    }
  }

  &.expand {
    width: 100%;
    height: 60px;
    padding: 10px;
    justify-content: space-between;
    //transition: all 1s ease-in-out;
  }

}

img {
  width: 100%;
  height: 100%;
}

</style>
