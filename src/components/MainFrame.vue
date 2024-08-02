<template>
  <div class="main-content">
    <div class="inner-content">
      <ChatBox ref="_refChatBox" class="item-content" :class="{'chat':showChat}"></ChatBox>

      <video class="video-1 item-content" :class="{'video':streamId===1}" src="@/assets/1.mp4"
             controls
             autoplay playsinline></video>
      <video class="video-2 item-content" :class="{'video':streamId===2 }" src="@/assets/2.mp4"
             controls
             autoplay playsinline></video>

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


  .inner-content {
    background-color: #F2F4F6;
    height: 100%;
    padding: 10px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;


    .item-content {
      visibility: hidden;
      position: absolute;
      opacity: 1;
      left: -500px;
      bottom: -500px;
      transition: all 0.5s ease-in-out;

      &.video {
        visibility: visible;
        left: 10px !important;
        opacity: 1;
        bottom: 10px;
        height: calc(100% - 20px);
        width: calc(100% - 20px);

      }

      &.chat {
        visibility: visible;

        left: 10px !important;
        opacity: 1;
        bottom: 10px;
        height: calc(100% - 20px);
        width: calc(100% - 20px);
      }
    }


  }
}

video {
  width: 100%;
  height: 100%;
  aspect-ratio: auto;
}


</style>
