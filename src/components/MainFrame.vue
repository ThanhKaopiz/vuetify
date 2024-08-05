<template>
  <div class="main-content">
    <div class="inner-content">
      <video class="item-box" :class="{'item-hidden':streamId !==1}" src="@/assets/1.mp4" controls
             autoplay playsinline></video>
      <ChatBox ref="_refChatBox" class="box-chat" :class="{'box-chat-hidden':!showChat}"></ChatBox>

      <!--      <video class="item-box" :class="{'item-hidden':streamId !==2}" src="@/assets/2.mp4" controls-->
      <!--             autoplay playsinline></video>-->
    </div>
  </div>
</template>
<script lang="ts" setup>

const props = defineProps<{ streamId: number, showChat: boolean }>()
const emits = defineEmits(['handleClick'])
const _refChatBox = ref();
watch(() => props.showChat, () => {
  console.log('11')
  _refChatBox.value.scrollToEnd();
})


</script>
<style lang="scss" scoped>


.main-content {
  background-color: #F2F4F6;
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: height 0.3s ease 0s;

  .zoom-button {
    z-index: 1000;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .inner-content {
    background-color: #F2F4F6;
    height: 100%;
    padding: 10px;
    position: relative;
    //overflow: hidden;


    .item-box {
      opacity: 1;
      transition: opacity 1s ease-out;
      width: 100%;
      height: 100%;

      video {
        width: calc(100% - 10px);
        height: calc(100% - 10px);
      }

      &.item-hidden {
        opacity: 0;
        //visibility: hidden;
        //height: 0;

      }


    }
  }
}

.box-chat {
  position: absolute;
  top: 0;
  z-index: 100;
  width: calc(100% - 10px);
  transition: all 0.5s ease;
  height: calc(100% - 10px) !important;
}

.box-chat-hidden {
  height: 0 !important;
  opacity: 0;
  top: 600px;
  overflow: hidden;
  visibility: hidden;
  transition: all 0.5s ease-out;

  //opacity: 0;
}


</style>
