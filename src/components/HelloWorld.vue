<template>
  <v-container class="fill-height">
    <div class="container fix-w">
      <div class="inner-container">
        <div class="main-box" :class="{'hidden-main':!showMain}">
          <MainFrame @handle-click="handleCollapse" :stream-id="streamId" :show-chat="showChat"/>
        </div>
        <div class="bottom-bar" :class="{'expand':showMain}">
          <div :class="{'selected':streamId===1}" class="box test" @click="openVideo(1)"><img alt=""
                                                                                              src="@/assets/avatar.png">
          </div>
          <!--          <div :class="{'selected':streamId===2}" class="box test" @click="openVideo(2)"><img alt=""-->
          <!--                                                                                              src="@/assets/avt.jpeg">-->
          <!--          </div>-->

          <div class="box action" :class="{'hidden-box':isHidden, 'box-main':showMain}">
            <div @click="handleChat" class="item" :class="{'hidden-text':isHidden}">
              <Chat :show-chat="showChat"/>
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
          <div class="box" @click="handleToggleExpand">
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
  console.log(number)
  console.log(streamId.value)
  if (streamId.value === number) {
    showMain.value = false
    streamId.value = 0
    showChat.value = false
  } else {

    isHidden.value = false

    setTimeout(() => {
      showChat.value = false
      streamId.value = number
      showMain.value = true
    }, 0)
  }


}
const handleCollapse = () => {
  showChat.value = false
  showMain.value = false
  streamId.value = 0

  setTimeout(() => {
    isHidden.value = false
  }, 0)

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

const widthButtonBar = computed(() => {
  let width = '100px';
  if (isHidden.value && !showMain.value) width = '100px'
  if (!isHidden.value && !showMain.value) width = '300px'
  if (showMain.value) {
    width = '370px'
  }
  return width
})

const handleToggleExpand = () => {
  isHidden.value = !isHidden.value

  setTimeout(() => {

    showMain.value = false
    streamId.value = 0
    showChat.value = false
  }, 0)

}

const handleChat = () => {

  if (showChat.value) {
    showChat.value = false
    if (!streamId.value)
      showMain.value = false
    return
  }
  showMain.value = true
  showChat.value = true
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
  margin: 100px;
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
  transition: all 0.5s cubic-bezier(0.05, 0.7, 0.1, 1.0);
  position: absolute;
  bottom: 0; //+50px height box
  left: 0;
  z-index: 1;

  &.hidden-main {
    width: v-bind(widthButtonBar);
    visibility: hidden;
    opacity: 0;
    height: 0;
  }
}

.bottom-bar {
  z-index: 2;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  //transition: width 0.3s ease;
  background-color: #F2F4F6;
  transition: all 0.5s cubic-bezier(0.05, 0.7, 0.1, 1.0);

  .selected {
    border: 1px solid deepskyblue;
  }


  .box {
    width: 50px;
    height: 50px;

    cursor: pointer;
    background-color: white;
    color: white;

    &.action {
      display: flex;
      align-items: center;
      //flex: 1 1 50px;
      //flex: 0 0 calc(50px * 3);
      min-width: v-bind(widthBoxAction);
      height: 100%;
      transition: all 0.5s cubic-bezier(0.05, 0.7, 0.1, 1.0);
      background-color: #F2F4F6;

      .item {
        width: 50px;
        transition: all 0.5s cubic-bezier(0.05, 0.7, 0.1, 1.0);
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
    //transition: all 0.5s ease-in-out;
  }

}

img {
  width: 100%;
  height: 100%;
}

</style>
